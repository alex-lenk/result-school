export default function createElement(tagName, className) {
  const tagHTML = document.createElement(tagName)
  if (className) tagHTML.classList.add(className)
  return tagHTML
}
