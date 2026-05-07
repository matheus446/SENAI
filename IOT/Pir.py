from machine import Pin
from utime import sleep

pir = Pin(17, Pin.IN)

sleep(10)

while True:
    leitura = pir.value()
    
    if leitura == 1:
        print("presença detectada!")
    else:
        print("nada detectado")
        
    sleep(0.5)
    