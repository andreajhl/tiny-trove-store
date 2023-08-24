import { GoShieldCheck } from "react-icons/go";
import { BsCreditCard2Back } from "react-icons/bs";
import { PiMapPinLineLight } from "react-icons/pi";
import BannerCategories from "../categories/bannerCategories";
import Carousel from "../ui/Carousel";
import { carouselImages } from "@/constants/carousel";
import wordings from "@/wordings";
import './styles.scss';

const PageMain = () => {
  const { home: { banner: { creditCard, warranty, store } } } = wordings;

  return (
    <main className="page-main">
      <div className="page-main-carousel">
        <Carousel pictures={carouselImages} />
      </div>
      <div className="page-main-content">
        <div className="page-main-content__card border-end border-light-subtle" data-testid="card-info">
          <h3><BsCreditCard2Back /></h3>
          <h3 className="page-main-content__card-title">{creditCard.title}</h3>
          <h4 className="page-main-content__card-subtitle">{creditCard.subtitle}</h4>
        </div>
        <div className="page-main-content__card border-end border-light-subtle" data-testid="card-info">
          <h3><GoShieldCheck /></h3>
          <h3 className="page-main-content__card-title">{warranty.title}</h3>
          <h4 className="page-main-content__card-subtitle">{warranty.subtitle}</h4>
        </div>
        <div className="page-main-content__card" data-testid="card-info">
          <h3><PiMapPinLineLight /></h3>
          <h3 className="page-main-content__card-title">{store.title}</h3>
          <h4 className="page-main-content__card-subtitle">{store.subtitle}</h4>
        </div>
      </div>
      <BannerCategories />
    </main>
  );
};

export default PageMain;
