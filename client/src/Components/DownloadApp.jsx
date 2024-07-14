import BgImage from "../assets/bgImage.jpg";
import GooglePlay from "../assets/googlePlay.png";
import AppStore from "../assets/appStore.png";

export default function DownloadApp() {
  return (
    <div
      className="bg-auto h-[200px] bg-no-repeat flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <h1 className="text-[40px] text-white">Read Books at your fingertips</h1>
      <div className="flex gap-6">
        <img src={GooglePlay} alt="GooglePlay"/>
        <img src={AppStore} alt="AppStore" />
      </div>
    </div>
  );
}
