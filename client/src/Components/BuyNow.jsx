import Heading from "./Heading";

export default function BuyNow() {
  let headingInfo = {
    author: "What our customer says",
    heading: "Testimonials",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa iure, corporis",
  };
  return (
    <>
      <div className="bg-[#111827]">
        <div className="container">
          <div className=" pb-[50px]">
            <Heading
              author={headingInfo.author}
              heading={headingInfo.heading}
              paragraph={headingInfo.paragraph}
            />
          </div>
        </div>
      </div>
    </>
  );
}
