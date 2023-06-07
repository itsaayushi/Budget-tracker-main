import Icon from "components/core/Icon";
import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import NavSlider from "components/core/NavSlider";

export default function Navbar() {
  const [slider, setSlider] = useState(false);

  function ShowSlider() {
    return setSlider(true);
  }

  function HideSlider(e) {
    if (e.clientX <= 25 && e.clientY > 0) {
      return setSlider(true);
    }
    if (e.clientX >= 200 || e.clientY <= 0 || e.clientY >= 657)
      return setSlider(false);
  }

  function HideOnClick() {
    return setSlider(false);
  }

  return (
    <div className="navbar" onMouseLeave={(e) => HideSlider(e)}>
      <nav className="navbarbox">
        <NavLink
          to="/"
          onMouseEnter={(e) => ShowSlider(e)}
          onMouseLeave={(e) => HideSlider(e)}
        >
          <Icon className={"white-text w-5 h-5"} name="Menu" />
        </NavLink>

        <NavLink to="/" onClick={() => HideSlider()}>
          <Icon className={"white-text w-5 h-5"} name="Overview" />
        </NavLink>
        <NavLink to="/Income" onClick={() => HideSlider()}>
          <Icon className={"white-text w-5 h-5"} name="Income" />
        </NavLink>
        <NavLink to="/expenses" onClick={() => HideSlider()}>
          <Icon className={"white-text w-5 h-5"} name="Expense" />
        </NavLink>
      </nav>
      {slider ? <NavSlider HideSlider={HideSlider} /> : null}
    </div>
  );
}
