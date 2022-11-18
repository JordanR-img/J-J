import Style from "../Styling/HomePage/HomePageMainContent.module.css";
import Profile1 from "../assets/HeadShot.jpg";

export default function MainContent() {
  return (
    <div className={Style.MainContentBox}>
      <div className={Style.BoxNavBar}>
        <ul className={Style.NavBar}>
          <li className={Style.ProjectsNav}>
            <h1>Projects</h1>
          </li>
          <li className={Style.ProjectsNav}>
            <h1>Projects</h1>
          </li>
          <li className={Style.ProjectsNav}>
            <h1>Projects</h1>
          </li>
          <li className={Style.ProjectsNav}>
            <h1>Projects</h1>
          </li>
          <li className={Style.ProjectsNav}>
            <h1>Projects</h1>
          </li>
        </ul>
      </div>

      <div className={Style.BoxProfilePic}>
        <div className={Style.Jordan}>
          <picture>
            {" "}
            <source srcset={Profile1} media="(min-width: 390px)" />
            <img src={Profile1} alt="Jordan Profile" className={Style.EditProfilePic} />
          </picture>
        </div>
        <div className={Style.Jone}>
          <picture>
            {" "}
            <source srcset={Profile1} media="(min-width: 390px)" />
            <img src={Profile1} alt="Jone Profile" className={Style.EditProfilePic} />
          </picture>
        </div>
      </div>
    </div>
  );
}
