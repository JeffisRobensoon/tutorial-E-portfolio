// template_gt2bi3c
// service_h62bx8y
// 0E1V5nQadaj1wjUzU

let contrastToggle = false
const scaleFactor = 1 / 20

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape")
  const x = event.clinetX * scaleFactor;
  const y = event.clinetY * scaleFactor;
  
  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform - `translate1(${boolInt}px, ${boolInt}px)`
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle
  if (contrastToggle) {
  document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
}

function contact (event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading')
  const success = document.querySelector('.modal__overlay--success')
  loading.classList += " modal__overlay--visible"

  emailjs
   .sendForm(
     'service_h62bx8y',
    'template_gt2bi3c',
     event.target,
    'user_0E1V5nQadaj1wjUzU'
   ).then(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible"
  }).catch(() => {
    loading.classList.remove("modal__overlay--visible")
    alert(
      "The email service is temporarily unavailable. Please contact me directly at jrobinson11504@gmail.com"
    );
  })
 }

 let isModalOpen = false;
 function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open")
  }
  isModalOpen = true;
  document.body.classList += " modal--open"
 }