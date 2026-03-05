from machine import Pin
from utime import sleep

ledVermelho = Pin(16, Pin.OUT)
ledAmarelo = Pin(17, Pin.OUT)
ledVerde = Pin(18, Pin.OUT)

ordem = [(ledVerde,3),(ledAmarelo, 1),(ledVermelho,2)]

while True:
    for led, tempo in ordem:
        led.value(1)
        sleep(tempo)
        led.value(0)