import { Col, Container, Image, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import Layout from '../../components/layout'
import React, {} from 'react'
import {FaWhatsapp } from 'react-icons/fa'
import {SlEnvolope, SlPhone, } from 'react-icons/sl'

import Divider from '@/components/Divider/Divider'

const cvLink = "https://docs.google.com/document/d/1rLOtGUQzHCZV0MZs1eMgiAgB2Kb5lXulLTxQBvU9wt0/edit"

function contact() {

  const delay = 100;
  return (
    <Layout>
        <Title/>
        <div className='container-alt' data-aos="fade-in" data-aos-delay={delay*1}>
          <Container className='d-md-flex'>
            <div className='col-md-6' data-aos="fade-right">
              <Image
                src='/images/profile.png'
                className='mx-auto'
                style={{height:'50vh', borderRadius:'10%'}}
              />
            </div>
            <div className='col-0 p-2'></div>
            <div className='col-md-6 mt-4'>
              <Form/>
            </div>
          </Container>
        </div>
    </Layout>
  )
}

function Title({}){
  return(
    <div style={{}}  data-aos="fade-in" data-aos-duration={1000}>
      <h2 className='text-center'>Contact</h2>

      <Divider/>
    </div>
  )
}

function Form(){

  const delay = 100;
  return(
  <div className='mt-auto'>
    <h3 data-aos="fade-left" data-aos-delay={delay*2}>Gordon Yuen</h3>
    <ListGroup data-aos="fade-left" data-aos-delay={delay*3}>
      <ListGroupItem >
        <div className="d-flex align-items-center"><SlEnvolope className='me-1'/>{"Email"}</div>
        <a href='mailto:gordonyuen20433@gmail.com'>gordonyuen20433@gmail.com</a>
      </ListGroupItem>
      {/* <ListGroupItem>
        <div className="d-flex align-items-center"><SlPhone className='me-1'/>{"Phone Number"} / <FaWhatsapp className='mx-1'/>{"Whatsapp"}</div>
        <a href='tel: +852 5409 9316'>54099316</a>
      </ListGroupItem> */}
    </ListGroup>


                <div className='mt-4'  data-aos="fade-left"  data-aos-delay={delay*4}>
                  <Button href={cvLink} className="">Download Resume</Button>
                </div>
  </div>
  )
}

export default contact