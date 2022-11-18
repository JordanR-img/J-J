import { FiMenu } from "react-icons/fi";
import Style from "../Styling/HomePage/NavBarHomePage.module.css";
import { useState } from "react";
import Modal from "../components/ModalNavBar.js";
export default function NavBar() {
  const [modal, setModal] = useState(false);

  return (
    <div className={Style.NavBarContainer}>
      <ul className={Style.ListContainer}>{modal && <Modal />}</ul>

      <div className={Style.NavButtonContainer}>
        <FiMenu
          className={Style.NavButton}
          onClick={() => {
            setModal(!modal);
          }}
        />
      </div>
    </div>
  );
}
