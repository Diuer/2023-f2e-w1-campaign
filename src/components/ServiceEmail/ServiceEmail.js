import CatImg from "../../assets/images/illustration.png";

import "./ServiceEmail.scss";

function ServiceEmail() {
  return (
    <div className="Service-Email">
      <div className="container">
        <div className="service-introduce-container">
          <p className="title">民眾服務信箱</p>
          <h4 className="sub-title">您的聲音，我們的行動！</h4>
          <h4 className="sub-title">
            親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！
          </h4>
          <img className="cat-img" src={CatImg} alt="cat-img" />
        </div>
        <div className="write-message-container">
          <input type="text" placeholder="您的姓名" />
          <input type="text" placeholder="您的email" />
          <input type="text" placeholder="您的手機" />
          <textarea rows={4} placeholder="您的建言"></textarea>
          <div className="send-message-button">送出意見</div>
        </div>
      </div>
    </div>
  );
}

export default ServiceEmail;
