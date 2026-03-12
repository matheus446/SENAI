from machine import Pin
from utime import sleep

pull_down = Pin(18, Pin.IN)

while True:
    # Variavel que armazenara o estado do botão
    estado_botao = pull_down.value()
    
    if estado_botao == 0:
        
        print("0- botão foi pressionado! (LOW)")
        print(estado_botao)
    else:
        print("1- botão foi pressionado! (HIGHT)")
        print(estado_botao)
        
        
    sleep(0.5)



