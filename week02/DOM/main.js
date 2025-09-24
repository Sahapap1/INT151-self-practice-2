//<p format="italic"><i>Sample Italic Text</i></p>
//1. append <p> under <div id="demo">
const demo = document.getElementById('demo')
const pElement = document.createElement('p')
demo.appendChild(pElement)

const iElement = document.createElement('i')

//1.5 add format='italic' attribute to <p>
pElement.setAttribute('format', 'italic')

//2. try to add three different text types
//2.1 add <i>Sample Italic Text</i> with innerHTML
// pElement.innerHTML += `<i>Sample Italic Text</i>`

//2.2  add <i>Sample Italic Text</i> with innerText
// pElement.appendChild(iElement)
// pElement.innerText = "Sample Italic Text"

//2.3 add <i>Sample Italic Text</i> with textContent
pElement.appendChild(iElement)
// pElement.textContent = "Sample Italic Text"
// console.log(pElement.textContent);



console.log(demo.innerHTML);