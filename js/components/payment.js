import {API_URL} from '../constants.js';

const maxCardLength = 16;
const maxPhoneLength = 11;

export default class Payment {
    constructor() {
        this.cardBlock = document.querySelector('.js_card');

        this.isCardValid = false;
        this.isPhoneValid = false;
    }

    getPaymentMethod() {
        return document.querySelector(`input[name="payment-method"]:checked`).value;
    }

    initPaymentMethod() {
        const form = document.querySelector(`form`);

        form.addEventListener('change', (e) => {
            if(e.target.name === 'payment-method') {
                this.cardBlock.classList.toggle('hidden', e.target.value !== 'card'); /* вторым аргументом передаем выражение-булево */
            }
        });
    }
}