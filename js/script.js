import App from './app.js';

window.addEventListener('DOMContentLoaded', () => {
    /* выбор способа получения товара */

    const tabsBlock = document.querySelector('.tabs-block__tabs'),
          tabs = tabsBlock.querySelectorAll('.tab'),
          tabsContent = document.querySelector('.tabs-block__content'),
          tabsForm = tabsContent.querySelectorAll('.form');

    function hideTabContent() {
        tabsForm.forEach(form => {
            form.classList.add('hidden');
        });

        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
    }

    /* i указываем по умолчанию 0 */
    function showTabContent(i = 0) {
        tabsForm[i].classList.remove('hidden');
        tabs[i].classList.add('active');
    }

    hideTabContent();
    showTabContent();

    function getActiveTab() {
        return tabsBlock.dataset.activeTab;
    }

    console.log(getActiveTab())

    tabsBlock.addEventListener('click', (event) => {
        const target = event.target && event.target.closest('.tab');
        tabsBlock.dataset.activeTab = target.dataset.tab;
        if(target) {
            tabs.forEach((item, i) => {
                if(target === item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });



    const leftToFillField = document.querySelector('.form__submit-header');
    let city, address, pickUpPoint, deliveryDate, deliveryAddress, deliveryTime, paymentTime, contactNumber;

    // function leftToFill() {
    //     if ()
    // }

    function getStaticInformation(parentSelector) {

        document.querySelector(parentSelector).addEventListener('click', (e) => {

            if(e.target.getAttribute('name') === 'city') {
                city = e.target.getAttribute('id');
                console.log(city);
            }

        });
    }

    getStaticInformation('#pickup-city');

    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {
            switch(input.getAttribute('id')) {
                case 'delivery-address':
                    deliveryAddress = input.value;
                    console.log(deliveryAddress);
                    break;
                case 'delivery-user-date-delivery':
                    deliveryDate = input.value;
                    console.log(deliveryDate);
                    break;
                case 'phone':
                    contactNumber = input.value;
                    console.log(contactNumber);
                    break;
            }
        });
        // console.log(deliveryAddress, deliveryDate, contactNumber);
    }

    getDynamicInformation('#delivery-address');
    getDynamicInformation('#delivery-user-date-delivery');
    getDynamicInformation('#phone');

});

const app = new App();

app.init();