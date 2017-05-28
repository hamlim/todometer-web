import { ENV } from './vars'
const get = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${ENV.API_KEY}`
  }
}

const post = data => ({
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    Authorization: `Bearer ${ENV.API_KEY}`,
    'Content-type': 'application/json'
  }
})

// prettier-ignore
const dummy = itemList => ({
  "fields": {
    "todos": JSON.stringify(itemList)
  }
})

export const generateKey = async itemList => {
  const resp = await fetch(ENV.endpoint, post(dummy(itemList)))
  const data = await resp.json()
  return data
}
