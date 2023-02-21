const root = document.querySelector('#root')
const h1 = document.createElement('h1')
const span = document.createElement('span')
const p = document.createElement('p')
const button = document.createElement('button')

button.addEventListener('click', (e) => {
    if(e.target.innerHTML === "SignIn"){
        e.target.innerHTML = "SignOut"
    } else {
        e.target.innerHTML = "SignIn"
    }
})
button.innerHTML = 'SignIn'

root.append(button)