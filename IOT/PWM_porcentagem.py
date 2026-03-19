from machine import Pin, PWM
from utime import sleep

led = PWM(Pin(14))
led.freq(1000)

leitura = 6000

porcentagem = leitura / 6535 * 100

print(f"o valor em porcentagem é de: {porcentagem:.2f}% %")

while True:
    
    def converte_porcentagem (leitura):
        porcentagem = leitura / 6535 * 100
    
    converte_porcentagem(leitura)






