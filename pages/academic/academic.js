import React, {useState, } from 'react'
import { Container, Row, Col, Card, Link, Button, Collapse, Accordion } from 'react-bootstrap'
import Layout from '../../components/layout/layout'
import Divider from '../../components/Divider/Divider'
import styled from './academic.module.css'
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from "react-icons/md"


function academic() {

    const id_pigcity = 'the-pig-city';
    const id_rookie = 'rookie-duty';
    const id_plastic = 'plastic-saving-game';


    const topMargin = '80px';

    function SetCard({useId, useClassName, img_src, card_text}){

        return(
        <a href={'/academic#' + useId} className='mx-auto' data-aos="flip-up">
            <Card className={useClassName}>
                <Card.Img variant="top" src={img_src} className='justify-content-center py-2'
                    style={{height:'100px', width:'auto'}}/>
                <Card.Body className='justify-content-center'>
                    <Card.Text className=''>
                        {card_text}
                        </Card.Text>
                </Card.Body>
            </Card>
        </a>
        )
    }

    function CollapsableCard({context}){
        return(
            <div>
                <Card className={styled.CollapsableCard}>
                    <div className="m-3">
                        {context}
                    </div>
                </Card>
            </div>
        )
    }

    return (
    <Layout>

        <Container className={styled.title}>
                <div style={{}}>
                    <h2 className={styled.titleText + " fw-board"}>
                        Academic Works</h2>

                    <p className={styled.titleText + ""}>
                        Click for details</p>
                </div>
                <div style={{height: '10vh'}}></div>
                <div className="d-flex align-item-center justify-content-center flex-wrap">
                    <SetCard
                        useId={id_pigcity}
                        useClassName={styled.titleCard}
                        img_src={'/images/icons/pig_logo.png'}
                        card_text={'The Pig City'}
                        />
                    <SetCard
                        useId={id_rookie}
                        useClassName={styled.titleCard2}
                        img_src={'/images/icons/rookie_logo.png'}
                        card_text={'Rookie Duty'}
                        />
                    <SetCard
                        useId={id_plastic}
                        useClassName={styled.titleCard}
                        img_src={'/images/icons/plastic_logo.png'}
                        card_text={'Plastic Saving Game'}
                        />
                </div>
        </Container>

        <Divider />

        <PigCity useId={id_pigcity} topMargin={topMargin}/>

        <Divider />
        <RookieDuty useId={id_rookie} topMargin={topMargin}/>
        <Divider />
        <Uwe useId={id_plastic} topMargin={topMargin}/>


    </Layout>
  )
}

function StyleHeader3({h3, useId}){
    return(
        <div className='d-flex justify-content-center'>
            <img src={useId} className={styled.h3icon}
                height={64}
                data-aos="flip-up"
                data-aos-offset='300'/>
            <h3 className='my-auto' data-aos="flip-up">{h3}</h3>
            <img src={useId} className={styled.h3icon}
                height={64}
                data-aos="flip-up"
                data-aos-offset='300'/>
        </div>
    )
}


