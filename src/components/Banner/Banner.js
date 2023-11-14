import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SloganImg from "../../assets/images/slogan.png";
import CandidateImg from "../../assets/images/candidate.png";

import "./Banner.scss";
import { useEffect } from "react";

function Banner() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textVertical = gsap.timeline({
      scrollTrigger: {
        trigger: ".Header", // 決定scrolltrigger要以哪一個元素作為觸發基準點
        markers: false, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
        start: "0 top", // 決定動畫開始點的位置
        // pin: true,
        scrub: false, // 物件動畫根據卷軸捲動程度跑
        duration: 0.1,
      },
    });

    textVertical
      .to(".text-vertical", {
        transform: "translateY(0)",
      })
      .to(
        ".text-horizontal",
        {
          transform: "translateX(0)",
        },
        "<"
      );
  }, []);

  return (
    <div className="Banner" id="candidate">
      <div className="container">
        <div className="main-section">
          <p className="sub-title">2023 THE F2E 立委競選</p>
          <p className="main-title">
            從<span className="highlight">喵</span>的眼中
            <br />
            看見台灣
          </p>
          <img className="slogan" src={SloganImg} alt="slogan" />
          <p className="text-horizontal">Miao Li-Han</p>
          <p className="text-vertical">喵立翰</p>
          <img className="candidate" src={CandidateImg} alt="candidate" />
        </div>
        <div className="political-opinions-container">
          <h1 className="political-opinions-title">
            護航台灣幸福經濟 從照顧每一隻貓咪開始
          </h1>
          <h4 className="political-opinions-description">
            我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的
            GDP 經濟帶來巨大效益。
            <br />
            <br />
            因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Banner;
