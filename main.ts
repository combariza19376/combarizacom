basic.showString("Hola soy combariza")
basic.showLeds(`
    . . . # #
    . . # # .
    # # # . .
    . . . # .
    . . . . #
    `)
basic.showString("" + ((7 as any) == (5 as any)))
basic.showIcon(IconNames.Heart)
basic.pause(2000)
basic.showArrow(ArrowNames.SouthEast)
basic.pause(200)
basic.showString("E D G F B A C5 B ")
basic.showString("" + ((8 as any) < (5 as any)))
led.plotBarGraph(
7,
3.8
)
music.ringTone(294)
music.setVolume(255)
led.plot(3, 4)
basic.showString("Tu IA que hace cualquier cosa\"combariza")
