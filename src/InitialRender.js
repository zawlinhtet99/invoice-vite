import { productRender } from "./Inventory";
import { products } from "./State";

const InitialRender = () => {
  productRender(products);
};

export default InitialRender;
