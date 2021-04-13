import axios from 'axios'

const config = {
    baseURL: 'http://localhost:3027/',
}

export const getSprites = async () => {
    const responsePromise = axios.get('/sprites', config)
    return responsePromise.then((response) => response.data)
}

export const postSprite = async ({ graphic }) => {
    const data = { graphic }
    console.log('POST', data)
    const responsePromise = axios.post('/sprites', data, config)
    return responsePromise.then((response) => response.data)
}