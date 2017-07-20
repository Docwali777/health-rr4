import React, { Component } from 'react'
import { Grid, Row, Col,Thumbnail, Button, Media} from 'react-bootstrap'

import hillary from '../../../images/hillary.jpeg'
import gauvin from '../../../images/wali gauvin.jpeg'


const About =() =>(
    <div className='container'>
      <h1>About</h1>
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


Hillary Hernandez represents the future of the American Landscape <br/>

      <h3>Mission IMpossible</h3>
<h4>Empower the Latino Community  </h4>
    <p>Power can originate from many places.</p>
    <p>True power comes from knowledge of self</p>
      Hispanics make up the greatest portion of the minority group in the United States. According to a Pew Hispanic Center survey, Hispanics are less likely to have a usual health care provider which means they do not get checked up regularly. In those who do not have a regular health care provider, men, the young and the less educated create most of that population.

----

The stereotype of men is that they are "too tough" to ever ask for help. "Too tough" to receive medical attention. Most Hispanic men do not get regular check ups because they claim they are not sick and feeling just fine. Considering the massive migration movement into the United States from various countries, some Hispanics are accustomed to only seek medical help when they are sick due to their economic circumstances back home. They come to a new country, but keep their custom traditions alive. What can be done to encourage Hispanic men to go to the doctor more often? When was the last time you went to the doctor?

    </div>
)

export default About
