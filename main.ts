for (let y = 0; y <= 4; y++) {
    if (y % 2 == 0) {
        for (let x = 0; x <= 4; x++) {
            if (x % 2 == 0) {
                led.plot(x, y)
                basic.pause(100)
            }
        }
    } else {
        for (let x = 0; x <= 4; x++) {
            if (x % 2 == 1) {
                led.plot(x, y)
                basic.pause(100)
            }
        }
    }
}
