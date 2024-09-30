import './button.scss'

class Button {
    create(){
        const button = document.createElement('button')
        button.innerText = 'click'
        button.classList.add('main-button')
        document.querySelector('body').appendChild(button)

        button.addEventListener('click', () => {
            alert('hello')
        })
    }
}

export default Button