import React, {useState} from 'react'
import styled from './ImageViewer.module.css'
import { CloseButton } from 'react-bootstrap';

function ImageViewer(props) {

    const imageItem = props.item;


    const handleWindowClick = (event) => {
        event.stopPropagation();
      };

      const URL_REGEX =
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;

      function TryParseLink(content)
      {
        const words = content.split(' ');
        console.log(words);
        return(
          <span>
            {words.map((word)=>{

              return word.match(URL_REGEX)?
                (<><a href={word} target='_blank'>{word}</a>{' '}</>):
                (<>{word}{' '}</>);
            })}
          </span>
        )
      }


    return (
        imageItem != null &&
        <div className={styled.overlayBackground} onClick={props.handleClose}>
            <div className={styled.overlayWindow} onClick={handleWindowClick}>
                <CloseButton className={styled.overlayCloseBtn} onClick={props.handleClose}/>

                <img
                    className={styled.img + " " + styled.child}
                    src={"./images" + imageItem.src}
                    alt="full-size image" />

                {imageItem.title || imageItem.p?
                    <div className='text-center m-3' >
                        <span className={styled.title}>{imageItem.title}</span>
                        <div className={styled.caption}>{TryParseLink(imageItem.p)}</div>
                    </div>
                            :
                    <></>
                }








            </div>
        </div>

    )
}

export default ImageViewer