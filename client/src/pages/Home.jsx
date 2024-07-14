import BuyNow from "../Components/BuyNow";
import DownloadApp from "../Components/DownloadApp";
import HeaderBody from "../Components/Header/HeaderBody";
import TapBook from "../Components/TapBook";
import TrendingBooks from "../Components/TrendingBooks";

export default function Home() {
  return (
    <>
      <HeaderBody />
      <TrendingBooks />
      <DownloadApp />
      <TapBook />
      <BuyNow />
    </>
  );
}
