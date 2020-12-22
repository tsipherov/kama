import React from "react";
// import { NavLink } from "react-router-dom";
import Frend from "../frend/frend";
import Massage from "../massage/Massage";
// import stl from "./dialogs.module.css"

const Dialogs = ({ data, massages }) => {
  let friendElements = data.map(({ name, id }) => {
    return (
      <li className="list-group-item bg-success" key={id}>
        <Frend name={name} id={id} />
      </li>
    );
  });
  let msgElements = massages.map(({ txt, id }) => {
    return (
      <li class="list-group-item" key={id}>
        <Massage msg={txt} />
      </li>
    );
  });

  return (
    <main className="content">
      <h2 className="text-center">Dialogs Page</h2>
      <div className="d-flex">
        <div className="col-3 friendList">
          <h3>Friends</h3>
          <ul className="list-group bg-success">{friendElements}</ul>
        </div>
        <div className="col-9 chat">
          <h3>Chat</h3>
          <ul className="list-group">{msgElements}</ul>
        </div>
      </div>
    </main>
  );
};

export default Dialogs;
