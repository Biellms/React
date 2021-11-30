import React from 'react';
import Carousel from 'react-elastic-carousel';
import { useState } from 'react';
import './CarouselComponent.css';

function CarouselComponent() {
  const [items] = useState([
    { id: 1, title: 'item #1', img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { id: 2, title: 'item #2', img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { id: 3, title: 'item #3', img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" },
    { id: 4, title: 'item #4', img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { id: 5, title: 'item #5', img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
    { id: 6, title: 'item #6', img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
  ])
  return (
    <div className="carrossel">
      <Carousel itemsToShow={3} isRTL={false}>
        {items.map(item => <div key={item.id}>
          <img src={item.img} alt="" width="100%" height="250px" />
        </div>)}
      </Carousel>
    </div>
  )
}

export default CarouselComponent;