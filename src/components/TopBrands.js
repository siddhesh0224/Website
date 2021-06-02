import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardGroup, CardDeck, Button } from "react-bootstrap";
import "./TopBrands.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function TopBrands() {
  return (
    <Router>
      <div className="container-fluid">
        <p className="heading-TopBrand">
          Top Brands{" "}
          <Button variant="btn btn-success btn-lg float-right">VIEW ALL</Button>{" "}
        </p>{" "}
        <CardDeck>
          {/* <*****************************************First Card************************************> */}

          <Card>
            <Link to ="/Productdetail">
              <Card.Img variant="top" src="images/topBrand1.jpg" />
              <Card.Body>
                <Card.Title>Formal & Casual Shoes</Card.Title>
                <Card.Text>Up to 50% Off</Card.Text>
              </Card.Body>
            </Link>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>

          {/* <*****************************************Second Card************************************> */}

          <Card>
            <Link to="/">
              <Card.Img variant="top" src="images/topBrand2.jpeg" />
              <Card.Body>
                <Card.Title>Festival & Party Sarees</Card.Title>
                <Card.Text>Up to 40% Off</Card.Text>
              </Card.Body>
            </Link>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>

          {/* <*****************************************Third Card************************************> */}

          <Card>
            <Link to="/">
              <Card.Img variant="top" src="images/topBrand3.jpeg" />
              <Card.Body>
                <Card.Title>Watches & Bands</Card.Title>
                <Card.Text>Up to 50-60% Off</Card.Text>
              </Card.Body>
            </Link>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>
        </CardDeck>
      </div>
      <br></br>
      <div className="container-fluid">
        <p className="heading-TopBrand">
          Fashion{" "}
          <Button variant="btn btn-success btn-lg float-right">VIEW ALL</Button>{" "}
        </p>{" "}
        <CardDeck>
          {/* <*****************************************First Card************************************> */}

          <Card>
            <Link to="/">
              <Card.Img variant="top" src="images/topBrand1.jpg" />
              <Card.Body>
                <Card.Title>Formal & Casual Shoes</Card.Title>
                <Card.Text>Up to 50% Off</Card.Text>
              </Card.Body>
            </Link>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>

          {/* <*****************************************Second Card************************************> */}

          <Card>
            <Link to="/">
              <Card.Img variant="top" src="images/topBrand2.jpeg" />
              <Card.Body>
                <Card.Title>Festival & Party Sarees</Card.Title>
                <Card.Text>Up to 40% Off</Card.Text>
              </Card.Body>
            </Link>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>

          {/* <*****************************************Third Card************************************> */}

          <Card>
            <Link to="/">
              <Card.Img variant="top" src="images/topBrand3.jpeg" />
              <Card.Body>
                <Card.Title>Watches & Bands</Card.Title>
                <Card.Text>Up to 50-60% Off</Card.Text>
              </Card.Body>
            </Link>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>
        </CardDeck>
      </div>
    </Router>
  );
}

export default TopBrands;
