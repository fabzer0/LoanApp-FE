import React from "react";
import {
  Header,
  Icon,
  Image,
  Segment,
  Grid,
  Container
} from "semantic-ui-react";
import whiteLogo from "../landingPage/img/Logo.png"

const Footer = () => {
  return (
    <Segment
      id="need-more-help"
      inverted
      vertical
      style={{ padding: "5em 0em" }}
    >
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src={whiteLogo} className="dark-logo" />
            </Grid.Column>
            <Grid.Column width={5}>
              <Header as="h3" inverted>
                Need more Help ? Call Us
              </Header>
              <Header as="h4" inverted>
                +254 714 109 200
              </Header>
              <Header as="h4" inverted>
                Our team is dedicated to serving you
              </Header>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h2" inverted>
                Stay in Touch
              </Header>
              <div
                style={{
                  marginTop: "2em"
                }}
              >
                <Icon link size="big" name="linkedin" />
                <Icon link size="big" name="twitter" />
                <Icon link size="big" name="whatsapp" />
                <Icon link size="big" name="facebook" />
                <a href="mailto:Info@finlo.ai" style={{ color: "#fff" }}>
                  <Icon link size="big" name="mail outline" />
                </a>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Header as="h5" inverted>
              © Finlo 2019
            </Header>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;
