/**
*
* GGrid
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class GGrid extends React.PureComponent {
  
constructor(){
  super();
  this.state={
    images: ['Hiking1.jpg','Hiking2.jpg','Hiking3.jpg','Hiking4.jpg','Hiking5.jpg','Hiking6.jpg','Hiking7.jpg','Hiking8.jpg']
  }
}

 render() {
   return (
     <div>
      <div clasName="grid">
      {this.state.images.map((images,index)=>(
        <div className="gridItem" key={index}>
          <img src={require('../../images/' + images)} className="gridImage" />
          </div>
      ))}
      </div>
    </div>
   );
  }
}
