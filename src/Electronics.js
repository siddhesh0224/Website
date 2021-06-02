import React from 'react';
import { Card, CardGroup, CardDeck, Button } from "react-bootstrap";
import './Electronics.css'

class Electronics extends React.Component{
    render(){
        return(
            <>
             
             <p className="heading-TopBrand">
             Electronics{" "}
          <Button variant="btn btn-success btn-lg float-right">VIEW ALL</Button>{" "}
        </p>{" "}
            

<div className="row ele_r">
  <div className="column ele_c">
    <img src="1img_snow.jpg" alt="Snow" style={{width:"100%"}}/>
  </div>
  <div className="column ele_c">
    <img src="1img_forest.jpg" alt="Forest" style={{width:"100%"}}/>
  </div>
  <div className="column ele_c">
    <img src="1img_mountains.jpg" alt="Mountains" style={{width:"100%"}}/>
  </div>
  <div className="column ele_c">
    <img src="1img_forest.jpg" alt="Forest" style={{width:"100%"}}/>
  </div>
  <div className="column ele_c">
    <img src="1img_mountains.jpg" alt="Mountains" style={{width:"100%"}}/>
  </div>
</div>


            </>
        )
    }
}
export default Electronics