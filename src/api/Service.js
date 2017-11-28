import fetch from 'isomorphic-fetch'

export const Service = {
  fetch(params = {}) {
    const url = `https://randomuser.me/api/?page=${params.page}
&results=${params.numberOfUsers}`

    return fetch(url)
      .then(response => {
        if (response.status >= 400) {
          throw new Error(`Bad response from server on ${url}`)
        }
        return response.json()
      })
  },
}
