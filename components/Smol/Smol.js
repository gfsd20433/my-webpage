import React from 'react'
import { Card } from 'react-bootstrap'
import styled from '@/components/Smol/Smol.module.css'

function Smol({index, imgSrc, text}) {
    const delayInit = 200;
    const delay = 50;
  return (
    <>
      <Card style={{ width: '6rem', border:'none', background:"#ffffff00"}} data-aos="fade-right" data-aos-delay={delayInit + delay * index} data-aos->
          <div className={styled.cardImage}>
              <Card.Img
                  src={imgSrc? imgSrc : "favicon.ico"}
                  style={{scale:"70%"}}
                  />
          </div>
          <Card.Body className='text-center' style={{fontSize:"12px", textAlign:"center"}}>
              <Card.Text >{text? text: "MyIcon"}</Card.Text>
              </Card.Body>
      </Card>
    </>
  )
}

export default Smol