import createElement from './core/createElement'
import getRandomColor from './core/utils'
import {body} from './core/constants'

export default function initApp() {
  const btn = createElement('button', 'button', 'Изменить цвет страницы')
  btn.addEventListener('click', () => body.style.backgroundColor = getRandomColor())
  body.append(btn)
}
