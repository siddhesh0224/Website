import React from 'react';
import { Card, CardGroup, CardDeck, Button } from "react-bootstrap";
import './Baby.css'

class Baby extends React.Component{
    render(){
        return(
            <>
            <p className="heading-TopBrand">
            Baby & Kids{" "}
          <Button variant="btn btn-success btn-lg float-right">VIEW ALL</Button>{" "}
        </p>{" "}
            
            
            <div class="row baby_r">
            <div class="column baby_c">
            <img src="1img_snow.jpg" alt="Snow" style={{width:"100%"}}/>
            </div>
            <div class="column  baby_c">
            <img src="1img_forest.jpg" alt="Forest" style={{width:"100%"}}/>
            </div>
            <div class="column  baby_c">
            <img src="1img_mountains.jpg" alt="Mountains" style={{width:"100%"}}/>
            </div>
            <div class="column  baby_c">
            <img src="1img_forest.jpg" alt="Forest" style={{width:"100%"}}/>
            </div>
            <div class="column  baby_c">
            <img src="1img_mountains.jpg" alt="Mountains" style={{width:"100%"}}/>
            </div>
            </div>
            </>
        )
    }
}

export default Baby 