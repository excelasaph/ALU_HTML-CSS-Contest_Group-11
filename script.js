const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
const navItems = document.querySelectorAll('.nav-item')
const eventClick = document.querySelector('.event-click')
const contactClick = document.querySelector('.contact-click')
const aboutClick = document.querySelector('.about-click')
const eventRedirect = document.querySelector('.event-redirect')
const contactRedirect = document.querySelector('.contact-redirect')
const aboutRedirect = document.querySelector('.about-redirect')
const eventResponse = document.querySelector('.event-response')
const eventRequest = document.querySelector('.event-request')
const contactResponse = document.querySelector('.contact-response')
const contactRequest = document.querySelector('.contact-request')
const aboutResponse = document.querySelector('.about-response')
const aboutRequest = document.querySelector('.about-request')
const eventFooterClick = document.querySelector('.event-footer-click')
const contactFooterClick = document.querySelector('.contact-footer-click')
const aboutFooterClick = document.querySelector('.about-footer-click')



function selectNav(e) {
    removeNavBorder()
    this.classList.add('nav-border')
}

function removeNavBorder() {
    navItems.forEach(item => item.classList.remove('nav-border'))
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

function selectItem(e) {
    removeBorder()
    removeShow()
    // Add border to current tab
    this.classList.add('tab-border')
    // Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    // Add show class
    tabContentItem.classList.add('show')
}
