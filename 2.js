// 監聽滾動事件，改變導航欄背景
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbwRs8rHx9lKVOlcE_jmVMHO9_Q9g9WMGqjaOGx0iPI9j-6gB5Emg1UMpZ9jXL85WzdYcA/exec' 
const form = document.forms['contactForm']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      alert('感謝您的留言，我們會盡快回覆！')
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})