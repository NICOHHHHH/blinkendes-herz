input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    for (let index = 0; index < 10; index++) {
        music.playMelody("B A G A G F A C5 ", 1000)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    music.playMelody("- - - - - C5 - C5 ", 250)
    basic.showLeds(`
        . # # # .
        . . . # .
        . . . # .
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . # # .
        . # . . .
        . # . . .
        . # . . .
        . . # # .
        `)
    basic.showLeds(`
        . # . . #
        . # . # .
        . # # . .
        . # . # .
        . # . . #
        `)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        . # . # .
        . # # # .
        `)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
})
