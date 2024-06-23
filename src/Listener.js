import { closeSidebarBtnHandler, openSideBarBtnHandler } from "./Handlers";
import { addNewProductBtnHandler } from "./Inventory";
import { createRecordFormHandler, recordGroupHandler } from "./Record";
import {
  addNewProductBtn,
  closeSidebarBtn,
  createRecordForm,
  manageInventoryBtn,
  recordGroup,
} from "./Selectors";

const Listener = () => {
  manageInventoryBtn.addEventListener("click", openSideBarBtnHandler);
  closeSidebarBtn.addEventListener("click", closeSidebarBtnHandler);
  addNewProductBtn.addEventListener("click", addNewProductBtnHandler);
  createRecordForm.addEventListener("submit", createRecordFormHandler);
  recordGroup.addEventListener("click", recordGroupHandler);
};

export default Listener;
