
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./components/Logo";
import { BrowserRouter as Router } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Table,
} from "react-bootstrap";
import DehazeIcon from "@material-ui/icons/Dehaze";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import Slider from "./components/Slider";
import TopBrands from "./components/TopBrands";
import Mobile from './Mobile';
import Best from './Best'
import Electronics from './Electronics'
import Baby from './Baby'
import Footer from './Footer'
import Project1 from './Project1'
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';

import Sb from './Sb';
import { Home } from "@material-ui/icons";

 

import React, { Component , useEffect, useState } from 'react';
import "./Login.css"
import axios from "axios";
// import jwt from 'jwt-decode'
import jwtDecode from 'jwt-decode';
import {Link,withRouter } from 'react-router-dom';
import Registernew from './Registernew'




export default class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state={
    errors: {}, formIsValid : true, submiterr:"",  store:"",  str:"", 
           
    }
  }
   
    
    onChange=(e) =>{
        var err=this.state.errors;
        err[e.target.name]="";
        this.setState({[e.target.name] : e.target.value, err}); 
        // console.log(e.target.value) 
      }
      onblur=(e)=>{
          
        var err=this.state.errors;
        
        
        if(this.state[e.target.name] === undefined || this.state[e.target.name] === ""){
            err[e.target.name]="Please enter the value."
            this.setState({err, formIsValid:false,})
            if(this.state.str.indexOf(e.target.name)<0)
                {
                this.setState({str:this.state.str+e.target.name})    
                }
        }
        else{
            let reg, msg;
            switch(e.target.name)
            {
                 case "emailid":
                    reg=/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
                    msg="*Please enter valid email-ID.";break;
                   case "password":
                    reg=/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
                    msg="*Please enter secure and strong password.";break;
                
            }
            if (!e.target.value.match(reg)) {
                err[e.target.name] = msg;
                if(this.state.str.indexOf(e.target.name)<0)
                {
                this.setState({str:this.state.str+e.target.name})    
                }
                this.setState({err, formIsValid:false,})
            }
            else{
                this.setState({str:this.state.str.replace(e.target.name,"")});
            }
        }
        this.setState({submiterr:""})
      }
     
        


     
      formsubmit=()=>{
      
        const {emailid,password}=this.state
              
          if(emailid!==undefined && password!==undefined   ){
              var obj={
                 email:this.state.emailid,
                password:this.state.password,
                
               
              } 
                axios.post("http://18.116.242.50:5000/login",obj)
                    .then((res)=>{
                       if(res.status="200"){
                         
                            // console.log(res.data.tokan)
                            const {tokan}= res.data;
                            const userdata=jwtDecode(tokan)
                            console.log(userdata.id)
                            localStorage.setItem("user",userdata.id)
                             this.props.history.push("/Logged")
                            
                        }
                        else{
                            console.log(res.status)
                        }
                    })
                    .catch((err)=>{
                        console.log(err)
                    })  
          }
          else {
            this.setState({submiterr:"please fill all the fields valid details"})
            
            return false;
          }
          
      }



      

    render() {
        return (
          <>
           <Logo />

{/* <*****************************************Navbar************************************> */}
<div className="container-fluid">
  <div className="nav-main">
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      className="bg-navbar"
      variant="dark"
    >
    <Sb/>
      
      {/* <*****************************************Input Search************************************> */}

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Form inline className="input-group input-group-md">
          <FormControl
            type="text"
            id="input-search"
            placeholder="Search for Products, Brands and more.."
            className="mr-sm-6"
          />
          <Button variant="outline-success">
            <SearchIcon className="" />
          </Button>
        </Form>

        {/* <*****************************************B2B************************************> */}

        <Nav className="mr-auto">
          <Nav.Link className="nav-b2b" href="#businessTobusiness">
            B2B
          </Nav.Link>

          {/* <*****************************************Sign-In************************************> */}

          

          {/* <*****************************************Cart************************************> */}

          <Nav.Link className="nav-cart" href="#goTocart">
            <ShoppingCartIcon />
          </Nav.Link>

          {/* <*****************************************More Options************************************> */}

          <NavDropdown
            title="More"
            id="collasible-nav-dropdown"
            className="more-dropdown"
          >
            <NavDropdown.Item href="#orderDetails">
              Order
            </NavDropdown.Item>
            <NavDropdown.Item href="#notifications">
              Notifications
            </NavDropdown.Item>
            <NavDropdown.Item href="#information">
              Contact Us
            </NavDropdown.Item>
          </NavDropdown>
          <div id="google_translate_element"></div>                
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  </div>
</div>
<section id="form" style={{border:"none"}}>
		<div class="container">
			<div class="row">
<div class="col-sm-4 col-sm-offset-1">
					<div class="login-form">
          
            <div id="main-registration-container">
                <div id="register">
                <div className="register-box">
             <div className="register-logo">
            <a href="../../index2.html"><b></b> </a>
          </div>
          <h1 className="H">Login to your account</h1>
      <div className="card"style={{border:"none"}}>
      
        <div className="card-body register-card-body">
          <p className="login-box-msg"></p>
     <form   name="userRegistrationForm"  action="javascript:void(0)"  >

                        
                        <div className=" mb-3">
                        <input type="text" className="form-control"  name="emailid" placeholder="Email"  style={{textAlign: "left",backgroundColor:"#E8F0E9",border:"none"}}   value={this.state.emailid} onChange={this.onChange} onBlur={this.onblur} onKeyPress={this.keypress}/>
                        <div className="errorMsg">{this.state.errors.emailid}</div></div>
                        <div className=" mb-3">
                        <input type="password" className="form-control" name="password" placeholder="Password" style={{textAlign: "left",backgroundColor:"#E8F0E9",border:"none"}} value={this.state.password} onChange={this.onChange} onBlur={this.onblur} onKeyPress={this.keypress}/>
                        <div className="errorMsg">{this.state.errors.password}</div></div>

                       <div className="row">
                        <div className="col-4">
                        <div className="errorMsg">{this.state.submiterr}</div>
                        <button type="submit" onClick={this.formsubmit} className="btn btn-primary">Submit</button></div>
                        
           
                        </div>
                        </form>
                        </div>
                       </div>
                       </div>
                </div>
            </div>
            </div>
            </div>
            <pre>           </pre>

            <div class="col-sm-1">
            <br/>
            <br/>
            <br/>
            <br/>
					<h2 class="or">OR</h2>
				</div>
            

        <div class="col-sm-4">
					<div class="signup-form">
            <Registernew/>
            </div>
            </div>
            </div>
            </div>
            </section>

            </>
        )
    }
}
