'use strict'

// calculate block

const inputCoin = document.getElementById('coin');
const totalFee = document.querySelector('.fee');
const totalAmount = document.querySelector('.amount');

const fee = 0.03;

inputCoin.addEventListener ('mousewheel', (e) => e.preventDefault());

inputCoin.addEventListener ('input', () => {
    const feeValue = inputCoin.value * fee;
    totalFee.textContent = feeValue.toFixed(8);
    totalAmount.textContent = (inputCoin.value - feeValue).toFixed(8);
})

// send wallet block

const blockWallet= document.querySelector('.send-wallet');
const wallet = document.querySelector('.hidden');
const btnAdd = document.querySelector('.btn-add');

function addWallet () {
    const clone = wallet.cloneNode(true);
    clone.classList.remove('hidden');
    blockWallet.append(clone);
    const close = document.querySelector('.close');
    close.addEventListener ('click', () => {
        clone.remove();
    })
}

btnAdd.addEventListener ('click', addWallet)

