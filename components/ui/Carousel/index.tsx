import React from 'react';
import Image from 'next/image';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';
import { CarouselProps } from '@/interfaces/components/ui/carousel';
import classNames from 'classnames';
import './styles.scss';

const Carousel = ({ pictures }: CarouselProps) => (
  <div id="carouselIndicators" className="carousel slide carousel-fade">
    <div className="carousel-indicators">
      {
        pictures.map((_, index: number) => (
          <button
            key={index}
            aria-current="true"
            data-bs-slide-to={index}
            aria-label={`Slide ${index}`}
            className={!index ? "active" : ''}
            data-bs-target="#carouselIndicators"
            ></button>
        ))
      }
    </div>
    <div className="carousel-inner">
      {
        pictures.map((pic: Record<string, string>, index: number) => (
          <div className={classNames('carousel-item', { 'active': !index })} data-testid="carousel-item" key={index}>
            <Image src={pic.url} width={300} height={300} className="d-block w-100" alt={pic.title} />
          </div>
        ))
      }
    </div>
    <button
      className="carousel-control-prev"
      data-bs-target="#carouselIndicators"
      data-testid="btn-prev"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden"><MdArrowBackIos /></span>
    </button>
    <button
      className="carousel-control-next"
      data-bs-target="#carouselIndicators"
      data-testid="btn-next"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden"><MdArrowForwardIos /></span>
    </button>
  </div>
);

export default Carousel;
