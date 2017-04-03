import React from 'react';
import store from '../store'
// import {Route} from 'react-router-dom'
import { Link } from 'react-router-dom'

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

  titleCont: {

    width: 1100,
    height: 60,
    marginTop: 15,
    marginBottom: 11,
    marginRight: 11,
    marginLeft: 11,
    borderBottom: '1px solid #6579B5',
    position: 'relative',
    color: '#FFF'



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



export default React.createClass({

  componentWillMount() {

   

    this.setState({

      albums: (store.getState().albums)

    })

  },

  handBack() {

    this.props.history.goBack()

  },

  getContent(ind) {

    var st = this.state.albums
    

    var newArr = []
    var newObj = {}

    var albName = ''
    var albIndex = 0

    

      albName = (st[ind].album_name)
      albIndex = (st[ind].index)

      
      for (var c = 0; c < st[ind].images.length; c++) {

  
         newObj = {

          city: st[ind].images[c].city,
          date: st[ind].images[c].date,
          guid: st[ind].images[c].guid,
          heart: st[ind].images[c].heart,
          imgdex: st[ind].images[c].imgdex,
          state: st[ind].images[c].state,
          tags: st[ind].images[c].tags,
          thumb: (st[ind].images[c].thumb) + Number(albIndex + st[ind].images[c].imgdex),  
          album_name: albName,
          img_direct: ind + '.' + c,
          }


          newArr.push(newObj)

        
      
      } // for ( c )
      
   

   
    return newArr

  },

  render() {

    var images = this.getContent(this.props.match.params.indx)

  
    return (

        <div
          style={photoStyle.mainWrap}
        > 


        <div
          style={photoStyle.titleCont}
          className='TitleComp'
        >

        <span
              className='ExitBtn'
              onClick={this.handBack}
            >X
            </span>
          <div><h1>{images[0].album_name}</h1></div>
          <div>
            <div></div>
            
          </div>


        </div>

        

        {

          images.map((img, i) => {

            return (

              <Link 
                key={img.guid}
                to={'/image/' + img.img_direct}
              >

                <div 
                  style={photoStyle.photStyle}
                  className='photoCont'
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
                    className='photoInfo'
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