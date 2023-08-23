import { categories } from "@/constants/categories";
import CardCategory from "../cardCategory";
import './styles.scss';

const BannerCategories = () => (
  <div className="banner">
    <div className="banner-categories">
      { categories.map(category => <CardCategory {...category} key={category.id} />) }
    </div>
  </div>
);

export default BannerCategories;
