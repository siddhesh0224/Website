import React from 'react';
import './Mobile.css';
import { Card, CardGroup, CardDeck, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import { useEffect, useState }  from "react";
import axios from "axios";

//  class Mobile extends React.Component{
//   constructor(props){
//     super(props);
// }
 


  // function Mobile = () =>{
  
  //   const [data, setData] = useState([]);  
  //   useEffect(() => {
  //     axios.get("http://13.58.37.17:5000/viewBanner")
  //     .then((res) => {
  //       console.log(res)
  //       setData({data:res.data.result});
  //       console.log(res.data.result)
  //     });
  //   },
  //    []);
  // }

  function Mobile () {
    const [data, setData] = useState([]);  
    useEffect(() => {
      axios.get("http://18.116.242.50:5000/viewProd")
      .then((res) => {
        console.log(res)
        setData({data:res.data.result});
        console.log(res.data.result)
      });
    }, []);
 

    
  

    
        return(
            <>
             <p className="heading-TopBrand">
             Mobile & Tablet{" "}
          <Button variant="btn btn-success btn-lg float-right">VIEW ALL</Button>{" "}
        </p>{" "}
            

<div className="row mob_r">
  <div className="column mob_c">
  
  <Link to="/Productdetail">
    <img src="http://18.116.242.50:5000/1621841714375-technical-skills.jpg" alt="Snow" style={{width:"100%"}}/>
    </Link>
  </div>
  <div className="column1 mob_c1">
  <Link to="/Productdetail1">
    <img src="http://18.116.242.50:5000/1621841712006-experience2.jpg" alt="Forest" style={{width:"100%"}}/>
    </Link>
  </div>

  <div className="column1  mob_c1">
  <Link to="/Productdetail2">
    <img src="http://18.116.242.50:5000/1621844661079-experience1.jpg" alt="Forest" style={{width:"100%"}}/>
  </Link>
  </div>
  <div className="column1  mob_c1">
  <Link to="Productdetail3">
    <img src="http://18.116.242.50:5000/1622268295048-dell-wired-optical-mouse.jpeg" alt="Forest" style={{width:"100%"}}/>
  </Link>
  </div>
</div>
</>
        )
    }
  
export default Mobile