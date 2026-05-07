from machine import Pin, PWM
from utime import sleep

# Buzzer
buzzer = PWM(Pin(16))
buzzer.duty_u16(2000)

# Tempo (igual ao Arduino)
tempo = 150
wholenote = (60000 * 2) / tempo  # atenção: aqui era *2 no original

# Notas usadas
REST = 0
NOTE_E4 = 330
NOTE_G4 = 392
NOTE_GS4 = 415
NOTE_A4 = 440
NOTE_AS4 = 466
NOTE_B4 = 494
NOTE_C5 = 523
NOTE_D5 = 587
NOTE_E5 = 659
NOTE_F5 = 698

# Melodia (mantida)
melody = [
    NOTE_B4,-4, NOTE_E5,-4, NOTE_B4,-4, NOTE_E5,-4,
    NOTE_B4,8, NOTE_E5,-4, NOTE_B4,8, REST,8, NOTE_AS4,8, NOTE_B4,8,
    NOTE_B4,8, NOTE_AS4,8, NOTE_B4,8, NOTE_A4,8, REST,8, NOTE_GS4,8, NOTE_A4,8, NOTE_G4,8,
    NOTE_G4,4, NOTE_E4,-2,

    NOTE_B4,-4, NOTE_E5,-4, NOTE_B4,-4, NOTE_E5,-4,
    NOTE_B4,8, NOTE_E5,-4, NOTE_B4,8, REST,8, NOTE_AS4,8, NOTE_B4,8,

    NOTE_A4,-4, NOTE_A4,-4, NOTE_GS4,8, NOTE_A4,-4,
    NOTE_D5,8, NOTE_C5,-4, NOTE_B4,-4, NOTE_A4,-4,

    NOTE_B4,-4, NOTE_E5,-4, NOTE_B4,-4, NOTE_E5,-4,
    NOTE_B4,8, NOTE_E5,-4, NOTE_B4,8, REST,8, NOTE_AS4,8, NOTE_B4,8,

    NOTE_D5,4, NOTE_D5,-4, NOTE_B4,8, NOTE_A4,-4,
    NOTE_G4,-4, NOTE_E4,-2,

    NOTE_E4,2, NOTE_G4,2,
    NOTE_B4,2, NOTE_D5,2,

    NOTE_F5,-4, NOTE_E5,-4, NOTE_AS4,8, NOTE_AS4,8, NOTE_B4,4, NOTE_G4,4,
]

# Função
def play_tone(freq, duration):
    if freq == REST:
        buzzer.duty_u16(0)
    else:
        buzzer.freq(freq)
        buzzer.duty_u16(2000)

    sleep(duration / 1000)
    buzzer.duty_u16(0)
    sleep(0.015)

# Loop
while True:
    i = 0
    while i < len(melody):
        note = melody[i]
        divider = melody[i + 1]

        if divider > 0:
            note_duration = wholenote / divider
        else:
            note_duration = (wholenote / abs(divider)) * 1.5

        play_tone(note, note_duration)
        i += 2

    sleep(1)