import Banner from "./banner/Banner";
import Categories from "./categories/Categories";
import OtherInformation from "./other-information/OtherInformation";
import Products from "./Products/Products";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <Categories />
      <Products />
      <OtherInformation />
    </div>
  );
}
