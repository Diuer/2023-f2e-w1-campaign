import LogoImg from "../../assets/images/logo.png";

import "./Header.scss";

function Header() {
  return (
    <div className="Header">
      <div className="container">
        <img src={LogoImg} alt="logo" />
        <ul>
          <li>候選人主張</li>
          <li>最新活動</li>
          <li>政策議題</li>
          <li>民眾服務信箱</li>
          <li className="highlight">小額捐款</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
