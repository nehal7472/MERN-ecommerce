/* eslint-disable react/prop-types */
export default function Heading({ author, heading, paragraph }) {
  return (
    <>
      <div className="text-center text-white pt-[20px] w-[400px] mx-auto mb-[50px]">
        <p className="text-blue-700">{author}</p>
        <h1 className="text-3xl font-semibold">{heading}</h1>
        <p className="text-slate-400">{paragraph}</p>
      </div>
    </>
  );
}
