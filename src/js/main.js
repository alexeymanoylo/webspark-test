import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const wrappers = document.querySelectorAll('.page-header__date-input-wrapper');
const fpFrom = flatpickr(wrappers[0], {
    wrap: true,
    disableMobile: true,
    dateFormat: 'd_m_Y',
    onChange: (selectedDates) => {
        if (selectedDates.length > 0) {
            fpTo.set('minDate', selectedDates[0]);
        }
    },
});

const fpTo = flatpickr(wrappers[1], {
    wrap: true,
    disableMobile: true,
    dateFormat: 'd_m_Y',
    onChange: (selectedDates) => {
        if (selectedDates.length > 0) {
            fpFrom.set('maxDate', selectedDates[0]);
        }
    },
});

// View switcher
const gridBtn = document.querySelector('.cards-section__view-btn--tiles');
const listBtn = document.querySelector('.cards-section__view-btn--list');
const cardsGrid = document.querySelector('.cards-grid');

gridBtn?.addEventListener('click', () => {
    cardsGrid.classList.remove('cards-grid--list');
    gridBtn.classList.add('cards-section__view-btn--active');
    listBtn.classList.remove('cards-section__view-btn--active');
});

listBtn?.addEventListener('click', () => {
    cardsGrid.classList.add('cards-grid--list');
    listBtn.classList.add('cards-section__view-btn--active');
    gridBtn.classList.remove('cards-section__view-btn--active');
});
