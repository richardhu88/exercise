basic.forever(function () {
    for (let y = 0; y <= 8; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(4 - x, 4 - (y - x))
        }
        basic.pause(100)
    }
    basic.clearScreen()
})
