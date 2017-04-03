import store from '../store'

 export function killPhoto(id) {

  store.dispatch({

    type: 'ADD_PHOTO',
    id: id

  })

 }


