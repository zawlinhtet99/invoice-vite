import { productSidebar } from "./Selectors";

export const openSideBarBtnHandler = () => {
  productSidebar.classList.remove("translate-x-full");
  productSidebar.classList.add("duration-300");
};

export const closeSidebarBtnHandler =()=>{
  productSidebar.classList.add("translate-x-full")
}
