import InitialRender from "./InitialRender";
import Listener from "./Listener";
import Observer from "./Observer";

class Invoice {
  init() {
    console.log("object");
    Observer()
    InitialRender();
    Listener();
  }
}

export default Invoice;
