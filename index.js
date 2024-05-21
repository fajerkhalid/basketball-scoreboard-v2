// home section ---------------------------------->

let homeEl = document.getElementById("home-el")
let count = 0

function homeOne() {
    count += 1
    homeEl.textContent = count
}

function homeTwo() {
    count += 2
    homeEl.textContent = count
}

function homeThree() {
    count += 3
    homeEl.textContent = count
}

// home reset
function homeReset() {
    homeEl.textContent = 0
    count = 0
}
// end home section ---------------------------------->

// guest section ---------------------------------->
let guestEl = document.getElementById("guest-el")
let countTwo = 0


function guestOne() {
    countTwo += 1
    guestEl.textContent = countTwo
}

function guestTwo() {
    countTwo += 2
    guestEl.textContent = countTwo
}

function guestThree() {
    countTwo += 3
    guestEl.textContent = countTwo
}

// guest reset
function guestReset() {
    guestEl.textContent = 0
    count = 0
}

// end guest section ---------------------------------->