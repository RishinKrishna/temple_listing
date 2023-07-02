import { Inter } from "@next/font/google";
import Navbar from "@/components/Layout/Navbar";
const inter = Inter({ subsets: ["latin"] });
import Styles from "./index.module.css";
import Search from "@/components/Search";
import ResultCard from "@/components/TempleCard";
import ganapathyImg from "@/assets/images/ganapathy.jpg";
import golganTempleImg from "@/assets/images/golganTemple.jpg";
import krishnaImg from "@/assets/images/krishna.jpg";
import Footer from "@/components/Layout/Footer";
import LogiBtn from "@/components/LogiBtn";
import Image from "next/image";

const Home = () => {
  let templeList = [
    {
      image: "https://cdn.pixabay.com/photo/2014/02/02/08/41/temple-256588_1280.jpg",
      name: "temple-1",
      place: "india, kerala",
      discription: "something",
    },
    {
      image: "https://cdn.pixabay.com/photo/2014/02/02/08/41/temple-256588_1280.jpg",
      name: "temple-1",
      place: "india, kerala",
      discription: "something",
    },
    {
      image: "https://cdn.pixabay.com/photo/2014/02/02/08/41/temple-256588_1280.jpg",
      name: "temple-1",
      place: "india, kerala",
      discription: "something",
    },
    {
      image: "https://cdn.pixabay.com/photo/2014/02/02/08/41/temple-256588_1280.jpg",
      name: "temple-1",
      place: "india, kerala",
      discription: "something",
    },
    {
      image: "https://cdn.pixabay.com/photo/2014/02/02/08/41/temple-256588_1280.jpg",
      name: "temple-1",
      place: "india, kerala",
      discription: "something",
    },
    {
      image: "https://cdn.pixabay.com/photo/2014/02/02/08/41/temple-256588_1280.jpg",
      name: "temple-1",
      place: "india, kerala",
      discription: "something",
    },
    {
      image: "https://cdn.pixabay.com/photo/2014/02/02/08/41/temple-256588_1280.jpg",
      name: "temple-1",
      place: "india, kerala",
      discription: "something",
    },
    {
      image: "https://cdn.pixabay.com/photo/2014/02/02/08/41/temple-256588_1280.jpg",
      name: "temple-1",
      place: "india, kerala",
      discription: "something",
    },
  ];
  return (
    <>
      <Navbar />
      <div className={`${Styles["home-img"]} position-relative`}>
        <div
          className="carousel-img w-100 position-absolute "
          style={{ zIndex: 1 }}
        >
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image
                  src={ganapathyImg.src}
                  className={`d-block w-100 ${Styles["carousel-img"]}`}
                  alt="..."
                  width={800}
                  height={500}
                />
              </div>
              <div className="carousel-item">
                <Image
                  src={golganTempleImg.src}
                  className={`d-block w-100 ${Styles["carousel-img"]}`}
                  alt="..."
                  width={800}
                  height={500}
                />
              </div>
              <div className="carousel-item">
                <Image
                  src={krishnaImg.src}
                  className={`d-block w-100 ${Styles["carousel-img"]}`}
                  alt="..."
                  width={800}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={`row w-100 ${Styles["captiopn-wrapper"]}`}>
            <div className="col-md-6 h-100 d-flex justify-content-center align-items-center flex-column">
              <h1
                className={`${Styles["main-hader"]} position-relative text-light`}
              >
                "Do everything you have to do, but not with greed, not with ego,
                not with lust, not with envy but with love, compassion,
                humility, and devotion." <br />- Bhagavad Gita
              </h1>
              <div className="mt-5">
                <LogiBtn />
              </div>
            </div>
          </div>
        </div>
        {/* <div
          className={`container w-100   top-0 left-0 ms-auto  ${Styles["image-caption"]} h-100`}
        >
          <div className="row h-100 ">
            <div className="col-md-12 d-flex justify-content-center align-items-center flex-column">
              <div>
                <h2 className="t-caption-1 text-white mb-4">
                  Find Your Temple Here
                </h2>
                <div>
                  <Search />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className={Styles["overley-home"]}></div>
      </div>
      <div className="container">
        <div className="row">
          <div
            className="col-md-12 d-flex justify-content-center align-items-center flex-column"
            style={{ marginTop: "100px" }}
          >
            <h1 className={`mb-4 ${Styles["find-header"]}`}>
              Find Your Temple Here
            </h1>

            <div className={Styles["search-temple"]}>
              <Search />
            </div>
          </div>
          <div className="container">
            <div className="row">
              {templeList.map((temple,index) => (
                <ResultCard key={index} {...temple} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
