import React from 'react';
// import albums from '../json/cphoto_lib.json';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import LeftBar from './LeftBar.js';
import PhotoView from './viewPhoto.js';
import AlbumView from './viewAlbum.js';
import HeartView from './viewHeart.js';
import AlbumPhotosView from './viewAlbumPhotos.js';
import ViewImage from './viewImageFull.js';




// console.log(photos)

const appContStyle = {

  mainWrap: {

    width: 1200,
    border: '2px solid #FFF',
    height: 600,
    display: 'flex',
    marginTop: 20,
    marginLeft: 20,
  },

  imgCont: {

    width: 50,
    height: 50
  }

}

export default React.createClass({


  render() {

    return (

    
      <Router>
        <div
          style={appContStyle.mainWrap}
        >
  
        <LeftBar />
        
        <Route exact={true} path='/' component={PhotoView} />
        <Route path='/image/:indx' component={ViewImage} />

        <Route exact={true}  path='/albumview/' component={AlbumView} />
        <Route path='/albumview/:indx' component={AlbumPhotosView} />
        
        <Route path='/heartview/' component={HeartView} />

        </div>


        </Router>
    )

  }

})