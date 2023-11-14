import { useEffect, useState } from "react";
import cn from "clsx";

import LogoImg from "../../assets/images/logo.png";

import { MENU_LIST } from "../../constants/menu";

import "./Header.scss";

function Header() {
  const [activeHash, setActiveHash] = useState(
    window.location.hash || MENU_LIST[0].link
  );

  useEffect(() => {
    const onChangeHash = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", onChangeHash);

    return () => window.removeEventListener("hashchange", onChangeHash);
  }, []);

  return (
    <div className="Header">
      <div className="container">
        <a href="/#">
          <img src={LogoImg} alt="logo" />
        </a>
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
    </div>
  );
}

export default Header;
