import './scss/app.scss';


const formElement = document.querySelector('#form')

formElement.addEventListener('submit', (event) => {
    console.log('submit')
    if (!formElement.checkValidity()) {
      event.preventDefault()
      formElement.classList.add('enable-validation')
    }
  })
