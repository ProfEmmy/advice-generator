const API_URL = "https://api.adviceslip.com/advice"

const advice_text = document.querySelector(".advice")
const advice_id = document.querySelector(".advice-id")

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        advice_id.innerText = `${data.slip.id}`
        advice_text.innerText = `"${data.slip.advice}"`
    })