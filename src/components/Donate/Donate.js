import { useCallback, useEffect, useState } from "react";
import cn from "clsx";
import numeral, { isNumeral } from "numeral";
import CountUp from "react-countup";

import CoinImg from "../../assets/images/coin.png";

import "./Donate.scss";

const DONATE_MAPPING = {
  caseA: {
    title: "喵星人之友",
    amount: 600,
  },
  caseB: {
    title: "喵星大使",
    amount: 6000,
  },
  caseC: {
    title: "喵星傳奇",
    amount: 60000,
  },
};

function Donate() {
  const [isWriting, setIsWriting] = useState(false);
  const [selectedCase, setSelectCase] = useState("caseA");
  const [customAmount, setCustomAmount] = useState(0);
  const [donateInfo, setDonateInfo] = useState({
    amount: 987655873,
    caseA: 9957,
    caseB: 2000,
    caseC: 1234,
  });

  const onSubmit = useCallback(() => {
    if (selectedCase === "") {
      setDonateInfo((donateInfo) => ({
        ...donateInfo,
        amount: donateInfo.amount + customAmount,
      }));
    } else {
      setDonateInfo((donateInfo) => ({
        ...donateInfo,
        amount: donateInfo.amount + DONATE_MAPPING[selectedCase].amount,
        [selectedCase]: donateInfo[selectedCase] + 1,
      }));
    }

    setIsWriting(false);
  }, [selectedCase, customAmount]);

  const resetForm = () => {
    setSelectCase("caseA");
    setCustomAmount(0);
  };

  useEffect(() => {
    if (isWriting) {
      resetForm();
    }
  }, [isWriting]);

  useEffect(() => {
    if (customAmount && selectedCase) {
      setSelectCase("");
    }
  }, [selectedCase, customAmount]);

  return (
    <div className="Donate" id="donate">
      <div className="container">
        {isWriting ? (
          <div className="donate-writing-container">
            <h4 className="sub-title">選擇捐款方案</h4>
            <div className="case-container">
              {Object.keys(DONATE_MAPPING).map((caseKey) => (
                <div
                  key={caseKey}
                  className={cn("case-item", {
                    selected: selectedCase === caseKey,
                  })}
                  onClick={() => {
                    setSelectCase(caseKey);
                  }}>
                  <h5 className="case-title">喵星人之友</h5>
                  <p className="price">
                    NT{numeral(DONATE_MAPPING[caseKey].amount).format("$0,0")}
                  </p>
                  <p className="description">
                    已有 {donateInfo[caseKey]} 人贊助
                  </p>
                </div>
              ))}
            </div>
            <div
              className={cn("custom-donate-container", {
                selected: selectedCase === "",
              })}>
              <h5 className="case-title">自訂捐款金額</h5>
              <input
                type="number"
                placeholder="請輸入捐款金額"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(numeral(e.target.value).value());
                }}
              />
            </div>
            <div className="button-group">
              <div
                className="cancel-button"
                onClick={() => {
                  setIsWriting(false);
                }}>
                返回
              </div>
              <div className="go-donate-button" onClick={onSubmit}>
                <img className="icon" src={CoinImg} alt="icon" />
                我要捐款
              </div>
            </div>
          </div>
        ) : (
          <div className="donate-introduce-container">
            <p className="title">小額捐款</p>
            <h4 className="sub-title">
              您的小筆捐款，是每隻毛孩未來的大大動力！
            </h4>
            <h2 className="description">累積總金額</h2>
            <p className="total-amount">
              NT$
              <CountUp end={donateInfo.amount} />
            </p>
            <div
              className="go-donate-button"
              onClick={() => {
                setIsWriting(true);
              }}>
              <img className="icon" src={CoinImg} alt="icon" />
              前往捐款
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Donate;
