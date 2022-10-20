export default function createElement(typeEl, classEl, text, attr) {
  const htmlTag = document.createElement(typeEl)
  htmlTag.classList.add(classEl)
  if (attr) htmlTag.setAttribute(attr.type, attr.value)
  if (text) htmlTag.textContent = text

  return htmlTag
}
