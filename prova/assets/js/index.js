(() => {
    const minusButton = document.querySelector(".minus-button");
    const plusButton = document.querySelector(".plus-button");
    const counterValueSpan = document.querySelector(".counter-value");

    function minusButtonHandler() {
        let counterCurrentValue = +counterValueSpan.innerHTML
        counterCurrentValue--
        if (counterCurrentValue >= 0)
            counterValueSpan.innerHTML = counterCurrentValue
    }

    function plusButtonHandler() {
        let counterCurrentValue = +counterValueSpan.innerHTML
        counterCurrentValue++
        counterValueSpan.innerHTML = counterCurrentValue
    }

    function counterButtonHandler(operation) {
        switch (operation) {
            case "+":
                let counterCurrentValue = +counterValueSpan.innerHTML
                counterCurrentValue++
                counterValueSpan.innerHTML = counterCurrentValue

                break;

            case "-":
                let counterCurrentValue = +counterValueSpan.innerHTML
                counterCurrentValue++
                counterValueSpan.innerHTML = counterCurrentValue

            default:
                break;
        }

    }

    minusButton.addEventListener("click", counterButtonHandler)
    plusButton.addEventListener("click", counterButtonHandler)
})()