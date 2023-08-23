import { categories } from "@/constants/categories";
import CardCategory from "../cardCategory";

const BannerCategories = () => (
  <div className="container-fluid mt-5">
    <div className="d-flex justify-content-center flex-wrap">
      { categories.map(category => <CardCategory {...category} key={category.id} />) }
    </div>
  </div>
);

export default BannerCategories;
