import React from 'react';
import { Link } from 'react-router-dom'

// import { BrowserRouter as Router, Route} from 'react-router-dom'
// import photos from './JSON/cphoto_lib.json';



const leftBarStyle = {

  mainWrap: {

    width: 150,
    borderRight: '1px solid #FFF',
    height: 600,
    backgroundColor: '#0A122B',
  },

  topCont: {

    width: 140,
    borderBottom: '1px solid #558FF2',
    height: 100,
    margin: 'auto',
    paddingTop: 10,

  },

  topContImgDiv: {

    width: 80,
    height: 80,
    margin: 'auto',
    overflow: 'hidden',
    border: '2px solid #558FF2',
    borderRadius: '50%',
    position: 'relative',
  },

  topContImg: {

    width: 120,
    height: 120,
    marginTop: -2,
    position: 'absolute',
  },

  imgStyleOvr: {

    width: 120,
    height: 120,
    opacity: 0.5,
    position: 'absolute',
    

  },

  midCont: {

    width: 140,
    borderBottom: '1px solid #558FF2',
    height: 120,
    margin: 'auto',
    paddingTop: 0
  },

  



}

export default React.createClass({


  render() {

    return (

    
      
        <div
          style={leftBarStyle.mainWrap}
        >

          <div
            style={leftBarStyle.topCont}
            id='secTop'
          >

            <div
              style={leftBarStyle.topContImgDiv}
            >

              <img
                alt='altUser'
                src='https://unsplash.it/150/150?image=981'
                style={leftBarStyle.topContImg}
                />


            </div>

          </div> 


          <div
            style={leftBarStyle.midCont}
            id='secTop'
          >

            <ul>

              <li>

                <Link
                  to={'/'}
                >
                  <p
                    className='leftBarText'
                  >
                  photos</p>
                </Link>

              </li>

          
              <li>
              
                <Link
                  to={'/albumview/'}
                >
                <p
                    className='leftBarText'
                  >
                  albums</p>
                </Link>

              </li>


              

              <li>
              
                <Link
                  to={'/heartview/'}
                >
                <p
                    className='leftBarText'
                  >
                  hearted</p>
                </Link>

              </li>

            </ul>

          </div> 

        </div>

    )

  }

})