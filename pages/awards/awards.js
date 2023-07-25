
import Layout from '../../components/layout'
import React from 'react'
import { Container, Button, Image } from 'react-bootstrap'
import Link from "next/link";
import Divider from '../../components/Divider';
import styled from './awards.module.css'


function achievement() {

  const delay = 100;

  const source_width = 560;
  const source_height = source_width /16 *9;

  return (
    <Layout>
        <Container  data-aos="fade-in" data-aos-duration={1000}>
          <div className={styled.title}>
            <h2>Awards</h2>
          </div>
        </Container>
        <Divider/>

        <div className='container-alt' data-aos="fade-up" data-aos-delay={delay}>
          <Container className='d-flex flex-wrap justify-content-between'>
            <div>
              <h3 data-aos="fade-right" data-aos-delay={delay*2}>粵港澳大灣區IT應用系統開發大賽2019</h3>
              <ul>
                <li data-aos="fade-right" data-aos-delay={delay*3}><h4>總決賽銅獎</h4></li>
                <li data-aos="fade-right" data-aos-delay={delay*4}><h4>香港區三甲</h4>
                  <ul data-aos="fade-right" data-aos-delay={delay*5}>
                    <li><span>Project: BIG爆商場模擬預警系統</span></li>
                    <li><span>
                      Articles:{' '}
                        <a href='https://www.facebook.com/yitnhk/posts/1523419977794620/?locale=zh_CN'
                          target='_blank'>
                          Facebook
                        </a>
                    </span></li>
                  </ul>
                </li>
                </ul>
            </div>
            <div data-aos="fade-left" data-aos-delay={delay*6}>

                <Image width={source_width} className='m-auto' src='/images/bigmalle.png'/>

            </div>
          </Container>
        </div>

        <Divider/>

        <div className='container-alt1' data-aos="fade-up">
          <Container className='d-flex justify-content-between flex-wrap'>

            <div>
              <h3 data-aos="fade-right" data-aos-delay={delay*1}>IVE IT Discipline Graduation Project Exhibition</h3>
              <ul>
                <li data-aos="fade-right" data-aos-delay={delay*2}><h4>Outstanding Project Award</h4></li>
                <ul>
                  <li data-aos="fade-right" data-aos-delay={delay*3}>
                    <span>Project:{' '}<Link href="/academic#the-pig-city">The Pig City</Link></span>
                  </li>
                </ul>
              </ul>
            </div>
            <div data-aos="fade-left" data-aos-delay={delay*4}>
              <Image width={source_width} src='/images/the-pig-city/screen04e.JPG' />
            </div>
          </Container>
        </div>

        <Divider/>

        <div className='container-alt' data-aos="fade-up">
          <Container className='d-flex justify-content-between flex-wrap'>
            <div>
              <h3 data-aos="fade-right" data-aos-delay={delay*1}>CHI PLAY 2019</h3>
              <ul>
                <li data-aos="fade-right" data-aos-delay={delay*2}><h4>Finalist</h4></li>
                <ul>
                  <li data-aos="fade-right" data-aos-delay={delay*3}>
                    <span>Game Submission: {' '}<Link href="/academic#the-pig-city">The Pig City</Link></span>
                  </li>
                </ul>
              </ul>
            </div>
            <div data-aos="fade-left" data-aos-delay={delay*4}>
              <Image width={source_width} src='/images/the-pig-city/screen03e.JPG' />
            </div>
          </Container>
        </div>

        <Divider/>

        <div id='ggj' className='container-alt1' data-aos="fade-up">
          <Container>
            <h3 data-aos="fade-in" data-aos-delay={delay}>Global Game Jam (Hong Kong)</h3>
              <ul>
                <li className='container-childa' data-aos="flip-left" data-aos-delay={delay*2}>
                  <h4>2020 - Best Interaction Award</h4>
                    <ul>
                      <li>
                        <span>Game Submission: {' '}</span><Link href="https://globalgamejam.org/2020/games/re-80s-0" target='_blank'>時光機 - Re. 80s</Link>
                      </li>
                      <li><span>Articles:{' '}</span>
                        <a href='https://www.facebook.com/ggjhongkong/posts/pfbid0xCYJbejNMiEkgGF8fk52vSvXwFQG6o1RyxTd8QfHvjpYNCxuJeES9voaFZxZBREal?__cft__[0]=AZUaOyjPVrCkB4ovo1XyJSDRD1xXMRmGrL13PbSUMOJpBZ0NlKKpu9xBXJEmCDGIhqHvVKPUq0A60brI9LdmCjmONJpb87FUSGK-j8ezhLNo4ugI6roEZnYCWSwT3fQaMpiSU3n-Psd31PTQjJA-IUmuP3xpECEATYsyXTt2OdQ9TA&__tn__=%2CO%2CP-R'
                          target='_blank'>
                          Facebook
                        </a></li>
                      <li className='d-flex justify-content-between flex-wrap'>
                        <div className='col-md-6 d-flex'>
                          <iframe className='mx-1 my-auto' width={source_width} height={source_height} src="https://www.youtube.com/embed/6GffiwfLl04" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div className='col-md-0 py-2'></div>
                        <div className='col-md-6 d-flex justify-content-center'>
                            <Image className='mx-1 my-auto' src='/images/ggj/re80.jpg' style={{maxHeight:source_height}} />
                        </div>
                      </li>
                  </ul>
                </li>
                <li className='container-childa' data-aos="flip-right" data-aos-delay={delay*2}>
                  <h4>2021 - Best Original Mobile Game</h4>
                    <ul>
                      <li>
                        <span>Game Submission: {' '}</span><Link href="https://globalgamejam.org/2021/games/%E8%87%B4%E5%8D%81%E5%B9%B4%E5%BE%8C%E7%9A%84%E4%BD%A0-you-10-years-1" target='_blank'>致十年後的你 - To you, in 10 years</Link>
                      </li>
                      <li><span>Articles:{' '}</span>
                        <a href='https://www.facebook.com/ggjhongkong/posts/pfbid0f6oanTd5g9Vpg3KhbxYoxA2v7itNakGn1pLMiALos5qrXqCMQtkooU7kt1oQv4kQl?__cft__[0]=AZVWkrA_IooDOlQPO_QuRG5wXCJWUMFLOM3iIspQoUIMmixF9YQGqmSh20DGvq6HLNmQG5CVVd9x2N58BPMfWh-dTQy9C5IkIuePVMauL_WKpGDoUQK59CFPKiLCzsVB0VImuVcQLuihXDWib1MRw9qKFDZYHP4wliH9cTxOY9o9YA&__tn__=%2CO%2CP-R'
                          target='_blank'>
                          Facebook
                        </a></li>
                      <li className='d-md-flex justify-contents-between'>
                        <div className='col-md-6 d-flex'>
                          <iframe className='mx-1 my-auto' width={source_width} height={source_height} src="https://www.youtube.com/embed/VSCOhvoQ0wU" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div className='col-md-0 py-2'></div>
                        <div className='col-md-6 d-flex  justify-content-center'>
                            <Image className='mx-1 my-auto'   src='/images/ggj/toyou10.png' style={{maxHeight:source_height}}/>
                        </div>
                      </li>
                  </ul>
                </li>
                <li className='container-childa' data-aos="flip-left" data-aos-delay={delay*2}>
                  <h4>2022 - Global Vision Award</h4>
                    <ul>
                      <li>
                        <span>Game Submission: {' '}</span><Link href="https://globalgamejam.org/2022/games/%E5%90%8C%E4%B8%80%E5%A4%A9%E7%A9%BA%EF%BC%8C%E4%B8%8D%E5%90%8C%E7%9A%84%E5%B9%B3%E5%9C%B0%E7%B7%9A-same-sky-different-horizon-3" target='_blank'>同一天空下，不同的平地線 - Same Sky With Different Horizon</Link>
                      </li>
                      <li><span>Articles:{' '}</span>
                        <a href='https://www.facebook.com/ggjhongkong/posts/pfbid0LDY1CfkFDVuriwAPZRKbHzNg5Epe54GPgKgaFpNaauBitQtX5yqs6B12EgQy8Xk4l?locale=zh_HK'
                          target='_blank'>
                          Facebook
                        </a></li>
                      <li className='d-flex justify-content-between flex-wrap'>
                        <div className='col-md-6 d-flex'>
                          <iframe className='mx-1 my-auto' width={source_width} height={source_height} src="https://www.youtube.com/embed/_6YzlSgZ5yY" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div className='col-md-0 py-2'></div>
                        <div className='col-md-6 d-flex  justify-content-center'>
                            <Image className='mx-1 my-auto'   src='/images/ggj/ssdh.jpeg' style={{maxHeight:source_height, width:'auto'}}/>
                        </div>
                      </li>
                  </ul>
                </li>
              </ul>
          </Container>
          </div>





    </Layout>
  )
}

export default achievement