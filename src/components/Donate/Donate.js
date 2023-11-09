import "./Donate.scss";

function Donate() {
  return (
    <div className="Donate">
      <div className="container">
        <div className="donate-introduce-container">
          <p className="title">小額捐款</p>
          <h4 className="sub-title">
            您的小筆捐款，是每隻毛孩未來的大大動力！
          </h4>
          <h2 className="description">累積總金額</h2>
          <p className="total-amount">NT$987,655,873</p>
          <div className="go-donate-button">前往捐款</div>
        </div>
      </div>
    </div>
  );
}

export default Donate;
