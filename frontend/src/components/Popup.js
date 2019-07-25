import React from 'react';
import Popup from 'reactjs-popup';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';

 


// class Popup extends React.Component {  
// render() {  
// return (  
//         <div className='popup'>  
//         <div className='popup\_inner'>  
//         <h1>{this.props.text}</h1>  
//         <button onClick={this.props.closePopup}>close me</button>  
//         </div>  
//         </div>  
//   );  
//   }   
// }  

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Popover right</Popover.Title>
    <Popover.Content>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Content>
  </Popover>
);

const Example = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button variant="success">Click me to see</Button>
  </OverlayTrigger>
);
export default Popup;