import albums from '../json/cphoto_lib.json';

const AlbumState = {

  albums 

}


export function cphotoReduc (state = AlbumState, action) {

  switch (action.type) {

  case 'ADD_PHOTO':

    return {

      albumState: [...state.albumState, action.imgData]

    }

  default:

    return state

  }

}


