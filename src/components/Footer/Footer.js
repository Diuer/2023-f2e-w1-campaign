import LogoImg from "../../assets/images/logo-white.png";
import { MENU_LIST } from "../../constants/menu";

import "./Footer.scss";

function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <div className="main-section">
          <div className="logo-container">
            <img className="logo" src={LogoImg} alt="logo" />
          </div>
          <div className="menu-container">
            <p className="list-title">Menu</p>
            <div className="list-container">
              <ul className="list-group">
                <li>
                  <a href="/#">首頁</a>
                </li>
                <li>
                  <a href={MENU_LIST[1].link}>最新活動</a>
                </li>
                <li>
                  <a href={MENU_LIST[3].link}>民眾服務信箱</a>
                </li>
              </ul>
              <ul className="list-group">
                <li>
                  <a href={MENU_LIST[0].link}>候選人主張</a>
                </li>
                <li>
                  <a href={MENU_LIST[2].link}>政策議題</a>
                </li>
                <li>
                  <a href={MENU_LIST[4].link}>小額捐款</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="office-information-container">
            <p className="list-title">Office Information</p>
            <ul className="office-information">
              <li>地址：台北市喵星區毛茸茸大道88號喵喵大樓3樓</li>
              <li>電話：(02) 888-5678 </li>
              <li>郵件：meowoffice@linmeow.tw</li>
            </ul>
          </div>
        </div>
        <p className="copyright">
          版權聲明：© 2023 喵立翰（Miao Li-Han） 版權所有。
        </p>
      </div>
    </div>
  );
}

export default Footer;
