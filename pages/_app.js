import React from 'react'
import '../styles/global.css'
import '../styles/utils.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';

import { useRef, useEffect } from 'react';

import AOS from 'aos';

export default function _app({Component, pageProps}) {


  useEffect(() => {
    AOS.init({
      duration: 250,
      easing: 'ease-out',
      offset: 150,
      disable: false,
    });
  }, []);

  return (

    <Component {...pageProps}/>

  )
}
