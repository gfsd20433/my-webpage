import React from 'react';
import { FaTwitter, FaGithub, FaYoutube, FaFacebook } from 'react-icons/fa';
import styled from './FollowBtn.module.css'

// https://react-icons.github.io/react-icons/icons?name=fa

function BtnType(props){
  switch(props.template){
    case 'facebook':
        return [<FaFacebook style={{color: '#fff'}}/>, "https://www.facebook.com/gordon.yuen.7/"]
    case 'github':
      return [<FaGithub style={{color: '#fff'}}/>, "https://github.com/gfsd20433"]
    case 'youtube':
      return [<FaYoutube style={{color: '#fff'}}/>, "https://www.youtube.com/channel/UCbXhZtZTfHco6MgM_FZRpbw"]
    default:
      return [null,"#"]
  }

}


export default function FollowButton(props) {

  const result = BtnType(props);
  //const handleClick = () => {window.location.href = result[1];}
  return (
    <a href={result[1]} className={styled.a} target="_blank">
      {result[0]}
    </a>
  );
};
