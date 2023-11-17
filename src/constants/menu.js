import { ReactComponent as CoinSvg } from "../assets/images/coin.svg";

export const MENU_LIST = [
  { link: "#candidate", title: "候選人主張", isHighlight: false },
  { link: "#activity", title: "最新活動", isHighlight: false },
  { link: "#policy", title: "政策議題", isHighlight: false },
  { link: "#service", title: "民眾服務信箱", isHighlight: false },
  {
    link: "#donate",
    title: "小額捐款",
    isHighlight: true,
    ComponentBefore: <CoinSvg />,
  },
];
