from machine import Pin, ADC, PWM
import utime # Importação recomendada para usar as funções de ticks com segurança

# --- CONFIGURAÇÃO DOS COMPONENTES ---
ldr = ADC(26)
pir = Pin(2, Pin.IN)
led_pwm = PWM(Pin(14, Pin.OUT))

# CORREÇÃO: Adicionado o modo Pin.IN antes do Pull-Down para os botões funcionarem
btn_mudar = Pin(3, Pin.IN, Pin.PULL_DOWN)
btn_mais = Pin(16, Pin.IN, Pin.PULL_DOWN)
btn_menos = Pin(17, Pin.IN, Pin.PULL_DOWN)

led_pwm.freq(1000)
led_pwm.duty_u16(0)

# --- VARIÁVEIS DE CONTROLE DE ESTADO ---
tempo_ultimo_movimento = utime.ticks_ms()

modo_estudo = False          # False = Modo Automático | True = Modo Estudo (Manual)
ultimo_estado_btn_mudar = 0  # Armazena o estado anterior do botão para evitar cliques duplos
brilho_manual = 40000        # Brilho inicial padrão ao entrar no Modo Estudo (~60% de intensidade)

while True:
    # --- LEITURA DOS SENSORES E BOTÕES ---
    leitura_ldr = ldr.read_u16()
    leitura_pir = pir.value()
    
    estado_btn_mudar = btn_mudar.value()
    estado_btn_mais = btn_mais.value()
    estado_btn_menos = btn_menos.value()
    
    # --- FUNCIONALIDADE: INTERRUPTOR (ALTERAR MODO DE OPERAÇÃO) ---
    # Detecta a "borda de subida" (o exato momento em que o botão foi pressionado)
    if estado_btn_mudar == 1 and ultimo_estado_btn_mudar == 0:
        modo_estudo = not modo_estudo  # Inverte o modo atual
        utime.sleep_ms(50)             # Pequena pausa (debounce) para evitar ruído elétrico
        
        # Se saiu do modo estudo e voltou pro automático, limpa o LED e reseta o timer
        if not modo_estudo:
            tempo_ultimo_movimento = utime.ticks_ms()
            led_pwm.duty_u16(0)
            
    ultimo_estado_btn_mudar = estado_btn_mudar # Atualiza o histórico do botão de modo
    
    # --- LÓGICA DE FUNCIONAMENTO DO SISTEMA ---
    if modo_estudo:
        # ==========================================
        # FUNCIONALIDADE: MODO ESTUDO (MANUAL)
        # ==========================================
        # Ignora sensores de movimento e luminosidade. A luz fica ligada direto.
        
        # Aumentar intensidade do LED
        if estado_btn_mais == 1:
            brilho_manual = min(65535, brilho_manual + 3000) # Não deixa passar do limite máximo
            utime.sleep_ms(100) # Delay para o ajuste ser suave enquanto segura o botão
            
        # Diminuir intensidade do LED
        if estado_btn_menos == 1:
            brilho_manual = max(0, brilho_manual - 3000)     # Não deixa ficar menor que zero
            utime.sleep_ms(100)
            
        led_pwm.duty_u16(brilho_manual) # Aplica o brilho definido pelos botões
        
    else:
        # ==========================================
        # FUNCIONALIDADE: MODO AUTOMÁTICO (PIR + LDR)
        # ==========================================
        
        # Se detectar movimento
        if leitura_pir == 1:
            tempo_ultimo_movimento = utime.ticks_ms() # Atualiza o tempo do último movimento
            
            # Se estiver escuro (Limite definido por você de 30000)
            if leitura_ldr < 30000:
                # FUNCIONALIDADE: Regular a intensidade conforme a luz do ambiente
                brilho_auto = 65535 - leitura_ldr
                led_pwm.duty_u16(brilho_auto)
            
        # CORREÇÃO: Usando ticks_diff para calcular o tempo passado sem travar o contador interno
        tempo_passado = utime.ticks_diff(utime.ticks_ms(), tempo_ultimo_movimento)
            
        # FUNCIONALIDADE: Se não houver movimento por 30 segundos (30000 ms), apaga o LED
        if tempo_passado > 30000:
            led_pwm.duty_u16(0)
    
    utime.sleep(0.1) # Ciclo de clock do loop principal