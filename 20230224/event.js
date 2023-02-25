mouseDownHandler = (e) => {
    document.body.classList.add('mouse-navigation')
    document.body.classList.remove('kbd-navigation')
}

keyDownHandler = (e) => {
    document.body.classList.add('kbd-navigation')
    document.body.classList.remove('mouse-navigation')
}

clickEventHandler = (e) => {
    if(e.target.tagName === 'A' && e.target.getAttribute('href') === "#"){
        e.preventDefault()
    }
}

window.onerror = (message, source, line, col, error) => {
    const text = error ? error.stack || error : message + '(at ' + ':' + line + ':' + col + ')'
    errors.textContent += text + '\n'
    errors.style.display = 'none'
    console.log(errors)
}

console.error = (function(old){
    return function error(){
        errors.textContent += Array.prototype.slice.call(arguments).join('') + '\n'
        errors.style.display = ''
        old.apply(this, arguments)
        }
})(console.error)

addEventListener('mousedown', mouseDownHandler)
addEventListener('keydown', keyDownHandler)
addEventListener('click', clickEventHandler)