// /* eslint-disable react/prop-types */
// import { NavLink } from "react-router-dom";
// import { useAuth } from "../store/auth";
// import { useEffect } from "react";

// export default function ProductList() {
//   const { services } = useAuth();

//   useEffect(() => {
//     services;
//   }, []);

//   const products = services.map((v, i) => (
//     <div key={i} className="w-[160px] h-[350px]">
//       <NavLink to={`./singleproduct/${v.subTitle}`}>
//         <div className="cursor-pointer">
//           <img
//             src={v.image}
//             alt="topBooksImage"
//             className="w-[150px] h-[210px] rounded-md"
//           />
//           <h1>{v.title}</h1>
//           <h2>{v.subTitle}</h2>
//           <span>stars</span>
//         </div>
//       </NavLink>
//     </div>
//   ));

//   return <>{products.length >= 1 ? products : "Loading ..."}</>;
// }
