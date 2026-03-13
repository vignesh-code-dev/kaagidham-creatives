import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Home />
      <ToastContainer
        position="top-center"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
        toastClassName="kc-toast"
        bodyClassName="kc-toast-body"
        style={{ zIndex: 9999 }}
      />
    </>
  );
}

export default App;
