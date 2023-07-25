import Layout, { siteTitle } from '../../components/layout/layout';

import { Container, Row, Col, Image, Button, Fade } from 'react-bootstrap';
import styled from './home.module.css'
import FollowButton from '../../components/FollowBtn';
import Divider from '../../components/Divider';
import Certificates from '../certificates';
import Smol from '@/components/Smol/Smol';

import jsonFile from './home.json'

export default function Home() {

  return (
    <Layout home >
        <Intro />
        <Divider/>

          <Skills />

        <div data-aos="fade-up">
          <Divider isLined/>
          <Container>
            <Certificates/>
          </Container>
          <Divider isLined/>
        </div>
        <div className='container-alt' data-aos="fade-in" >
          <Container className='d-md-flex'>
            <Education />
            <Jobs/>
          </Container>
        </div>

    </Layout>
  );
}

function Intro(){
  const delay = 100;
  return (
    <Container>
      <div style={{height: "15vh"}}></div>
      <div className="d-md-flex align-items-center h-100">
        <Col sm={12} md={6} className='p-3'>
          <h2 data-aos="fade-down" data-aos-delay={delay*0}>Gordon Yuen</h2>
          <h3 data-aos="fade-down" data-aos-delay={delay*1}>Programmer, Game Developer</h3>
          <p data-aos="fade-down" data-aos-delay={delay*2}>Over 4-year experience developping games and tools using Unity, including PC, Android, IOS, AR and VR applications.</p>
        </Col>
        <Col sm={12} md={6} className='p-3' data-aos="fade-left">
          <Image src="/images/web_design_profile_01.jpg" fluid />
        </Col>
      </div>
      <div style={{height: "15vh"}}></div>
    </Container>
  )
}


function Skills(){
  const delay = 100;

  const skillList = jsonFile.skills;

  var counter = 0
  var smolList = () => [
    skillList.map(item=><Smol key={item.src} imgSrc={item.src} text={item.text} index={counter++}/>)
  ]



  return (
    <>


      <div className="container-alt" data-aos="fade-in">

      <Container>
        <div style={{height: "5vh"}}></div>
        <Row className="align-items-center h-100">
          <Col sm={12} md={6} className='p-5'>
            {/* <Image src="/images/web_design_profile.jpg" fluid /> */}
            <div className='d-flex justify-content-center flex-wrap gap-4'>
              {smolList()}
            </div>

          </Col>

          <Col sm={12} md={6} className='p-5'>

          <h2 data-aos="fade-left" style={{}}  data-aos-delay={delay*0}>Expertise</h2>

            <div className='m-3'>
              <ul className='list-group overflow-hidden' data-aos="fade-left" style={{overflowX:"hidden"}}  data-aos-delay={delay}>
                <li key="unity" className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Unity</div>
                    <>Educational Apps, XR CAVE</>
                  </div>
                </li>
                <li key="python" className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Python</div>
                    <>Multi-Pose Detection</>
                  </div>
                </li>
              </ul>
            </div>

            <p className='overflow-hidden' data-aos="fade-left" data-aos-delay={delay*1}>And other self studied languages or professional applications.</p>
            {/* <div>
              <Button variant="primary"  className='btn-block mt-1'>More Details</Button>
            </div> */}
            <div data-aos="fade-left" style={{overflowX:"hidden"}}  data-aos-delay={delay}>
              <Button variant="primary" className='btn-block mt-1' href='/awards' >Awards</Button>
            </div>

          </Col>
        </Row>
        <div style={{height: "5vh"}}></div>
      </Container>
      </div>
    </>
  )
}


function Education(){
  return (
    <Container className="my-5" data-aos="fade-right">
      <Row className="align-items-center">
        {/* <Col sm={12} md={6}>
          <Image src="/images/home/home0.jpg" fluid />
        </Col> */}
        <Col  className="text-center button-container">
          <h2>Education</h2>
          <ul>
            <li key="dm" className={styled.li}><span>BSc(Hons) - Digital Media</span></li>
            <li key="ga" className={styled.li}><span>Higher Diploma in Game and Animation</span></li>
          </ul>
          <div>
            <Button variant="primary" className='btn-block mt-1' href='/academic'>Academic works</Button>
          </div>
          {/* <div>
            <Button variant="primary" className='btn-block mt-1' href='/certificates'>Certificates</Button>
          </div> */}
        </Col>
      </Row>
    </Container>

  )
}

function Jobs(){
  const delay = 100;
  return (
    <Container className="my-5 position-relative overflow-hidden" data-aos="fade-left">
      <Row className="align-items-center">
        {/* <Col sm={12} md={6}>
          <Image src="/images/home/home0.jpg" fluid />
        </Col> */}
        <Col  className="text-center">
          <h2>Work Experiences</h2>
          <ul>
            <li key="polyu" className={styled.li}>
              <span><a href='https://www.polyu.edu.hk/' target='_blank'>PolyU</a>  - Research Assistant</span>
              </li>
            <li key="appmocha" className={styled.li}>
              <span><a href='https://website.app-mocha.com/' target='_blank'>App Mocha</a> - Game Programmer</span>
              </li>
          </ul>
          <Button variant="primary"  className='btn-block mt-1' href="/job-experience">Participated Projects</Button>
        </Col>
      </Row>
    </Container>

  )
}