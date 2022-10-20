export default function cookieModal() {
  const cookieConsent = document.querySelector('.js-cookie-consent')

  if (!localStorage.getItem('cookie')) {
    cookieConsent.addEventListener('click', function ({target}) {
      if (target.classList.contains('js-cookie-consent__button')) {
        localStorage.setItem('cookie', 'true')
        this.style.display = 'none'
      }
    })
  } else {
    cookieConsent.style.display = 'none'
  }
}
