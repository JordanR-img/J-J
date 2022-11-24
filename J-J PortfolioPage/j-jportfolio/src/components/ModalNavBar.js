import Style from "../Styling/HomePage/Modal.module.css";
import { FiXCircle } from "react-icons/fi";
import { useState } from "react";
export default function Modal() {

  const [close, SetClose] = useState(true);



  return (
    <div className={Style.Modal}>
      <ul className={Style.ListContainer}>
        <li>Projects</li>
        <li>Projects</li>
        <li>Projects</li>
        <li>Projects</li>
        <li>Projects</li>
      <FiXCircle onClick={() => {
       SetClose(!close)
      }}/>
      </ul>
    </div>
  );
}

