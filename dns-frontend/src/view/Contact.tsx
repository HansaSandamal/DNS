import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import img from '../assests/images/back1.jpg';
import axios from 'axios';
import Image from 'react-bootstrap';

const Contact:React.FC=()=>{
const [count,setCount]=useState(0);
    return(
        <>
<Row>
    <Col>
        <img src={img} className="img-responsive" width="100%" />
    </Col>
    <Col>
    
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </Col>

</Row>

        </>
    )
};
export default Contact;
