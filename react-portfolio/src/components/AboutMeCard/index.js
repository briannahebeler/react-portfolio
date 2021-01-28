import React  from 'react';
import { Col, Row, Container, Card, CardBody, CardTitle } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Img from "../../components/Img";

function AboutMeCard() {
    return (
        <Container className="pt-5 pb-5">
            <Row>
                <Col className="col-9">
                    <Card>
                        <CardBody>
                            <CardTitle className="font-weight-bold">About Me</CardTitle>
                            <hr />
                            <Row>
                                <Col className="col-12">
                                    <Img />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutMeCard;
