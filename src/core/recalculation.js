import {amount} from '../utils/constants'

export default function recalculation(cost) {
  const total = Number(amount.textContent.slice(0, -1))
  const totalDonates = total + cost

  amount.textContent = `${totalDonates}$`
}
