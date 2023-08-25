import React from 'react';
import Image from 'next/image';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';
import { CarouselProps } from '@/interfaces/components/ui/carousel';
import classNames from 'classnames';
import './styles.scss';

const Carousel = ({ pictures }: CarouselProps) => (
  <div
    id="carousel"
    data-bs-ride="carousel"
    className="carousel slide carousel-dark carousel-fade"
  >
    <div className="carousel-indicators">
      {
        pictures.map((_, index: number) => (
          <button
            key={index}
            aria-current="true"
            data-bs-slide-to={index}
            aria-label={`Slide ${index}`}
            className={!index ? "active" : ''}
            data-bs-target="#carousel"
            ></button>
        ))
      }
    </div>
    <div className="carousel-inner">
      {
        pictures.map((pic: Record<string, string>, index: number) => (
          <div
            key={index}
            data-bs-interval="10000"
            className={classNames(
              "carousel-item",
              { "active": !index }
            )}
            data-testid="carousel-item">
            <Image
              src={pic.url}
              width={300}
              height={300}
              className="d-block w-100"
              alt={pic.title}
            />
          </div>
        ))
      }
    </div>
    <button
      className="carousel-control-prev"
      data-bs-target="#carousel"
      data-testid="btn-prev"
      data-bs-slide="prev"
    >
      <span></span>
      <span className="btn-prev-icon"><MdArrowBackIos /></span>
    </button>
    <button
      className="carousel-control-next"
      data-bs-target="#carousel"
      data-testid="btn-next"
      data-bs-slide="next"
    >
      <span></span>
      <span className="btn-next-icon"><MdArrowForwardIos /></span>
    </button>
  </div>
);

export default Carousel;
