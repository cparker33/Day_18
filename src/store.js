import { createStore } from 'redux'
// import { killPhoto } from './api/cphoto.js'
import { cphotoReduc } from './reducers/cphoto'

// import { cAlbumState } from './reducers/cphoto'


const store = createStore(cphotoReduc)

export default store