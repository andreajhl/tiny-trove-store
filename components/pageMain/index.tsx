import { GoShieldCheck } from "react-icons/go";
import { BsCreditCard2Back } from "react-icons/bs";
import { PiMapPinLineLight } from "react-icons/pi";
import BannerCategories from "../categories/bannerCategories";
import Carousel from "../ui/Carousel";
import { carouselImages } from "@/constants/carousel";
import wordings from "@/wordings";

const PageMain = () => {
  const { home: { banner: { creditCard, warranty, store } } } = wordings;

  return (
    <main>
      <Carousel pictures={carouselImages} />
      <div className="d-flex justify-content-center align-items-center pt-2 w-100">
        <div className="text-center border-end border-light-subtle w-25" data-testid="card-info">
          <h3><BsCreditCard2Back /></h3>
          <h3 className="fw-bold text-info">{creditCard.title}</h3>
          <h4 className="fw-lighter text-secondary-emphasis">{creditCard.subtitle}</h4>
        </div>
        <div className="text-center border-end border-light-subtle w-25" data-testid="card-info">
          <h3><GoShieldCheck /></h3>
          <h3 className="fw-bold text-info">{warranty.title}</h3>
          <h4 className="fw-lighter text-secondary-emphasis">{warranty.subtitle}</h4>
        </div>
        <div className="text-center w-25" data-testid="card-info">
          <h3><PiMapPinLineLight /></h3>
          <h3 className="fw-bold text-info">{store.title}</h3>
          <h4 className="fw-lighter text-secondary-emphasis">{store.subtitle}</h4>
        </div>
      </div>
      <BannerCategories />
    </main>
  );
};

export default PageMain;
