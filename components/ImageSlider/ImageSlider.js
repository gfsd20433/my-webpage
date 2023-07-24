import React , {useState} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Carousel from 'react-bootstrap/Carousel';
//https://react-bootstrap.github.io/components/carousel/
//https://youtu.be/2tUgOM8rjJI?t=529

export default ImageSlider;

function CreateItem(item, keyName, handleItemClick){
    return (
      <Carousel.Item key={keyName}>
      <img
        className="d-block w-100"
        src = {item.src_alt?  "./images" + item.src_alt : "./images" + item.src}
        alt = {item.alt}
        style={{ height: '400px',  objectFit: 'cover', width: '100%'}}
        onClick={() => handleItemClick(item)}
      />
      <Carousel.Caption>
        {/* <h3>{item.title}</h3>
        <p>{item.p}</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    )
}

function CreateItemsGroup(json, handleItemClick){
    let count = 0;

    const items = json.photos.map(item =>
        CreateItem(item, `${json.idPrefix}-${count++}`, handleItemClick)
      );
    return items;
}


function ImageSlider(props){
    return(
        <Carousel indicators={true}>
            {CreateItemsGroup(props.json, props.handleItemClick)}
        </Carousel>
    )
}



function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img style={{ width: 100 , height: 'auto' }}
          className="d-block w-100"
          src="https://scontent.fhkg4-2.fna.fbcdn.net/v/t39.30808-6/273781189_4790043394424784_7296792629280176918_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=FFAVOG0aBzoAX8RzRQN&_nc_ht=scontent.fhkg4-2.fna&oh=00_AfC-1dlyg7J4Vyw95P8ers2DeKp3EMXW36NZklKVgIjTQQ&oe=645A851F"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{  width: 100 , height: 'auto' }}
          className="d-block w-100"
          src="https://scontent.fhkg4-1.fna.fbcdn.net/v/t39.30808-6/335466064_220647953781863_7695354294067717366_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=ocxQEV8Nl7cAX9R4PLh&_nc_ht=scontent.fhkg4-1.fna&oh=00_AfBVnaCbBWbrJGzAMTqDe71UBiBb6N8vIM_3pOmtcI-ang&oe=6459CFE3"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{  width: 100 , height: 'auto' }}
          className="d-block w-100"
          src="https://scontent.fhkg4-1.fna.fbcdn.net/v/t1.6435-9/69181570_2377539745675173_975590126090452992_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=UrVIMX4oRT0AX-7prZ9&_nc_ht=scontent.fhkg4-1.fna&oh=00_AfAnH3vGJmqdhpALxidfDedAYg6eYrtJGRA04id4irU8pA&oe=647C90B8"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

