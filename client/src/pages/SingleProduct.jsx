/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import PageNavigation from "../Components/PageNavigation";
import { useAuth } from "../store/auth";
import { useEffect } from "react";

const API = "http://localhost:5000/api/data/service";

export default function SingleProduct() {
  const { getSingleServices, isSingleLoading, singleProduct } = useAuth();

  const { id } = useParams();
  // console.log(singleProduct);

  useEffect(() => {
    getSingleServices(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {/* <PageNavigation /> */}
      {Object.entries(singleProduct).map((value, index) => {
        const {
          id = "john",
          image,
          title,
          price,
          rating,
          review,
          discountPrice,
          description,
          Available,
          subTitle,
        } = value[1];
        return (
          <PageNavigation
            review={review}
            product={value[1]}
            id={id}
            key={index}
            title={title}
            image={image}
            price={price}
            rating={rating}
            discountPrice={discountPrice}
            description={description}
            Available={Available}
            subTitle={subTitle}
          />
        );
      })}
    </>
  );
}
