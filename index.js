// template_gt2bi3c
// service_h62bx8y
// 0E1V5nQadaj1wjUzU

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