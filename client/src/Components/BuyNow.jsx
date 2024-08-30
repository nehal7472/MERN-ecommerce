import Heading from "./Heading";
import Stars from "./Stars";

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
          <div className="">
            <Heading
              author={headingInfo.author}
              heading={headingInfo.heading}
              paragraph={headingInfo.paragraph}
            />
          </div>
          <section className="pb-[60px]">
            <div className="">
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                <blockquote className="rounded-lg bg-white p-6 shadow-sm sm:p-8 ">
                  <div className="flex items-center gap-4">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                      className="size-14 rounded-full object-cover"
                    />

                    <div>
                      <div className="flex justify-start gap-0.5 text-green-500">
                        <Stars />
                        <Stars />
                        <Stars />
                        <Stars />
                      </div>

                      <p className="mt-0.5 text-lg font-medium text-gray-700">
                        Paul Starr
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-900">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Culpa sit rerum incidunt, a consequuntur recusandae ab saepe
                    illo est quia obcaecati neque quibusdam eius accusamus error
                    officiis atque voluptates magnam!
                  </p>
                </blockquote>

                <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-4">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                      className="size-14 rounded-full object-cover"
                    />

                    <div>
                      <div className="flex justify-start gap-0.5 text-green-500">
                        <Stars />
                        <Stars />
                        <Stars />
                      </div>

                      <p className="mt-0.5 text-lg font-medium text-gray-900">
                        Paul Starr
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-700">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Culpa sit rerum incidunt, a consequuntur recusandae ab saepe
                    illo est quia obcaecati neque quibusdam eius accusamus error
                    officiis atque voluptates magnam!
                  </p>
                </blockquote>

                <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-4">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                      className="size-14 rounded-full object-cover"
                    />

                    <div>
                      <div className="flex justify-start gap-0.5 text-green-500">
                      <Stars />
                        <Stars />
                        <Stars />
                        <Stars />
                        <Stars />
                      </div>

                      <p className="mt-0.5 text-lg font-medium text-gray-900">
                        Paul Starr
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-700">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Culpa sit rerum incidunt, a consequuntur recusandae ab saepe
                    illo est quia obcaecati neque quibusdam eius accusamus error
                    officiis atque voluptates magnam!
                  </p>
                </blockquote>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
