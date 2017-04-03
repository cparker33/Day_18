import React from 'react';

import store from '../store'

const imgStyle = {

  mainWrap: {

    width: 1100,
    height: '100%',
    backgroundColor: '#0A122B',
  },

  imagContStyle: {

    width: 440,
    height: 468,
    marginLeft: 20,

  },

  imagStyle: {

    width: 440,
    height: 468,

    
  },

  titleCont: {

    



  },

  dataTopContStyle: {

    position: 'absolute',
    top: 5,
    width: 500,
    height: 60,
    margin: 'auto',
    backgroundColor: '#444',
    
  }

}

export default React.createClass({

  componentWillMount() {

    this.setState({

      albums: (store.getState().albums)

    })

  },

  getContent(dat) {

    var st = this.state.albums
    // console.log(st.length)

    var cKey = dat.split('.')

    var newObj = {}

    var albName = ''
    var albIndex = 0

    for (var i = 0; i < st.length; i++) {

      
      albIndex = (st[i].index)

      albName = (st[i].album_name)
      
      for (var c = 0; c < st[i].images.length; c++) {

        if ( i === Number(cKey[0]) && c === Number(cKey[1]) ) {

         newObj = {

          city: st[i].images[c].city,
          date: st[i].images[c].date,
          guid: st[i].images[c].guid,
          heart: st[i].images[c].heart,
          imgdex: st[i].images[c].imgdex,
          state: st[i].images[c].state,
          tags: st[i].images[c].tags,
          mid: (st[i].images[c].mid) + Number(albIndex + st[i].images[c].imgdex),
          album_name: albName,
          
          img_direct: i + '.' + c

          }

        }
      
      } // for ( c )
      
    } // for ( i )

    return newObj

  },

  handBack() {

    this.props.history.goBack()

  },

  addHeart(c) {

    if (c === true) {

      return <span className='hrtRed'><i className="fa fa-heart" aria-hidden="true"></i></span>

    } else {

      return <span className='hrtGry'><i className="fa fa-heart-o" aria-hidden="true"></i></span>

    }

  },

  getDate(c) {

    var p = c.split(' ')

    return (p[1] + ' ' + p[2] + ', ' + p[3])


  },


  render() {

    var img = this.getContent(this.props.match.params.indx)


    return (
      
        <div
          style={imgStyle.mainWrap}
        >


          <div
            style={imgStyle.imagContStyle}
            className='imgFull'
          >

            <img
              alt={''}
              src={img.mid}
            />

            

          </div>

          <div
          style={imgStyle.titleCont}
          className='TitleCompFull'
        >
        <span
              className='ExitBtn'
              onClick={this.handBack}
            >X
            </span>

            <div className='singleInfo'>

          <div><h1>{img.album_name}</h1></div>
          <div 
            
          ><p>{this.addHeart(img.heart)}</p></div>
          <div><p>{img.city + ', ' + img.state}</p></div>
          <div><p>{this.getDate(img.date)}</p></div>
            
            </div>

        </div>

        </div>

    )

  }

})