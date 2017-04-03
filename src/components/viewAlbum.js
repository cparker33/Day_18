import React from 'react';
import { Link } from 'react-router-dom'
import store from '../store'


const albumStyle = {

  mainWrap: {

    width: 1100,
    height: 600,
    borderRight: '1px solid #000',
    backgroundColor: '#0A122B',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'auto'
  },

  titelStyle: {

    width: 210,
    margin: 'auto',
    marginTop: 40,
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 2,
    color: '#FFF',
    boxShadow: '0px 0px 20px #000',
    border: '2px solid #091e3f',
    background: 'rgba(9, 30, 63,  0.9)',
    position: 'relative',

  },
  artStyle: {

    width: 250,
    height: 230,
    marginTop: 15,
    marginBottom: 15,
    marginRight: 10,
    marginLeft: 10,
    position: 'relative',
    color: '#000'
  },

  thumb1Style: {

    width: 120,
    height: 120,
    top: 5,
    left: 0,
    border: '2px solid #558FF2',
    position: 'absolute',
    color: '#FFF',
    boxShadow: '0px 0px 20px #000'
  },

thumb2Style: {

    width: 110,
    height: 110,
    top: 120,
    left: 10,
    border: '2px solid #2172FF',
    position: 'absolute',
    color: '#FFF',
    boxShadow: '0px 0px 20px #000'
  },

  thumb3Style: {

    width: 150,
    height: 150,
    top: 55,
    left: 100,
    border: '2px solid #2172FF',
    position: 'absolute',
    color: '#FFF',
    boxShadow: '0px 0px 20px #000'
  },


 thumb4Style: {

    width: 90,
    height: 90,
    top: 10,
    left: 180,
    border: '2px solid #2172FF',
    position: 'absolute',
    color: '#FFF',
    boxShadow: '0px 0px 20px #000'
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
    background: 'rgba(9, 30, 63, 0.5)'
  },

  imgStyleOvr: {

    width: '100%',
    height: '100%',
    opacity: 0.8,
    position: 'absolute',
    

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

  getContent(st) {

  

    var newArr = []
    var albName = ''
    var albIndex = 0
    var albId = 0

    function randIndex (max) {

      return Math.floor((Math.random() * max) + 0);

    } 

    for (var i = 0; i < st.length; i++) {

      albName = (st[i].album_name)
      albId = (st[i]._id)
      albIndex = (st[i].index)

      var c = randIndex(st[i].images.length)
      var p = randIndex(st[i].images.length)
      var a = randIndex(st[i].images.length)
      var r = randIndex(st[i].images.length)

     

      var newObj = {

          thumb1: (st[i].images[c].thumb) + Number(albIndex + st[i].images[c].imgdex),
          thumb2: (st[i].images[p].thumb) + Number(albIndex + st[i].images[p].imgdex),
          thumb3: (st[i].images[a].thumb) + Number(albIndex + st[i].images[a].imgdex),
          thumb4: (st[i].images[r].thumb) + Number(albIndex + st[i].images[r].imgdex),
          album_name: albName,
          index: albIndex,
          id: albId
        }

        newArr.push(newObj)     
      
    } // for ( i )  

    return newArr

  },


/*

 setTimeout(() => {

      this.setState({

        albums: (store.getState().albums)

      })

    }, 3000)
    
*/


  render() {

    return (

      
      
        <div
          style={albumStyle.mainWrap}
        >

        <div
          style={albumStyle.titleCont}
          className='TitleComp'
        >
        <span
              className='ExitBtn'
              onClick={this.handBack}
            >X
            </span>
          <span><h1>Albums</h1></span>

            
            
        </div>
        
          
          {

            this.getContent(this.state.albums).map((album, i) => {

              return (

                <Link 
                  key={album.id}
                  to={'/albumview/' + album.index}
                >


                <div
                  style={albumStyle.artStyle}
                >



                <div
                  style={albumStyle.thumb1Style}
                >
                  <img
                    alt={album.album_name + i}
                    src={album.thumb1}
                    style={albumStyle.imgStyle}
                  />
                </div>



                <div
                  style={albumStyle.photStyle}
                >
                  <img
                    alt={album.album_name + i}
                    src={album.thumb2}
                    style={albumStyle.thumb2Style}
                  />
                </div>




                <div
                  style={albumStyle.photStyle}
                >
                  <img
                    alt={album.album_name + i}
                    src={album.thumb3}
                    style={albumStyle.thumb3Style}
                  />
                </div>
                

                <div
                  style={albumStyle.photStyle}
                >
                  <img
                    alt={album.album_name + i}
                    src={album.thumb4}
                    style={albumStyle.thumb4Style}
                  />
                </div>

                 <div>{album.album_name}</div>



                 <div
                  style={albumStyle.titelStyle}
                  className='albumText'
                >
                {album.album_name}
  
                </div>

                </div>

                </Link>
                


              )

            })

          }

        


         
        
        </div>
        
    )

  }

})