import React from 'react'
import styled from './Divider.module.css'
import { Container, } from 'react-bootstrap';


function Divider({isLined}) {

    if (isLined){
        return (
            <Container>
                <div className={styled.line}></div>
                <div className={styled.line + " " +styled.line2}></div>
            </Container>
        )
    }
    return (
        <Container>
            <div className={styled.line}></div>
        </Container>
    )

}



export default Divider