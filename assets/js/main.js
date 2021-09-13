let bill = document.querySelector('#bill')
let tipPercent =document.querySelectorAll('.btn-selecttip')
let numberOfPeople = document.querySelector('#n-people')
let percentTipValue = 0
let buttonReset = document.querySelector('.result-reset')

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
            case 'Custom':
                percentTipValue = 5
                styleBtn(e)
            break;
        }
    })
})

function styleBtn(el) {
    tipPercent.forEach(e => {
        e.classList.remove('btn-selecttip-active')
    })
    el.classList.add('btn-selecttip-active')
}

buttonReset.addEventListener('click', getResult)

function getResult() {
    const tipAmountPerPerson = document.querySelector('.tip-amount-per-person')
    const totalPerPerson = document.querySelector('.total-per-person')

    let numPeoples = numberOfPeople.value
    let amount = parseFloat(bill.value)
    let tip = percentTipValue//gorjeta
    let totalValue = amount * tip/100 + amount
    let valueTipPerPerson = amount * tip/100 / numPeoples
    let valuePerPerson = totalValue / numPeoples

    tipAmountPerPerson.innerHTML = `$${valueTipPerPerson.toFixed(2)}`
    totalPerPerson.innerHTML = `$${valuePerPerson.toFixed(2)}`
}

