import Style from "../Styling/HomePage/HomePageMainContent.module.css";
import Profile1 from "../assets/TransparentHeadShot.png";
import { Link } from "react-router-dom";

export default function MainContent() {
  return (
    <div className={Style.MainContentBox}>
      <div className={Style.BoxNavBar}>
        <ul className={Style.NavBar}>
          <li className={Style.ProjectsNav}>
            <Link to="/Home" className={Style.Link}>
              <h1>Projects</h1>
            </Link>
          </li>
          <li className={Style.ProjectsNav}>
            <Link to="/Home" className={Style.Link}>
              <h1>Projects</h1>
            </Link>
          </li>
          <li className={Style.ProjectsNav}>
            <Link to="/Home" className={Style.Link}>
              <h1>Projects</h1>
            </Link>
          </li>
          <li className={Style.ProjectsNav}>
            <Link to="/Home" className={Style.Link}>
              <h1>Projects</h1>
            </Link>
          </li>
          <li className={Style.ProjectsNav}>
            <Link to="/Home" className={Style.Link}>
              <h1>Projects</h1>
            </Link>
          </li>
        </ul>
      </div>
      <div className={Style.TypeWriterBox}>
        <h1 className={Style.TypeWriter}>
          Hi there! We are developers who have dreams to create. To make ideas
          become reality. Take a look around the page and let us know what you
          think
        </h1>
      </div>

      <div className={Style.BoxProfilePic}>
        <div className={Style.Jordan}>
          <picture>
            <source srcset={Profile1} media="(min-width: 390px)" />

            <img
              src={Profile1}
              alt="Jordan Profile"
              className={Style.EditProfilePic}
            />
          </picture>
        </div>
        <div className={Style.Jone}>
          <picture>
            <source srcset={Profile1} media="(min-width: 390px)" />
            <img
              src={Profile1}
              alt="Jone Profile"
              className={Style.EditProfilePic}
            />
          </picture>
        </div>
      </div>
    </div>
  );
}
