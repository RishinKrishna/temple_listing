import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
export default function App({ Component, pageProps }) {
  let getPage = Component.getLayout ? ()=> Component.getLayout(<Component {...pageProps}/>) : ()=> <Component {...pageProps}/>;
  return (
    <>
      {getPage()}
      <ToastContainer />
    </>
  );
}
