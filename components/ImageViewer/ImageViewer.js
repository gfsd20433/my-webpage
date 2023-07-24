import React, {useState} from 'react'
import styled from './ImageViewer.module.css'
import { CloseButton } from 'react-bootstrap';

function ImageViewer(props) {

    const imageItem = props.item;


    const handleWindowClick = (event) => {
        event.stopPropagation();
      };



    return (
        imageItem != null &&
        <div className={styled.overlayBackground} onClick={props.handleClose}>
            <div className={styled.overlayWindow} onClick={handleWindowClick}>
                <CloseButton className={styled.overlayCloseBtn} onClick={props.handleClose}/>

                <img
                    className={styled.img + " " + styled.child}
                    src={"./images" + imageItem.src}
                    alt="full-size image" />
                    <div className={styled.caption}>{imageItem.p}</div>

                <span>{imageItem.title}</span>



            </div>
        </div>

    )
}

export default ImageViewer