import React from 'react';
import { Link } from 'react-router-dom'
import store from '../store'


const photoStyle = {

  mainWrap: {

    width: 1100,
    height: 600,
    borderRight: '1px solid #000',
    backgroundColor: '#0A122B',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'auto'
  },

  photStyle: {

    width: 150,
    height: 130,
    marginTop: 15,
    marginBottom: 11,
    marginRight: 11,
    marginLeft: 11,
    border: '1px solid #EEE',
    position: 'relative',
    color: '#FFF'



  },

  imgStyle: {

    width: '100%',
    height: '100%',
    position: 'absolute',
    

  },

  infStyle: {

    width: '100%',
    top: 5,
    position: 'absolute',
    color: '#FFF',
    background: 'rgba(66, 134, 244, 0.5)'
    

  },

  imgStyleOvr: {

    width: '100%',
    height: '100%',
    opacity: 0.8,
    position: 'absolute',
    

  }

}


// src='http://www.hunternursingnannies.com.au/images/Page-BgGlare.png'

export default React.createClass({


getInitialState() {

    return {

     albums: (store.getState().albums),
     
    }

  },

  componentWillMount() {

    this.setState({

      albums: (store.getState().albums)

    })

  },

  getContent(st) {

    // console.log(st.length)

    var newArr = []

    var albName = ''
    var albIndex = 0

    for (var i = 0; i < st.length; i++) {

      albName = (st[i].album_name)
      albIndex = (st[i].index)
      
      for (var c = 0; c < st[i].images.length; c++) {

        // console.log(st[i].images[c])

        var newObj = {

          city: st[i].images[c].city,
          date: st[i].images[c].date,
          guid: st[i].images[c].guid,
          heart: st[i].images[c].heart,
          state: st[i].images[c].state,
          tags: st[i].images[c].tags,
          thumb: (st[i].images[c].thumb) + Number(albIndex + st[i].images[c].imgdex),
          album_name: albName,
          img_direct: i + '.' + c,
          

        }

        if (st[i].images[c].heart === true) {

          newArr.push(newObj)

        }
      
      } // for ( c )
      
    } // for ( i )

    return newArr

  },

  render() {


    return (

        <div
          style={photoStyle.mainWrap}
        > 


        

        {

          this.getContent(this.state.albums).map((img, i) => {

            return (

              <Link 
                key={img.guid}
                to={'/image/' + img.img_direct}
              >

                <div 
                  style={photoStyle.photStyle}
                >  
                

                <img
                  alt={img.index}
                  src={img.thumb}
                  style={photoStyle.imgStyle}
                />

                <img
                  alt={img._index + 'ovr'}
                  src='https://www.corning.com/content/dam/corning/microsites/csm/gorillaglass/logo-glass-bg.png'
                  style={photoStyle.imgStyleOvr}
                />

                  <div
                    style={photoStyle.infStyle}
                  >
                    {img.city}</div>

                
                </div>

                </Link>

            )

          })

        }

        </div>

    )

  }

})




/*

this.state.albums.forEach((obj, i)=> {

            return (
                 
              <div>   
              <p>{i}</p>
              </div>

            )
            
          })
*/