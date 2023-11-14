import { useCallback, useState } from "react";
import CatImg from "../../assets/images/illustration.png";

import "./ServiceEmail.scss";

function ServiceEmail() {
  const [form, setForm] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onChange = (e) => {
    const inputKey = e.target.name;
    setForm((form) => ({
      ...form,
      [inputKey]: e.target.value,
    }));
  };
  const triggerModal = useCallback(() => {
    const nextIsModalOpen = !isModalOpen;
    setIsModalOpen(nextIsModalOpen);
    document.body.style.overflowY = nextIsModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  return (
    <div className="Service-Email" id="service">
      {isModalOpen && (
        <>
          <div className="mask"></div>
          <div className="modal">
            <h4 className="title">感謝您抽出寶貴的時間給予我們寶貴的建議。</h4>
            <p className="sub-title">
              我們非常重視您的意見，它是我們不斷改進和提升服務的動力。您提出的建議已經轉交給相關部門進行評估，我們將努力在未來的服務中加以考慮和實施。
            </p>
            <div className="back-button" onClick={triggerModal}>
              返回
            </div>
          </div>
        </>
      )}
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
          <input
            type="text"
            name="name"
            placeholder="您的姓名"
            value={form.name}
            onChange={onChange}
          />
          <input
            type="text"
            name="email"
            placeholder="您的email"
            value={form.email}
            onChange={onChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="您的手機"
            value={form.phone}
            onChange={onChange}
          />
          <textarea
            rows={4}
            name="advise"
            placeholder="您的建言"
            value={form.advise}
            onChange={onChange}></textarea>
          <div className="send-message-button" onClick={triggerModal}>
            送出意見
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceEmail;
