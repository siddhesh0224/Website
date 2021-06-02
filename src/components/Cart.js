import React  from "react";
import "./Cart.css";

import {Link} from 'react-router-dom';
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";


// function Cart() {

  const Cart = () => {
    const closeNav = () =>{
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
    }
    const openNav = () =>{
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    }
    const add = () =>{
      document.getElementsByClassName("cart_quantity_input").value = "+1";
    }

    
    return (
        <>
       




       <div className="container-fluid">
        <div className="nav-main">
          <Navbar
            sticky="top"
            collapseOnSelect
            expand="lg"
            className="bg-navbar"
            variant="dark"
          >
          {/* <Sb/> */}
          <div id="mySidebar" class="sidebar">
        <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>×</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
      
      <div id="main">
        <button class="openbtn" onClick={openNav}>☰</button>
      </div>
            
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

                <NavDropdown
                  title="Sign In"
                  id="collasible-nav-dropdown"
                  className="nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">
                    New Customer ?
                    <ul className="nav-divider">
                      <li className="divider"></li>
                    </ul>
                    <button><Link to ="/Registernew">Sign In </Link></button>
                  </NavDropdown.Item>
                </NavDropdown>

                {/* <*****************************************Cart************************************> */}

                <Nav.Link className="nav-cart" href="#">
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






            <div className="large-container">
                 {/* ---------------- cart --------- */}
                 <div className="cart-container cart-page">
                 <table>
                     <tr>
                         <th>Product</th>
                         <th>Quantity</th>
                         <th>Subtotal</th>
                     </tr>

                     <tr>
                         <td>
                             <div className="cart-info">
                                 <img src="Images/dress1.jpg" alt="" />
                                 <div>
                                     <p> Printed dress</p>
                                     <small> price : ₹50.00</small>
                                     <br></br>
                                     <a herf="#" className="cart-a">remove</a>
                                 </div>
                             </div>
                         </td>
                         <td class="cart_quantity">
                                    <div class="cart_quantity_button">
                                        <a class="cart_quantity_up"  onClick={add}  >+ </a>
                                        <input class="cart_quantity_input" type="text" name="quantity" value="1" step="1" autocomplete="off" size="2"/>
                                        <a class="cart_quantity_down" href=""> - </a>
                                    </div>
                                </td>
                         {/* <td><input type="number" value="1" className="cart-input" /></td> */}
                         <td>₹ 50.00</td>
                     </tr>


                     <tr>
                         <td>
                             <div className="cart-info">
                                 <img src="Images/dress3.jpg" alt="" />
                                 <div>
                                     <p> Printed dress</p>
                                     <small> price : ₹90.00</small>
                                     <br></br>
                                     <a herf="#" className="cart-a">remove</a>
                                 </div>
                             </div>
                         </td>
                         <td class="cart_quantity">
                                    <div class="cart_quantity_button">
                                        <a class="cart_quantity_up" href=""> + </a>
                                        <input class="cart_quantity_input" type="text" name="quantity" value="2" autocomplete="off" size="2"/>
                                        <a class="cart_quantity_down" href=""> - </a>
                                    </div>
                                </td>
                         {/* <td><input type="number" value="1" className="cart-input" /></td> */}
                         <td>$ 50.00</td>
                     </tr>


                     <tr>
                         <td>
                             <div className="cart-info">
                                 <img src="Images/dress2.jpg" alt="" />
                                 <div>
                                     <p> Printed dress</p>
                                     <small> price : ₹30.00</small>
                                     <br></br>
                                     <a herf="#" className="cart-a">remove</a>
                                 </div>
                             </div>
                         </td>
                         <td class="cart_quantity">
                                    <div class="cart_quantity_button">
                                        <a class="cart_quantity_up" href=""> + </a>
                                        <input class="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2"/>
                                        <a class="cart_quantity_down" href=""> - </a>
                                    </div>
                                </td>
                         {/* <td><input type="number" value="1" className="cart-input" /></td> */}
                         <td>₹ 50.00</td>
                         

                         {/* <td class="cart_delete">
								<a class="cart_quantity_delete" href=""><i class="fa fa-times"></i></a>
							</td> */}
					
          
                     </tr>



                 </table>


<div className="cart-product-price">
   <table>
       <tr>
           <td>Subtotal</td>
           <td>₹300.00</td>
       </tr>
       <tr>
           <td>Tax</td>
           <td>₹30.00</td>
       </tr>
       <tr>
           <td>Shipping</td>
           <td>₹00.00</td>
       </tr>
       <tr>
           <td>Total</td>
           <td>₹300.00</td>
       </tr>
   </table> 
</div>



                 </div>
            </div>
        </>
    )
}

export default Cart
