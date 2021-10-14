import React from "react";

const Actor = ({ name, as }) => {
  return (
    <>
      <div className="actor">
        <div className="actor-name">
          <b>{name}</b>
        </div>
        <div className="actor-as">
          as <b>{as}</b>
        </div>
      </div>
    </>
  );
};

export default Actor;
