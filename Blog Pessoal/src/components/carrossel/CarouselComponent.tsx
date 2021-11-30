import * as React from 'react';
import Carousel from 'react-elastic-carousel';
import { useState } from 'react';
// import { Box, Grid} from '@material-ui/core';
import './CarouselComponent.css';

function CarouselComponent() {
  const [items] = useState([
    { id: 1, title: 'item #1', img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { id: 2, title: 'item #2', img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { id: 3, title: 'item #3', img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
    { id: 4, title: 'item #4', img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" },
    { id: 5, title: 'item #5', img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" },
    { id: 6, title: 'item #6', img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { id: 7, title: 'item #7', img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" },
    { id: 8, title: 'item #8', img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" },
    { id: 9, title: 'item #9', img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
    { id: 10, title: 'item #10', img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" },
    { id: 11, title: 'item #11', img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { id: 12, title: 'item #12', img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" }
  ])

  return (
    <div className="menuCarrossel">
      <div className="titulo-c"><h1>Linguagens e Ferramentas populares!</h1></div>
      <div className="carrossel">
        <Carousel itemsToShow={4} isRTL={false} enableAutoPlay autoPlaySpeed={2300}>
          {items.map(item => <div key={item.id}>
            <img src={item.img} alt="" width="100%" height="250px" />
          </div>)}
        </Carousel>
      </div>
    </div>
  )
}

export default CarouselComponent;