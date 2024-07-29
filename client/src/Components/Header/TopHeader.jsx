import TopNavIcon from "../../assets/topNavIcon.png";

export default function TopHeader() {
  return (
    <>
      <div className="bg-[#111827] border-b-2 border-orange-600 py-1 w-full fixed z-[100]">
        <div className="container flex justify-between">
          <p>+880 1717-971341</p>
          <p>Welcome to online book store</p>
          <div className="flex justify-center items-center gap-3">
            <p>Explore</p>
            <img src={TopNavIcon} alt="navIcon"  className="w-[25px]"/>
          </div>
        </div>
      </div>
    </>
  );
}
