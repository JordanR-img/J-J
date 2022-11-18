import Style from "../Styling/HomePage/HomePage.module.css";
import MainContent from "../components/MainContentHomePage.js";
import NavBar from "../components/NavBarHomePage.js";
import Header from '../components/Header.js'
export default function HomePage() {
  return (
    <div className={Style.HomePage}>
     <Header />
      <NavBar />
      <MainContent />

      {/* <div><footer>this may contain a nav</footer></div> */}
    </div>
  );
}
