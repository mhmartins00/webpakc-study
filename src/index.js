import Title from "./components/title/title.js";
import Image from "./components/image/image.js";
import Button from "./components/button/button.js";
import warning from './templates/warning.html'
import text from './files/text.txt'
import description from './files/description.json'

const title = new Title()
const image = new Image()
const button = new Button()

title.create("FIRST TITLE")
button.create()
image.inserImage()

const obj = {a: 1, b: 2, c: 3, d: 4}
let {a, b, ...teste} = obj

console.log(a)
console.log(b)
console.log(teste)

const body = document.querySelector('body')
body.innerHTML += warning

body.innerHTML += text

console.log(description.age)
console.log(description.name)