
import x from '../../assets/webpack.png'

class Image {
    inserImage(){
        const img = document.createElement('img')
        img.src = x
        img.classList.add('main-image')
        document.querySelector('body').appendChild(img)
    }
}

export default Image