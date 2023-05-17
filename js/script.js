window.addEventListener('DOMContentLoaded', () => {
    /* выбор способа получения товара */

    const tabsBlock = document.querySelector('.tabs-block__tabs'),
          tabs = tabsBlock.querySelectorAll('.tab'),
          tabsContent = document.querySelector('.tabs-block__content'),
          tabsForm = tabsContent.querySelectorAll('.form');

    function hideTabContent() {
        tabsForm.forEach(form=> {
            form.style.display = 'none';
        });

        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
    }

    /* i указываем по умолчанию 0 */
    function showTabContent(i = 0) {
        tabsForm[i].style.display = 'block';
        tabs[i].classList.add('active');
    }

    tabsBlock.addEventListener('click', (event) => {
        const target = event.target && event.target.closest('.tab');

        if(target) {
            tabs.forEach((item, i) => {
                if(target === item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

});