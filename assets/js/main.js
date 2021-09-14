let bill = document.querySelector('#bill')
let tipPercent =document.querySelectorAll('.btn-selecttip')
let numberOfPeople = document.querySelector('#n-people')
let percentTipValue = 0
let buttonReset = document.querySelector('.result-reset')

let alert = document.querySelector('.alert-inf-selecttip')

let npeople = document.querySelector('.inf-t-people .err-title-alert')
let bamount = document.querySelector('.inf-b-title .err-title-alert')

init()

function init() {
    focusCustom()
    focusInput(numberOfPeople, npeople)
    focusInput(bill, bamount)
    buttonReset.addEventListener('click', getResult)
}

tipPercent.forEach(e => {
    e.addEventListener('click', () => {
        percentTipValue = parseFloat(e.textContent.replace(/([^\d])+/gim, ''))
        styleBtn(e)
    })
})

function focusCustom() {
    let custom  = document.querySelector('.ipt-selecttip')
    custom.addEventListener('focus', () => {
        removeClassList(alert, 'alert-inf-selecttip-active')
        tipPercent.forEach(e => {
            removeClassList(e, 'btn-selecttip-active')
        })
    })
    custom.addEventListener('blur', () => {
        if (custom.value == '') {
            addClassList(alert, 'alert-inf-selecttip-active')
        }
    })
}

function focusInput(el, alert) {
    el.addEventListener('focus', () => {
        removeClassList(alert, 'err-title-alert-active')
    })
    el.addEventListener('blur', () => {
        if (el.value == '') {
            addClassList(alert, 'err-title-alert-active')
        }
    })
}

function valueCustom() {
    let custom = document.querySelector('#btn-ipt-selecttip').value

    return custom == '' ? 0 : parseInt(custom.replace(/([^\d])+/gim, ''))
}

function styleBtn(el) {
    tipPercent.forEach(e => {
        removeClassList(e, 'btn-selecttip-active')
    })
    removeClassList(alert, 'alert-inf-selecttip-active')
    addClassList(el, 'btn-selecttip-active')
}

function getResult() {
    const tipAmountPerPerson = document.querySelector('.tip-amount-per-person')
    const totalPerPerson = document.querySelector('.total-per-person')

    let numPeoples = numberOfPeople.value == '' ? 0 : numberOfPeople.value
    let amount = bill.value == '' ? 0 : parseFloat(bill.value)
    let tip = valueCustom() == 0 ? percentTipValue : valueCustom()//gorjeta
    if (tip == 0) {
        addClassList(alert, 'alert-inf-selecttip-active')
    } 
    if (numPeoples == 0) {
        addClassList(npeople, 'err-title-alert-active')
    }
    
    if (amount == 0) {
        addClassList(bamount, 'err-title-alert-active')
    }
    if (tip != 0 && amount != 0 && numPeoples != 0) {
        let totalValue = amount * tip/100 + amount
        let valueTipPerPerson = amount * tip/100 / numPeoples
        let valuePerPerson = totalValue / numPeoples

        tipAmountPerPerson.innerHTML = `$${valueTipPerPerson.toFixed(2)}`
        totalPerPerson.innerHTML = `$${valuePerPerson.toFixed(2)}`
    }
}

function addClassList(el, classlist) {
    el.classList.add(classlist)
}

function removeClassList(el, classlist) {
    el.classList.remove(classlist)
}

