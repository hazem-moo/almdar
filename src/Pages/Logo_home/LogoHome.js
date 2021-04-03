import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  // CarouselControl,
  // CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import './LogoHome.css'
import Logo1 from '../../images/1.jpg'
import Logo2 from '../../images/2.jpg'
import Logo3 from '../../images/3.jpg'
import Logo4 from '../../images/4.jpg'


const items = [
  {
    src: Logo1,
    caption: ' اصابه خطيره لقنان مصري شاب بسبب محمد رمضان '
  },
  {
    src: Logo2,
    caption: ' هل يحصل محمد صلاح علي الجنسية الانجليزيه '
  },
  {
    src: Logo3 ,
    caption: ' ما قصه الغقد الذي ارتدته ياسمين صبري '
  },
  {
    src: Logo4 ,
    caption: ' دبي للاحصاء : 38 % نسبة الاطفال في للامارات '
  }
];

const LogoHome = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div className='overlay'></div>    
        <img src={item.src} alt={item.altText} width='100%' />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div className='container-slide'>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        {slides}
        <div className='social'>
          <i className='fab fa-facebook '></i>
          <i className='fab fa-linkedin '></i>
          <i className='fab fa-youtube '></i>
          <i className='fab fa-instagram '></i>
          <i className='fab fa-twitter '></i>
        </div>
      </Carousel>
    </div>
  );
}

export default LogoHome;