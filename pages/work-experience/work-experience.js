import React, {useState} from 'react'
import Layout from '../../components/layout/layout';
import { Container, Col, ListGroup, Collapse, Image, Button, Accordion} from 'react-bootstrap';
import styled from './work-experience.module.css'
import Divider from '../../components/Divider/Divider';
import ImageSlider from '@/components/ImageSlider/';
import jsonFile from './work-experience.json'
import ImageViewer from '../../components/ImageViewer/ImageViewer';

import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from "react-icons/md"


//https://stackoverflow.com/questions/49711212/inline-css-in-react-how-to-style-multiple-li-elements

function ToJsonObject(idPrefix) {

    const ext = jsonFile.images.find(item => item.idPrefix === idPrefix);
    return ext;
}



function jobExperience() {
    const delay = 100;

    const [imageItem, setImageItem] = useState(null);
    const [showCytusList, setShowCytusList] = useState(false);

    const handleItemClick = (item) => {
      console.log(item.src);
      setImageItem(item);
    };


    const handleClose = () => {
      setImageItem(null);
    };

    const jAppMocha = ToJsonObject("appMocha");
    const jPolyU = ToJsonObject("polyU");

    return (
        <>
            <Layout>


                <div className='d-flex justify-content-center align-items-center'>
                    <h2 className="m-auto" data-aos="fade-in" data-aos-duration={1000}>Working Experiences</h2>
                </div>

                <Divider/>

                <div className="container-alt" data-aos="fade-in" data-aos-delay={delay}>

                    <Container>
                        <h3 data-aos="fade-left" data-aos-delay={delay*2}>The Hong Kong Polytechnic University - Research Assistant</h3>
                        <ul>
                            <li className={styled.li} data-aos="fade-left" data-aos-delay={delay*3}><span>Part-Time (2021 - 2023)</span></li>
                            <li className={styled.li} data-aos="fade-left" data-aos-delay={delay*3.5}><span>Developing virtual reality environment for research use</span></li>
                            <li className={styled.li} data-aos="fade-left" data-aos-delay={delay*4}><span>Predict, collect and analyze people’s interaction and behaviors</span></li>
                        </ul>
                        <ImageSlider json={jPolyU} handleItemClick={handleItemClick}/>
                        {/* <MyComponent/> */}
                    </Container>
                </div>


                <Divider/>


                <div className="container-alt1" data-aos="fade-in" data-aos-delay={0}>
                    <Container>
                    <h3 data-aos="fade-left" data-aos-delay={delay*1}>App Mocha - Game Programmer</h3>
                    <ul>
                        <li className={styled.li} data-aos="fade-left" data-aos-delay={delay*1.5}><span>Intern, Outsourcing (2018 - 2022)</span></li>
                        <li className={styled.li} data-aos="fade-left" data-aos-delay={delay*2}><span>Designing mobile games for young children</span></li>
                        <li className={styled.li} data-aos="fade-left" data-aos-delay={delay*2.5}><span>Games Released in name of <a href='http://website.gulumaru.com/'>GuluMaru</a></span></li>
                    </ul>
                    <ImageSlider json={jAppMocha} handleItemClick={handleItemClick}/>
                    </Container>
                </div>

                <Divider/>

                <WhissTech/>

                <Divider/>

                <div className="container-alt1" data-aos="fade-left" data-aos-delay={0}>
                    <Container className='d-md-flex'>
                    <>
                        <Col md={6}>
                        <h3 data-aos="fade-left" data-aos-delay={delay*1}>Rayark Inc. - CytusII Chart Designer</h3>
                            <ul>
                                <li className={styled.li} data-aos="fade-left" data-aos-delay={delay*1.5}><span>Outsourcing (2017 - 2019)</span></li>
                                <li className={styled.li} data-aos="fade-left" data-aos-delay={delay*2}><span>Designing game charts for <a href="https://rayark.com/g/cytus2/">CytusII</a></span></li>
                            </ul>
                            <CytusList show/>
                        </Col>
                        <div className='my-3'></div>
                        <Col md={6} className='d-flex justify-content-center align-items-center'>
                            <div  data-aos="fade-left" data-aos-delay={delay*5}>
                                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/t3nQ8NntQ5w" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                                <Image src="/images/cytus/sickest_city.jpg" width="560"/>
                            </div>
                        </Col>
                    </>
                    </Container>
                </div>
            </Layout>
            <ImageViewer item={imageItem} handleClose={handleClose}/>
        </>


      );
}

