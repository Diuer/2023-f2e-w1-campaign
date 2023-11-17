import React, { useCallback, useEffect, useState } from "react";
import cn from "clsx";

import LogoImg from "../../assets/images/logo.png";
import LogoWhiteImg from "../../assets/images/logo-white.png";
import HamburgerImg from "../../assets/images/hamburger.png";
import CloseImg from "../../assets/images/close.png";

import { MENU_LIST } from "../../constants/menu";

import "./Header.scss";

function Header() {
  const [activeHash, setActiveHash] = useState(
    window.location.hash || MENU_LIST[0].link
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const triggerMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    const onChangeHash = () => {
      setActiveHash(window.location.hash);
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("hashchange", onChangeHash);

    return () => window.removeEventListener("hashchange", onChangeHash);
  }, []);

  return (
    <div className="Header">
      <div className="container">
        <a href="/#">
          <img className="logo" src={LogoImg} alt="logo" />
        </a>
        <img
          className="hamburger-icon"
          src={HamburgerImg}
          alt="hamburger-icon"
          onClick={triggerMenu}
        />
        <ul>
          {MENU_LIST.map((item) => (
            <li
              key={item.link}
              className={cn({
                highlight: item.isHighlight,
                active: activeHash === item.link,
              })}>
              <a href={item.link}>
                {item.ComponentBefore && item.ComponentBefore}
                {item.title}
                {item.ComponentAfter && item.ComponentAfter}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {isMenuOpen && (
        <div className="hamburger-container">
          <div className="container">
            <a href="/#">
              <img className="logo" src={LogoWhiteImg} alt="logo" />
            </a>
            <img
              className="close-icon"
              src={CloseImg}
              alt="close-icon"
              onClick={triggerMenu}
            />
          </div>
          <ul>
            {MENU_LIST.map((item) => (
              <li
                key={item.link}
                className={cn({
                  highlight: item.isHighlight,
                  active: activeHash === item.link,
                })}>
                <a href={item.link}>
                  {item.ComponentBefore && item.ComponentBefore}
                  {item.title}
                  {item.ComponentAfter && item.ComponentAfter}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