function PigCity({useId, topMargin}){

    const [open, setOpen] = useState(false);
    const [expanded, setExpanded] = useState(false);
    return(
        <div id={useId} style={{scrollMarginTop: topMargin}}>
            <div className={"container-alt"} data-aos="fade-in">

            <StyleHeader3 h3={"The Pig City"} useId={'/images/icons/pig_logo.png'}/>
            <Container>
            {/* <Row>
                <div className="d-flex">
                <h4 className='my-auto me-1'>Description</h4>
                <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className='ms-3'
                style={{width:'100px'}}
                >
                {open? 'Collapse':'Expand'}
                </Button>
                </div>
                <Collapse in={open}>
                <div>
                <Card className={styled.DescriptionCard} >
                <div className="m-3">
                <p>
                It is a graduation project from 2019, which utilized technologies such as AR, VR and Networking.
                </p>
                <p>
                The project is a series of applications for the children to design their own character (a pig).
                By the reference <a href='http://www.szwwco.com'>Window of the World (世界之窗)</a>, the children will explore and interact with different famous building a virtual environment.
                </p>
                <p>
                The project had won multiple awards, including
                Outstanding Project Award in IVE IT Discipline Graduation Project Exhibition and
                Finalist in CHI PLAY 2019.
                </p>
                </div>
                </Card>
                </div>
                </Collapse>
            </Row> */}
            <Row data-aos="fade-right">
                <div className="d-flex">
                    <h4 className='my-auto me-1'>Description</h4>
                </div>
                <Card className={styled.DescriptionCard} >
                    <div className="m-3">
                        <p>
                        It is a graduation project from 2019, which utilized technologies such as AR, VR and Networking.
                        </p>
                        <Collapse in={expanded}>
                            <div>
                                <p>
                                    The project is a series of applications for the children to design their own character (a pig).
                                    By the reference <a href='http://www.szwwco.com'>Window of the World (世界之窗)</a>, the children will explore and interact with different famous building a virtual environment.
                                </p>
                                <p>
                                    The project had won multiple awards, including
                                    Outstanding Project Award in IVE IT Discipline Graduation Project Exhibition and
                                    Finalist in CHI PLAY 2019.
                                </p>
                            </div>

                        </Collapse>
                        <button className='accordion-button' onClick={()=> setExpanded((expanded)=> !expanded)}
                        >{expanded?
                            (<div><span>Read less</span> <MdOutlineKeyboardArrowUp/></div>):
                            (<div><span>Read more</span> <MdOutlineKeyboardArrowDown/></div>)
                        }</button>
                    </div>
                </Card>

            </Row>

            <Row className='pt-3'>
                <Col className='' data-aos="fade-left">
                    <h4>Game Trailer</h4>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/t3nQ8NntQ5w" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Col>
                <Col className='' data-aos="fade-left">
                    <h4>Game Play</h4>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/0IlwUzWHlWc" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Col>
            </Row>
            <Row className='pt-3' data-aos="fade-right">
                <h4>Related websites</h4>
                <ul>
                    <li style={{listStyle: 'none'}}><a href='https://dl.acm.org/doi/10.1145/3341215.3358240'>CHI PLAY 2019</a></li>
                    <li style={{listStyle: 'none'}}><a href='https://vco-create.vtc.edu.hk/en/project/detail/66'>VTC</a></li>
                    <li style={{listStyle: 'none'}}><a href='https://www.facebook.com/thepigcity'>Facebook page</a></li>
                </ul>
            </Row>
            </Container>

            </div>
        </div>
    )
}

function RookieDuty({useId, topMargin}){
    const [expanded, setExpanded] = useState(false);
    return(
        <div id={useId} style={{scrollMarginTop: topMargin}}>
            <div className={"container-child1"} data-aos="fade-in">
            <StyleHeader3 h3={"Rookie Duty"} useId={'/images/icons/rookie_logo.png'}/>
            <Container>
            <Row data-aos="fade-right">
                <div className="d-flex">
                    <h4 className='my-auto me-1'>Description</h4>
                </div>
                <Card className={styled.DescriptionCard} >
                    <div className="m-3">
                        <p>
                        Graduation project from 2020.
                        </p>
                        <Collapse in={expanded}>
                            <div>
                                <p>
                                The theme inspiration comes from the pandemic COVID-19.
                                A parody game of making the room clean but also making troubles to others.
                                </p>
                            </div>

                        </Collapse>
                        <button className='accordion-button' onClick={()=> setExpanded((expanded)=> !expanded)}
                        >{expanded?
                        (<div><span>Read less</span> <MdOutlineKeyboardArrowUp/></div>):
                        (<div><span>Read more</span> <MdOutlineKeyboardArrowDown/></div>)
                        }</button>
                    </div>
                </Card>

            </Row>
            <Col md={{ span: 6, offset: 6 }} data-aos="fade-left">

                <h4>Game Demo</h4>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/coJRE6aLUv8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </Col>
            </Container>
            </div>
        </div>
    )
}
function Uwe({useId, topMargin}){
    const [expanded, setExpanded] = useState(false);
    return(
        <div id={useId} style={{scrollMarginTop: topMargin}}>
            <div className={"container-alt"} data-aos="fade-in">
            <StyleHeader3 h3={"Plastic Saving Game"} useId={'/images/icons/plastic_logo.png'}/>
            <Container>
            <Row data-aos="fade-right">
                <div className="d-flex">
                    <h4 className='my-auto me-1'>Description</h4>
                </div>
                <Card className={styled.DescriptionCard} >
                    <div className="m-3">
                        <p>
                        It is a game in 2019 UWE study tour and one of the section is about plastic usage in the UK.
                        </p>
                        <Collapse in={expanded}>
                            <div>
                                <p>
                                    It could be done by making a simple presentation. However our group designed a game to make it interesting.
                                </p>
                            </div>

                        </Collapse>
                        <button className='accordion-button' onClick={()=> setExpanded((expanded)=> !expanded)}
                        >{expanded?
                        (<div><span>Read less</span> <MdOutlineKeyboardArrowUp/></div>):
                        (<div><span>Read more</span> <MdOutlineKeyboardArrowDown/></div>)
                        }</button>
                    </div>
                </Card>

            </Row>
            <Col md={{ span: 6, offset: 6 }} data-aos="fade-left">
                <h4>Game Demo</h4>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/fMSoG_EenlI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </Col>
            </Container>
            </div>
        </div>
    )
}

export default academic;