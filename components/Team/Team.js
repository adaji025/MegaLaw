import React from "react";
import styles from "./Team.module.css";

const Team = ({ team }) => {
  return (
    <div>
      <div className="position-relative">
        <img
          src={team.image}
          alt="team"
          className={`img-fluid ${styles.team_img}`}
        />
        <div className={`py-2 ${styles.team_title}`}>
          <span className="d-block text-light px-3 poppins-bold">
           {team.name}
          </span>
          <span className="d-block text-light px-3 poppins-medium text-lighter">
            {team.title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Team;
