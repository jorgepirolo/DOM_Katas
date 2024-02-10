// 1.1 Inserta dinamicamente en un html un div vacio con javascript.

const emptyDiv = document.createElement('div')
document.body.appendChild(emptyDiv)

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const divp = document.createElement('div')
const myP = document.createElement('p')
divp.appendChild(myP)
document.body.appendChild(divp)

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.

const divPs = document.createElement('div')
for (i = 0; i < 6; i++) {
  const p = document.createElement('p')
  divPs.appendChild(p)
}
document.body.appendChild(divPs)

// 1.4 Inserta dinamicamente con javascript en un html una p con el
// 	texto 'Soy dinámico!'.

const ptext = document.createElement('p')
ptext.textContent = 'Soy dinámico!'
document.body.appendChild(ptext)

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 = document.querySelector('.fn-insert-here')
h2.textContent = 'Wubba Lubba dub dub'

// 1.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')
for (const app of apps) {
  const li = document.createElement('li')
  li.textContent = app
  ul.appendChild(li)
}
document.body.appendChild(ul)

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const nodos = document.querySelectorAll('.fn-remove-me')
for (const nodo of nodos) {
  nodo.remove()
}

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

const pmedio = document.createElement('p')
pmedio.textContent = 'Voy en medio!'
const eldiv = document.querySelectorAll('div')
document.body.insertBefore(pmedio, eldiv[1])

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here

const divin = document.querySelectorAll('.fn-insert-here')
for (const div of divin) {
  const pin = document.createElement('p')
  pin.textContent = 'Voy dentro!'
  div.appendChild(pin)
}
