import React, { Component } from "react";
import BenefitOne from "./benefit-one";
import BenefitTwo from "./benefit-two.jsx";
import {Container, Row, Col, Tab} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

class Benefits extends Component {
  changeTab = (key) => {
    this.setState({ selected: key });
    // this.state.selected = key;
    // debugger
  };
  constructor(props) {
    super(props);
    this.state = {
      selected: 'tab1',
    };
  }
    render() {
    // this.props={selected :'tab1'};

    return (
        <div>
          <div className={'top-background'}></div>
          <Container>
            <Row>
              <Col>
                <Row>
                  <Col xs={12} md={12}><b>Benefits Overview</b></Col>
                  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                      <Col sm={12}>
                        <ul className={'benefit-buttons'}>
                          <li className={`benefit-button ${this.state.selected=='tab1'?'active':''}`}>
                            <Nav.Link eventKey="tab1" onSelect={(k) => this.changeTab(k)}>
                              <Row>Deductible</Row>
                              <Row>Some Random Text</Row>
                            </Nav.Link>
                          </li>
                          <li className={`benefit-button ${this.state.selected=='tab2'?'active':''}`}>
                            <Nav.Link eventKey="tab2" onSelect={(k) => this.changeTab(k)}>
                              <Row>Deductible</Row>
                              <Row>Some Random Text</Row>
                            </Nav.Link>
                          </li>
                        </ul>

                        {/*                      <Nav variant="pills">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                      </Nav>*/}
                      </Col>
                      <Col sm={12}>
                        <Tab.Content>
                          {/*class={`${this.state.selected=='tab1'?'active':''}`}*/}
                          <Tab.Pane eventKey="tab1">
                            <BenefitOne></BenefitOne>
                          </Tab.Pane>
                          <Tab.Pane eventKey="tab2">
                            <BenefitTwo></BenefitTwo>
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
    );
  }


}

export default Benefits;
