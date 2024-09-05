/* eslint-disable react/prop-types */
export default function Heading({ author, heading, paragraph }) {
  return (
    <>
      <div className="text-center text-white pt-8 w-full max-w-3xl mx-auto mb-12 px-4">
        <p className="text-blue-700 text-sm sm:text-base md:text-lg lg:text-xl">
          {author}
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          {heading}
        </h1>
        <p className="text-slate-400 text-sm sm:text-base md:text-lg lg:text-xl mt-4">
          {paragraph}
        </p>
      </div>
    </>
  );
}