function CytusList(){
    const delay = 100;
    const [open, setOpen] = useState(false);


    const myItems = jsonFile.chartList;
    const itemsMap = (start = 0, end = -1)=> {
        return(
            <>
                {myItems.slice(start, end).map((item, index) => (
                    <ListGroup.Item
                        key = {"cy"+index}
                        className='col-md-12 d-flex justify-content-between'
                        style={{borderTop: "none", }}>
                    <span className=''>{item}</span>
                    <span className=''>Easy,Hard,Chaos</span>
                    </ListGroup.Item>
                ))}
            </>
        )
    }


    return(

        <Container data-aos="fade-left" data-aos-delay={delay*3}>
            <div className='my-2'>Participated Charts</div>
        {/* <Button
            style={{ width: '150px' }}
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
        >
            {open ? 'Show Less' : 'Show All'}
        </Button> */}
            <ListGroup >
                <ListGroup.Item
                    key = {"cy-1"}
                    className='col-md-12 d-flex justify-content-between' variant="primary">
                    <span className=''>Song Name</span>
                    <span className=''>Difficulties</span>
                    </ListGroup.Item>
                    {itemsMap(0,3)}
        <Collapse  in={open}>
                <div>
                    {itemsMap(3)}
                </div>
        </Collapse>
                <ListGroup.Item
                    key = {"cy999"}
                    className='col-md-12 d-flex justify-content-between' variant="secondary"
                    style={{borderTop: "none", }}>
                        <button className='accordion-button' onClick={()=> setOpen((open)=> !open)}
                        >{open?
                        (<div className='d-flex ms-auto'><span>Show Less</span> <span><MdOutlineKeyboardArrowUp/></span></div>):
                        (<div className='d-flex ms-auto'><span>Show All</span> <span><MdOutlineKeyboardArrowDown/></span></div>)
                        }</button>
                    </ListGroup.Item>
            </ListGroup>
        </Container>
    )

}

function WhissTech(){
    const delay = 100;

    const [open, setOpen] = useState(false);

    const data = jsonFile.whissTech;
    const itemsMap = (start = 0, end = data.Length)=> {
        return(
            <>
                {data.slice(start,end).map((item, index) => (
                    <ListGroup.Item
                        key = {"whiss"+index}
                        className='col-md-8 d-flex justify-content-between'
                        style={{borderTop:"none"}}>
                    <span className=''>{item.name}</span>
                    <span className=''>
                    {item.src ? (
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe src={item.src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        ) : (
                            '-'
                            )}
                    </span>
                    </ListGroup.Item>
                ))}
            </>
        )
    }

    return(
        <div className='container-alt' data-aos="fade-left" data-aos-delay={0}>

            <Container>
                <h3 data-aos="fade-left" data-aos-delay={delay*1}>Whiss Technologies - Member</h3>
                <ul>
                    <li className={styled.li} data-aos="fade-left" data-aos-delay={delay*1.5}><span>Active member (2021 - )</span></li>
                    <li className={styled.li} data-aos="fade-left" data-aos-delay={delay*2}><span>Focus on programming other than web-development. Involved in developing different small scale prototypes and providing solutions.</span></li>
                    <li className={styled.li} data-aos="fade-left" data-aos-delay={delay*2.5}><a href='https://whisstech.com/'>Official Website</a></li>
                </ul>
                <div className='ms-3' data-aos="fade-left" data-aos-delay={delay*3}>
                    <div className='my-2'>Involved solutions:{' '}</div>
                    {/* <Button
                    style={{ width: '150px' }}
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    >
                        {open ? 'Show Less' : 'Show All'}
                    </Button> */}
                        <ListGroup>
                            <ListGroup.Item
                                key ={"whiss-1"}
                                className='col-md-8 d-flex justify-content-between'
                                variant='primary'>
                                <span className=''>Project Name</span>
                                <span className=''>Reference</span>
                                </ListGroup.Item>
                        {itemsMap(0,1)}
                        <Collapse  in={open}>
                        <div>
                            {itemsMap(1)}
                        </div>
                        </Collapse>
                        <ListGroup.Item
                            key ={"whiss999"}
                            className='col-md-8 d-flex justify-content-between'
                            variant="secondary"
                            style={{borderTop: "none", }}>
                                <button className='accordion-button' onClick={()=> setOpen((open)=> !open)}
                                >{open?
                                (<div className='d-flex ms-auto'><span>Show Less</span> <span><MdOutlineKeyboardArrowUp/></span></div>):
                                (<div className='d-flex ms-auto'><span>Show All</span> <span><MdOutlineKeyboardArrowDown/></span></div>)
                                }</button>
                            </ListGroup.Item>
                        </ListGroup>
                </div>
            </Container>
        </div>
    )
}

export default jobExperience

