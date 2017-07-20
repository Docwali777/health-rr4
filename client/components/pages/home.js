import React, { Component } from 'react'

import { Grid, Row, Col,Thumbnail, Button, Media} from 'react-bootstrap'

import mainPic from '../../../images/heart-1616465__340.jpg'
import hillary from '../../../images/hillary.jpeg'
import gauvin from '../../../images/wali gauvin.jpeg'

class Home extends Component{
  render(){
    return(
      <div className='container'>
        <div className='text-center'>
          <h1 >Welcome to SaluD/Os </h1>
          <h3>Empowering Individuals Through Knowledge</h3>
        </div>
        <hr />
        <div className=''>
          <img className='divMainPic' src={mainPic} />
        </div>
        <hr />
        <Media>
     <Media.Left align="top">
       <img width={200} height={200} src={hillary} alt="Image"/>
     </Media.Left>
     <Media.Body>
       <Media.Heading>Top aligned media</Media.Heading>
       <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

       <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
     </Media.Body>
   </Media>
   <hr />
   <Media>
<Media.Left align="top">
  <img width={200} height={200} src={gauvin} alt="Image"/>
</Media.Left>
<Media.Body>
  <Media.Heading>Top aligned media</Media.Heading>
  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

  <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
</Media.Body>
</Media>

      </div>
    )
  }
}

export default Home
