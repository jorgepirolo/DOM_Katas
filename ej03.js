// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']

const ul = document.createElement('ul')
for (const country of countries) {
  const li = document.createElement('li')
  li.textContent = country
  ul.appendChild(li)
}
document.body.appendChild(ul)

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const elementoremove = document.querySelector('.fn-remove-me')
elementoremove.remove()

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']

const ulcars = document.createElement('ul')
for (const car of cars) {
  const li = document.createElement('li')
  li.textContent = car
  ulcars.appendChild(li)
}
const divatri = document.querySelector('[data-function="printHere"]')
divatri.appendChild(ulcars)

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const countriespics = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

for (const country of countriespics) {
  const div = document.createElement('div')
  const h4 = document.createElement('h4')
  h4.textContent = country.title
  const img = document.createElement('img')
  img.src = country.imgUrl

  div.appendChild(h4)
  div.appendChild(img)
  document.body.appendChild(div)
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la serie de divs.

const button = document.createElement('button')
button.textContent = 'Delete'

document.body.appendChild(button)
button.addEventListener('click', borrado)

function borrado() {
  const divborrar = document.querySelectorAll('div')
  divborrar[divborrar.length - 1].remove()
}
// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// divs que elimine ese mismo elemento del html.

const alldivs = document.querySelectorAll('div')

for (const div of alldivs) {
  const button = document.createElement('button')
  button.textContent = 'Delete this div'
  div.appendChild(button)
  button.addEventListener('click', deletelocal)
  function deletelocal() {
    div.remove()
  }
}
