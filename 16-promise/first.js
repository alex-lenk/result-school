'use strict'

const dataContainer = document.querySelector('#data-container')

const createUserElement = (text) => {
  const li = document.createElement('li')
  const a = document.createElement('a')
  a.href = '#'
  a.textContent = text
  li.append(a)
  return li
}

const toggleLoader = () => {
  const loaderEl = dataContainer.querySelector('#loader')
  const isHeading = loaderEl.hasAttribute('hidden')
  if (isHeading) {
    loaderEl.removeAttribute('hidden')
  } else {
    loaderEl.setAttribute('hidden', '')
  }
}

const getName = () => {
  toggleLoader()

  const URL_USERS = 'https://jsonplaceholder.typicode.com/users'

  const result = fetch(URL_USERS, {
    method: 'GET',
  })

  result
    .then(response => {
      if (!response.ok) {
        throw 'ошибка запроса, проверьте урл'
      }
      return response.json()
    })
    .then(users => {
      users.forEach(user => dataContainer.append(createUserElement(user.name)))
    })
    .catch(error => console.error(error))
    .finally(() => toggleLoader())
}

getName()
