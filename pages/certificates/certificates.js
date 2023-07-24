import React from 'react'
import Layout from '../../components/layout/layout'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Divider from '../../components/Divider'

export default Certificates;

function Page_Certificate(){
    return (
        <Layout>
            <Certificates/>
        </Layout>
    )
}

function Certificates() {
  return (
    <>
        <Container>
            <h2 className='text-center'>Certificate</h2>
            <Divider/>

            <Row className='d-flex justify-content-between container-childa'>
                <div className='col-md-8'>
                    <h3>
                        
                        Unity Certified Associate: Game Developer (2019-2022)
                        
                    </h3>
                    <p>Having solid understanding to Unity and able to design, construct and debug the applications.</p>

                    <ul>
                        <li style={{}}>{/* listStyle: 'none' */}
                            <a href="https://unity.com/products/unity-certifications/associate-game-developer">
                                Unity Official Website
                                </a></li>
                        <li style={{}}>
                            <a href='https://www.credly.com/badges/393bc863-b8ad-41be-bd5d-af2570742442/public_url'>
                                Badge
                                </a></li>
                    </ul>
                </div>
                <div className='col-md-4 d-flex'>
                        <Image height={200} className='m-auto ' src='https://unity.com/sites/default/files/styles/large/public/2021-10/Certification-Badges-Associate-GameDeveloper-600x600.png'/>

                </div>
            </Row>
        </Container>
    </>
  )
}

