import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const wrappers = document.querySelectorAll('.page-header__date-input-wrapper');
const fpFrom = flatpickr(wrappers[0], {
    wrap: true,
    disableMobile: true,
    dateFormat: 'd_m_Y',
});

const fpTo = flatpickr(wrappers[1], {
    wrap: true,
    disableMobile: true,
    dateFormat: 'd_m_Y',
});

// View switcher
const gridBtn = document.querySelector('.cards-section__view-btn--tiles');
const listBtn = document.querySelector('.cards-section__view-btn--list');
const cardsGrid = document.querySelector('.cards-grid');

function setView(mode) {
    if (mode === 'list') {
        cardsGrid.classList.add('cards-grid--list');
        listBtn.classList.add('cards-section__view-btn--active');
        gridBtn.classList.remove('cards-section__view-btn--active');
    } else {
        cardsGrid.classList.remove('cards-grid--list');
        gridBtn.classList.add('cards-section__view-btn--active');
        listBtn.classList.remove('cards-section__view-btn--active');
    }
    localStorage.setItem('viewMode', mode);
}

// Restore saved view
const saved = localStorage.getItem('viewMode');
if (saved === 'list') {
    setView('list');
}

gridBtn?.addEventListener('click', () => setView('grid'));
listBtn?.addEventListener('click', () => setView('list'));

// Anchor positioning fallback for Firefox (CSS Anchor Positioning not supported)
if (!CSS.supports('anchor-name', '--foo')) {
    const shape = document.querySelector('.page-header__bg-shape');
    const logo = document.querySelector('.page-header__logo');

    if (shape && logo) {
        function positionShape() {
            const headerRect = shape.parentElement.getBoundingClientRect();
            const logoRect = logo.getBoundingClientRect();

            let offset = 130;
            if (window.innerWidth < 680) {
                offset = 30;
            } else if (window.innerWidth < 768) {
                offset = 36;
            } else if (window.innerWidth < 1200) {
                offset = 100;
            }

            const logoRightRelative = logoRect.right - headerRect.left;
            const right = headerRect.width - (logoRightRelative + offset);

            shape.style.right = right + 'px';
        }

        positionShape();
        window.addEventListener('resize', positionShape);
    }
}
