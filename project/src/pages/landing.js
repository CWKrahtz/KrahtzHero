import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
import { Card, CardGroup } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Marvel from '../Marvel.png'
import VS from '../VS.png'
import DC from '../DC.png'


function Landing() {

    return (
        <div className="dash col-sm-10">
            <Carousel fade style={{ marginTop: '5%' }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Marvel}
                        alt="First slide"
                        style={{ marginLeft: 'auto', marginRight: 'auto', borderRadius: '10px' }}
                    />
                    <Carousel.Caption>
                        <h3>About The API</h3>
                        <p>The API is a data source containing information about heroes and villains from both universes - Marvel and DC.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={VS}
                        alt="Second slide"
                        style={{ marginLeft: 'auto', marginRight: 'auto', borderRadius: '25px' }}
                    />

                    <Carousel.Caption>
                        <h3>Reason for API</h3>
                        <p>The data that is given can be used to see more information about the heroes and villains or it can be used to compare two characters to see who has a more favorable outcome according to the stats that are provided.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={DC}
                        alt="Third slide"
                        style={{ marginLeft: 'auto', marginRight: 'auto', borderRadius: '25px' }}
                    />

                    <Carousel.Caption>
                        <h3>Outline of API</h3>
                        <p>
                            The data used can give you more information about a specific character.You will be able to see their <b>power stats</b>, <b>biography</b>, <b>appearance</b>, <b>work</b>, <b>connections</b> and an image.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <CardGroup style={{ marginBottom: '5%' }}>
                <Card style={{ marginTop: '5%', backgroundColor: '#182635', color: '#B2BAC2', borderRadius: '25px' }}>
                    <Card.Img variant="top" src={Marvel} style={{ height: '100px', borderRadius: '25px 25px 0 0' }} />
                    <Card.Body>
                        <Card.Title>About Creator</Card.Title>
                        <Card.Text style={{textAlign: "left"}}>
                            <b>Name: </b>Christian Krahtz<br />
                            <b>Email: </b>221198@virtualwindow.co.za<br />
                            <b>Student Number: </b>221198
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ marginLeft: '5%', marginTop: '5%', backgroundColor: '#182635', color: '#B2BAC2', borderRadius: '25px' }}>
                    <Card.Img variant="top" src={DC} style={{ height: '100px', borderRadius: '25px 25px 0 0' }} />
                    <Card.Body>
                        <Card.Title>Information Breakdown</Card.Title>
                        <Card.Text>
                            <p style={{ textAlign: "left" }}>
                                <b>Power Stats: </b>
                                Intelligence, Strength, Speed, Durability, Power and Combat<br />
                                <b>Biography: </b>
                                Full Name, Alter Egos, Aliases, Place of Birth, First Appearance, Publisher, Alignment<br />
                                <b>Appearence: </b>
                                Gender, Race, Height, Weight, Eye Color, Hair Color<br />
                                <b>Work: </b>
                                Occupation, Base of operation<br />
                                <b>Connections: </b>
                                Group Affiliation, Relatives
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ marginLeft: '5%', marginTop: '5%', backgroundColor: '#182635', color: '#B2BAC2', borderRadius: '25px' }}>  {/*width: '25%',, float: 'left'*/}
                    <Card.Img variant="top" src={VS} style={{ height: '100px', borderRadius: '25px 25px 0 0' }} />
                    <Card.Body>
                        <Card.Title>More on the API</Card.Title>
                        <Card.Text>
                            There are about 700 plus characters you can look at nd compare with others. you can compare Yoda and The Hulk with eachother and see who has the more impressive character data.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}

export default Landing;