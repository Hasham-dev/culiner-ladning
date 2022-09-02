import Navbar from "./Navbar";
import Hero from "./Hero";

//bgimage
import bgImage from "../assets/bg-img.png";
import HeaderImage from "../assets/Home.png";

const Header = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <header
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <Hero />
        <div class="arrow_container">
          <a href="#toscroll">
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
            <span class="text">Scroll down</span>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
