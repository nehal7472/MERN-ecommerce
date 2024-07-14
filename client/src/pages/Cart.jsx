export default function Cart() {
  return (
    <>
      <div className="container my-[100px]">
        <div className="flex justify-center items-center gap-3">
          <img src="" alt="" className="w-[50px]" />
          <p className="text-[20px] bg-slate-800 p-4 rounded-lg">BookName</p>
          <p className="text-[20px]">560 BDT</p>
          <p className="text-[20px]">Horror</p>
          <p className="text-[20px]">inStock-2</p>
          <button className="btn btn-error">Delete</button>
        </div>
      </div>
    </>
  );
}
