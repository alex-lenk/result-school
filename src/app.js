import renderDonate from './core/renderDonate'
import recalculation from './core/recalculation'
import {form, input} from './utils/constants'
import moment from 'moment'

export default function initApp() {
  form.addEventListener('submit', event => {
    event.preventDefault()

    const cost = Number(input.value)
    const dateHow = moment().format('MMMM Do YYYY, h:mm:ss a - ')

    input.value = ''

    renderDonate(dateHow, cost)
    recalculation(cost)
  })
}
