import React from "react";

const Like = ({ liked, onClick }) => {
  let classes = "clickable fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <React.Fragment>
      <i onClick={onClick} className={classes} aria-hidden="true"></i>
    </React.Fragment>
  );
};

export default Like;
