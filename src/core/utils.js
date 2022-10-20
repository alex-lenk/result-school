export default function getRandomColor() {
  return '#'+(Math.random()*0xffffff).toString(16).slice(-6)
}
