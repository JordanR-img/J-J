import Style from "../Styling/HomePage/HomePageMainContent.module.css";

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
          {" "}
          <img alt="" src="/public/ProfileTest.png" />
          image 1{" "}
        </div>
        <div className={Style.Jone}> image 2 </div>
      </div>
    </div>
  );
}
