import BgImage from "../assets/bgImage.jpg";
import GooglePlay from "../assets/googlePlay.png";
import AppStore from "../assets/appStore.png";

export default function DownloadApp() {
  return (
    <div
      className="relative bg-cover bg-center h-48 sm:h-60 md:h-72 lg:h-80 flex flex-col justify-center items-center text-center p-6"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
        Read Books at Your Fingertips
      </h1>
      <div className="flex gap-4 mt-4">
        <img
          src={GooglePlay}
          alt="Google Play"
          className="w-24 sm:w-28 md:w-32 lg:w-36"
        />
        <img
          src={AppStore}
          alt="App Store"
          className="w-24 sm:w-28 md:w-32 lg:w-36"
        />
      </div>
    </div>
  );
}
