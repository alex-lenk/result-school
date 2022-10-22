import createElement from '../utils/createElement'
import {donates} from '../utils/constants'

export default function renderDonate(date, cost) {
  const div = createElement('div', 'donate-item')
  const b = createElement('b')
  div.textContent = date
  b.textContent = cost + '$'
  div.append(b)
  donates.prepend(div)
}
