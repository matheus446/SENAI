from machine import Pin, ADC, PWM
from utime import sleep

potenciometro = ADC(28)
led_verde = PWM(Pin(14))
led_verde.freq(1000)

#iniciando o led desligado
led_verde.duty_u16(0)


while True:
    
    leitura_pot = potenciometro.read_u16()
    led_verde.duty_u16(leitura_pot)
    
    print("Valor leitura potenciometro", leitura_pot)
    sleep(0.005)