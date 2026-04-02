from machine import Pin
from utime import sleep


led_vermelho = Pin(18, Pin.OUT)
led_amarelo = Pin(17, Pin.OUT)
led_verde = Pin(16, Pin.OUT)


botao_carregar = Pin(15, Pin.IN, Pin.PULL_DOWN)
botao_motor = Pin(14, Pin.IN, Pin.PULL_UP)


carga = 0
estado = "parado"


ultimo_estado_botao1 = 0
ultimo_estado_botao2 = 1

while True:

    
    if botao_carregar.value() == 1 and ultimo_estado_botao1 == 0:
        if estado == "carregando":
            estado = "parado"
            print("Carregador Desconectado!")
        else:
            estado = "carregando"
            print("Carregador Conectado!")
        sleep(0.3)

    ultimo_estado_botao1 = botao_carregar.value()

    
    if botao_motor.value() == 0 and ultimo_estado_botao2 == 1:
        if estado == "descarregando":
            estado = "parado"
            print("Motor Desligado")
        else:
            estado = "descarregando"
            print("Motor Ligado - Consumindo Bateria")
        sleep(0.3)

    ultimo_estado_botao2 = botao_motor.value()

    
    if estado == "carregando":
        carga += 5
        if carga > 100:
            carga = 100

    elif estado == "descarregando":
        carga -= 5
        if carga < 0:
            carga = 0

    print(f"Nível da Bateria: {carga}%")

    
    if carga < 20:
        led_vermelho.on()
        led_amarelo.off()
        led_verde.off()

    elif carga < 80:
        led_vermelho.off()
        led_amarelo.on()
        led_verde.off()

    else:
        led_vermelho.off()
        led_amarelo.off()
        led_verde.on()

    
    sleep(1)