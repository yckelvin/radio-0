input.onButtonPressed(Button.A, function () {
    radio.sendValue("GET", 100)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("POST", 200)
})
radio.onReceivedValue(function (name, value) {
    if (name == "GET") {
        basic.showNumber(value)
    } else if (name == "POST") {
        basic.showNumber(value)
    }
})
basic.showNumber(0)
radio.setGroup(1)
basic.forever(function () {
	
})
