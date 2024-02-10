// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click

const button = document.createElement('button')
button.setAttribute('id', 'btnToClick')
button.textContent = 'Botoncillo'
document.body.appendChild(button)

button.addEventListener('click', (e) => console.log(e))

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const focus = document.querySelector('input.focus')
focus.addEventListener('focus', (e) => console.log(e.target.value))

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const input = document.querySelector('input.value')
input.addEventListener('input', (e) => console.log(e.target.value))
