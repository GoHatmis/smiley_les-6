input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(100)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    for (let index = 0; index < 10; index++) {
        basic.showNumber(randint(1, 6))
        basic.clearScreen()
        basic.pause(100)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Sad)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Asleep)
    basic.pause(100)
    basic.clearScreen()
})
