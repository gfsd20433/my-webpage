import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../../styles/utils.module.css';


import { Container, Row, Col, Button } from 'react-bootstrap';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import FollowButton from '../../components/FollowBtn';
import styled from './layout.module.css';
import Divider from '../Divider/Divider';

import React, {useEffect, useState} from 'react';

const myName = 'Gordon Yuen';
export const siteTitle = myName + '\'s Profolio';

const cvLink = "https://docs.google.com/document/d/1rLOtGUQzHCZV0MZs1eMgiAgB2Kb5lXulLTxQBvU9wt0/edit"

function LayoutHeader(){



  return (
        <Navbar id='top' fixed={'top'} expand="lg" className={styled.header}>
          <div className="ms-3">

          </div>
        <Navbar.Brand className="d-flex ms-3" href="/">
          <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={40}
                width={40}
                alt=""
                />
          <span className='ms-3'>{myName}</span>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='me-3' />
        <Navbar.Collapse id="" className="basic-navbar-nav">
          <Nav className="ms-auto align-items-end" style={{background:'white'}}>
            <Nav.Link className='me-3'  href="/home">Home</Nav.Link>
            <Nav.Link className='me-3'  href="/awards">Awards</Nav.Link>
            <Nav.Link className='me-3'  href="/academic">Academic Works</Nav.Link>
            <Nav.Link className='me-3'  href="/work-experience">Working Experiences</Nav.Link>
            <Nav.Link className='me-3'  href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>

  )
}

function LayoutFooter(){
  return(
    <div className={"bg-secondary " + styled.footerContainer}>
      <footer className={""}>
        <Container className={""}>
          <div className='d-md-flex'>
            <Col className="d-flex align-items-center">
              <Nav.Link href="/home" className='d-flex align-items-center'>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={40}
                  width={40}
                  alt=""
                  />
                  <span className="ms-3 text-white">{myName}</span>
                </Nav.Link>

            </Col>
            <div className='my-4'></div>
            <Col className='d-block'>
                  <span style={{color:'#dddddd'}}>Links:</span>
                  <div>
                    <FollowButton template="github" />
                    <FollowButton template="youtube"/>
                    <FollowButton template="facebook"/>
                  </div>


            </Col>
            <div className='my-4'></div>
            <Col>
                <span style={{color:'#dddddd'}}>Downloads</span>
                <div className=''>
                  <a href={cvLink} className="text-white" target="_blank">Resume</a>
                </div>
            </Col>
          </div>
        </Container>

      </footer>

    </div>
  )
}

function ButtonTop(){

  const [showBtn, setShowBtn] = useState(false)

  useEffect(function mount() {
    function onScroll() {
      setShowBtn(window.scrollY > window.innerHeight * 0.05);
    }
    window.addEventListener("scroll", onScroll);

    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return(
    (showBtn)?
      <Button className={styled.backToTop} onClick={()=>{window.scrollTo({ top: 0, behavior: "smooth" })}}>
      Top
      </Button>
      :
      null
    )


}

export default function Layout({ children, home}){
  return(
    <>
      <LayoutHeader/>
      <div className={styled.background}></div>

      <div>
        <div style={{height:'10vh'}}></div>
        <Divider/>
        <main>{children}</main>
        <ButtonTop/>
        <BackToHome isHome={home}/>
        <Divider/>
        <LayoutFooter/>
      </div>


    </>
  )
}

function MyPage() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Hello, world!</h1>
        </Col>
      </Row>
    </Container>
  );
  }

  function BackToHome({isHome}){
    if(!isHome){
      return(
        <>
          <Divider/>
          <div className="d-flex justify-content-center">
            <Button className={styled.pagesItem}>
              <a href='/#'>Back To Home</a>
              </Button>
          </div>
        </>
      )
    }
  }
