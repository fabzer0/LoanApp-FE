import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardGroup,
  Container,
  Grid,
  GridColumn,
  Responsive,
  Segment
} from "semantic-ui-react";

import Footer from "../common/Footer";
import "./LandingPage.css";
import leaf from "./img/leaves-1.png";
import leaf2 from "./img/leaves-2.png";
import leaf3 from "./img/leaves-3.png";
import sectionLeaves from "./img/section-leaves.png";
import sectionWoman from "./img/woman-wearing-beaded-white-necklace-1181623.jpg";

class LandingPage extends Component {

  render() {
    return (
      <div className="App">
        <div className="Hero__overlay" />
        <div className="Hero">
          <div className="Hero__content--wrapper">
            <div className="Hero__content">
              <h3>The smooth and easy way to get funds</h3>
              <h1>Accelerating your success</h1>
              <button className="button button-teal">
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/register"
                >
                  Quickly Test my Business Eligibility
                </Link>
              </button>
            </div>
          </div>
        </div>
        <Container>
          <div id="how-it-works" className="card-container">
            <div>
              <h2
                style={{
                  marginTop: "1em",
                  color: "#01C8C8"
                }}
              >
                How it works?
              </h2>
            </div>
            <Segment
              primary="true"
              style={{
                padding: "4em",
                backgroundColor: "#fafafa",
                border: "none",
                width: "90vw",
                boxShadow: "none"
              }}
            >
              <CardGroup centered stackable doubling>
                <Card
                  style={{ padding: "1em", boxShadow: "none", width: "30%" }}
                >
                  <Card.Content textAlign="center">
                    <Card.Header>
                      <div className="card-header">
                        <span className="card-number">1</span>
                        <img src={leaf} className="card-image" alt="leaf one" />
                      </div>
                    </Card.Header>
                    <Card.Meta>
                      <h3 style={{ color: "#0165C8" }}>Share your info</h3>
                    </Card.Meta>
                    <Card.Description>
                      <p>
                        Fill out a short application form sharing information
                        about you and your business by connecting your accounts
                        online
                      </p>
                    </Card.Description>
                  </Card.Content>
                </Card>
                <Card
                  style={{ padding: "1em", boxShadow: "none", width: "30%" }}
                >
                  <Card.Content textAlign="center">
                    <Card.Header>
                      <div className="card-header">
                        <span className="card-number">2</span>
                        <img
                          src={leaf2}
                          className="card-image"
                          alt="leaf one"
                        />
                      </div>
                    </Card.Header>
                    <Card.Meta>
                      <h3 style={{ color: "#0165C8" }}>Get Approved</h3>
                    </Card.Meta>
                    <Card.Description>
                      <p>
                        We review the information shared and notify you if you
                        are approved or not.
                        {<br />}
                        {<br />}
                        If you are approved, we provide you with the funding
                        terms you are eligible to
                      </p>
                    </Card.Description>
                  </Card.Content>
                </Card>
                <Card
                  style={{ padding: "1em", boxShadow: "none", width: "30%" }}
                >
                  <Card.Content textAlign="center">
                    <Card.Header>
                      <div className="card-header">
                        <span className="card-number">3</span>
                        <img
                          src={leaf3}
                          className="card-image"
                          alt="leaf one"
                        />
                      </div>
                    </Card.Header>
                    <Card.Meta>
                      <h3 style={{ color: "#0165C8" }}>Closing</h3>
                    </Card.Meta>
                    <Card.Description>
                      <p>
                        Accept the term proposed and submit requested
                        documentation
                      </p>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </CardGroup>
            </Segment>
            <button className="button button-teal">
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/register"
              >
                Get Approved
              </Link>
            </button>
          </div>
        </Container>
        <Responsive minWidth={768}>
          <div
            id="why-Finlo"
            style={{
              minHeight: "100vh",
              backgroundColor: "#efefef",
              margin: "0 auto"
            }}
          >
            <Container>
              <div className="card-container">
                <div>
                  <h2
                    style={{
                      margin: "1em",
                      color: "#01C8C8"
                    }}
                  >
                    Why Finlo?
                  </h2>
                </div>
                <Grid stretched stackable className="unique-bg">
                  <Grid.Row>
                    <GridColumn width={1} />
                    <GridColumn stretched width={7}>
                      <img src={sectionLeaves} alt="section-leaves" />
                      <img
                        src={sectionWoman}
                        alt="woman"
                        className="section-woman"
                      />
                      {/*<img src={womenWalking} alt="woman-walking" className="section-woman"/>*/}
                    </GridColumn>
                    <GridColumn stretched width={7}>
                      <CardGroup centered stackable doubling itemsPerRow={1}>
                        <Card
                          raised
                          style={{
                            borderRadius: "1em",
                            padding: "1em"
                          }}
                        >
                          <Card.Content textAlign="left">
                            <Card.Header>
                              <span style={{ color: "#0165C8" }}>
                                Smooth and Adequate Access to Funding
                              </span>
                            </Card.Header>
                            <Card.Description textAlign="left">
                              <p>
                                We enable SMEs to access funding in a timely
                                manner
                              </p>
                            </Card.Description>
                          </Card.Content>
                        </Card>
                        <Card
                          raised
                          style={{
                            borderRadius: "1em",
                            padding: "1em"
                          }}
                        >
                          <Card.Content textAlign="left">
                            <Card.Header>
                              <span style={{ color: "#0165C8" }}>
                                Increase efficiency
                              </span>
                            </Card.Header>
                            <Card.Description textAlign="left">
                              <p>
                                We support SMEs by providing digital tools which
                                can increase efficiency in their daily
                                operations
                              </p>
                            </Card.Description>
                          </Card.Content>
                        </Card>
                        <Card
                          raised
                          style={{
                            borderRadius: "1em",
                            padding: "1em"
                          }}
                        >
                          <Card.Content textAlign="left">
                            <Card.Header>
                              <span style={{ color: "#0165C8" }}>
                                Connect to other potential business partners
                              </span>
                            </Card.Header>
                            <Card.Description textAlign="left">
                              <p>
                                Join a network of businesses who can become your
                                suppliers or your clients
                              </p>
                            </Card.Description>
                          </Card.Content>
                        </Card>
                      </CardGroup>
                    </GridColumn>
                  </Grid.Row>
                </Grid>
              </div>
            </Container>
          </div>
        </Responsive>
        <Responsive maxWidth={767}>
          <div
            id="why-Finlo"
            style={{
              minHeight: "100vh",
              backgroundColor: "#efefef",
              margin: "1em 0",
              padding: "5em 0",
              display: "flex",
              alignItems: "center"
            }}
          >
            <Container>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <div>
                  <h2
                    style={{
                      margin: "1em",
                      color: "#01C8C8"
                    }}
                  >
                    Why Finlo?
                  </h2>
                </div>
                <Grid stretched stackable className="unique-bg">
                  <Grid.Row>
                    <GridColumn stretched width={8}></GridColumn>
                    <GridColumn stretched width={6}>
                      <CardGroup centered stackable doubling itemsPerRow={1}>
                        <Card
                          raised
                          style={{
                            borderRadius: "1em",
                            padding: "1em"
                          }}
                        >
                          <Card.Content textAlign="left">
                            <Card.Header>
                              <span style={{ color: "#0165C8" }}>
                                Smooth and Adequate Access to Funding
                              </span>
                            </Card.Header>
                            <Card.Description textAlign="left">
                              <p>
                                We enable SMBs to access funding in a timely
                                manner
                              </p>
                            </Card.Description>
                          </Card.Content>
                        </Card>
                        <Card
                          raised
                          style={{
                            borderRadius: "1em",
                            padding: "1em"
                          }}
                        >
                          <Card.Content textAlign="left">
                            <Card.Header>
                              <span style={{ color: "#0165C8" }}>
                                Increase efficiency
                              </span>
                            </Card.Header>
                            <Card.Description textAlign="left">
                              <p>
                                We support SMBs by providing digital tools which
                                can increase efficiency in their daily
                                operations
                              </p>
                            </Card.Description>
                          </Card.Content>
                        </Card>
                        <Card
                          raised
                          style={{
                            borderRadius: "1em",
                            padding: "1em"
                          }}
                        >
                          <Card.Content textAlign="left">
                            <Card.Header>
                              <span style={{ color: "#0165C8" }}>
                                Connect to other potential business partners
                              </span>
                            </Card.Header>
                            <Card.Description textAlign="left">
                              <p>
                                Join a network of businesses who can become your
                                suppliers or your clients
                              </p>
                            </Card.Description>
                          </Card.Content>
                        </Card>
                      </CardGroup>
                    </GridColumn>
                  </Grid.Row>
                  <GridColumn width={2} />
                </Grid>
              </div>
            </Container>
          </div>
        </Responsive>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        ></div>
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
