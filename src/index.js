import './index.css'
import img from './about.jpg';

console.log('Привет мир!')

const app = document.querySelector('#app')
const imgEl = document.createElement('img')
imgEl.classList.add('media')
imgEl.src = img
app.append(imgEl)
