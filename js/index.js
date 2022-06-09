const body = document
const inputs = document.querySelectorAll(".input")
const displayInput = document.querySelector(".displayResult")
const ok = document.querySelector(".ok")
const alertDiv = document.querySelector(".alert")
const alertText = document.querySelector(".alert-text")
let randomNumber = Math.floor(Math.random() * 100 + 1);

let count = 0
for (let input of inputs) {
    input.addEventListener("click", () => {
        displayInput.value += input.value
    })
}

setInterval(() => {
    alertDiv.classList.remove("active");
}, 5000)

ok.addEventListener("click", () => {
    if (count != 3) {
        count = count + 1
        if (displayInput.value == randomNumber) {
            alertDiv.classList.add('active')
            alertText.innerText = "Siz Yutdingiz"
            alertDiv.style.background = "#00C851"
            setInterval(() => {
                body.location.reload(true);
            }, 2000)
        }

        if (displayInput.value > randomNumber) {
            alertDiv.classList.add('active')
            alertText.innerText = "Siz kiritgan son katta"
            alertDiv.style.background = "#ffbb33"
        }

        if (displayInput.value < randomNumber) {
            alertDiv.classList.add('active')
            alertText.innerText = "Siz kiritgan son kichik"
            alertDiv.style.background = "#ffbb33"
        }

        if (count == 3) {
            alertDiv.classList.add('active')
            alertText.innerText = `Siz Yutqazdingiz men o'ylagan son ${randomNumber}`
            alertDiv.style.background = "#CC0000"
            setInterval(() => {
                body.location.reload(true);
            }, 2000)
        }
        displayInput.value = ""
    }
})






