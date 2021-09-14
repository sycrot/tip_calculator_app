let bill = document.querySelector('#bill')
let tipPercent =document.querySelectorAll('.btn-selecttip')
let numberOfPeople = document.querySelector('#n-people')
let percentTipValue = 0
let buttonReset = document.querySelector('.result-reset')

let alert = document.querySelector('.alert-inf-selecttip')
tipPercent.forEach(e => {
    e.addEventListener('click', () => {
        switch(e.textContent) {
            case '5%':
                percentTipValue = 5
                styleBtn(e)
            break;
            case '10%':
                percentTipValue = 10
                styleBtn(e)
            break;
            case '15%':
                percentTipValue = 15
                styleBtn(e)
            break;
            case '25%':
                percentTipValue = 25
                styleBtn(e)
            break;
            case '50%':
                percentTipValue = 50
                styleBtn(e)
            break;
        }
    })
})
focusCustom()
function focusCustom() {
    let custom  = document.querySelector('.ipt-selecttip')
    custom.addEventListener('focus', () => {
        alert.classList.remove('alert-inf-selecttip-active')
        tipPercent.forEach(e => {
            e.classList.remove('btn-selecttip-active')
        })
    })
    custom.addEventListener('blur', () => {
        if (custom.value == '') {
            alert.classList.add('alert-inf-selecttip-active')
        }
    })
}

let npeople = document.querySelector('.inf-t-people .err-title-alert')
let bamount = document.querySelector('.inf-b-title .err-title-alert')
focusInput(numberOfPeople, npeople)
focusInput(bill, bamount)

function focusInput(el, alert) {
    el.addEventListener('focus', () => {
        alert.classList.remove('err-title-alert-active')
    })
    el.addEventListener('blur', () => {
        if (el.value == '') {
            alert.classList.add('err-title-alert-active')
        }
    })
}

function valueCustom() {
    let custom = document.querySelector('#btn-ipt-selecttip').value

    return custom == '' ? 0 : parseInt(custom.replace(/([^\d])+/gim, ''))
}

function styleBtn(el) {
    tipPercent.forEach(e => {
        e.classList.remove('btn-selecttip-active')
    })
    alert.classList.remove('alert-inf-selecttip-active')
    el.classList.add('btn-selecttip-active')
}

buttonReset.addEventListener('click', getResult)

function getResult() {
    const tipAmountPerPerson = document.querySelector('.tip-amount-per-person')
    const totalPerPerson = document.querySelector('.total-per-person')

    let numPeoples = numberOfPeople.value == '' ? 0 : numberOfPeople.value
    let amount = bill.value == '' ? 0 : parseFloat(bill.value)
    let tip = valueCustom() == 0 ? percentTipValue : valueCustom()//gorjeta
    if (tip == 0) {
        alert.classList.add('alert-inf-selecttip-active')
    } 
    if (numPeoples == 0) {
        let npeople = document.querySelector('.inf-t-people .err-title-alert')
        addAlertErr(npeople)
    }
    
    if (amount == 0) {
        let bamount = document.querySelector('.inf-b-title .err-title-alert')
        addAlertErr(bamount)
    }
    if (tip != 0 && amount != 0 && numPeoples != 0) {
        let totalValue = amount * tip/100 + amount
        let valueTipPerPerson = amount * tip/100 / numPeoples
        let valuePerPerson = totalValue / numPeoples

        tipAmountPerPerson.innerHTML = `$${valueTipPerPerson.toFixed(2)}`
        totalPerPerson.innerHTML = `$${valuePerPerson.toFixed(2)}`
    }
}

function addAlertErr(el) {
    el.classList.add('err-title-alert-active')
}

