import React, { Fragment, useContext } from "react";
import ResumeContext from "../../../contexts/ResumeContext";
import sections from "../../../data/leftSections";
import LeftNavbar from "./LeftNavbar";
import styles from "./LeftSidebar.module.css";

const LeftSidebar = () => {
  const { state } = useContext(ResumeContext);

  return (
    <div className="flex">
      <LeftNavbar />

      <div className={styles.container}>
        {sections.map(({ id, name, event, component: Component }) => (
          <Fragment key={id}>
            <Component id={id} name={name} event={event} state={state} />
            <hr />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
