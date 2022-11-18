import Style from "../Styling/HomePage/HomePage.module.css";
import MainContent from "../components/MainContentHomePage.js";
import NavBar from "../components/NavBarHomePage.js";
export default function HomePage() {
  return (
    <div className={Style.HomePage}>
      <div>
        <header>header</header>
      </div>
      <NavBar />
      <MainContent />

      {/* <div><footer>this may contain a nav</footer></div> */}
    </div>
  );
}
