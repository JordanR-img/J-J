import Style from '../Styling/HomePage/HomePage.module.css';
import MainContent from "../components/MainContentHomePage";
export default function HomePage() {
  return (
  
    <div className={Style.HomePage}>
      
      <div><header>header</header></div>

        <MainContent />

        

      {/* <div><footer>this may contain a nav</footer></div> */}


    </div>
  );
}
