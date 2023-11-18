// Queries
const btn = document.querySelector('button')
// console.log(btn)
// const input = document.querySelector('input').value

// Functions

// Event Listeners
btn.addEventListener('click',  (event) => {
    // The first parameter that you pass inside the callback function will always be the event object
    // console.log(event)
    // console.log('this', this)

    // Creating an element
    const li = document.createElement('li')
    const input = document.querySelector('input')
    // console.log(input.value)
    
    // Append new li to ul
    const ul = document.querySelector('ul')
    li.textContent = input.value
    ul.appendChild(li)
    input.value = ''

    // REMOVING EVENT LISTENER
    ul.removeEventListener('click', handleClick)
})

// EVENT DELEGATION
const ul = document.querySelector('ul')

function handleClick(e, name) {
    // console.log(name)
    // console.log(e.target.getAttribute('class'))
    if(e.target.localName === 'li') {
        // e.target allows to isolate the element that we clicked on and change it's font color only
        e.target.style.color = 'green'
        console.log('clickable')
    }
}

// if you don't need to pass any arguments, then omit the parenthesis when invoking the callback function. It will automatically send the event object to the callback function.
ul.addEventListener('click', handleClick)

// if you need to pass more arguments you will need to write your event listener like this below
// ul.addEventListener('click', (e) => handleClick(e, 'Teo'))


// EVENT BUBBLING
// const grandparent = document.querySelector('.grandparent')
// const parent = document.querySelector('.parent')
// const child = document.querySelector('.child')

// grandparent.addEventListener('click', () => {
//     console.log('I am the grandparent.')
// })

// parent.addEventListener('click', (e) => {
//     // e.stopPropagation()
//     console.log('I am the parent.')
// })

// child.addEventListener('click', (e) => {
//     // stop the event from propagating all the way up to the document
//     // e.stopPropagation()
//     console.log('I am the child.')
// })

// document.addEventListener('click', () => {
//     console.log('I am the God Father')
// })