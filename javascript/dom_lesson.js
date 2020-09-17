let first_input = document.querySelector(".first__input")
let second_input = document.querySelector(".second__input")




document.getElementById("submit").addEventListener("click", function () {
    total = parseInt(first_input.value) + parseInt(second_input.value)
    document.querySelector(".result").innerHTML = `<p>The total sum is ${total}</p>`
})
