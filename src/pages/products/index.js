import Layout from "@/components/Layout";
import TempleCard from "@/components/TempleCard";
import React from "react";

const Products = () => {
  return (
    <div>
      Products
      {/* <TempleCard/> */}
    </div>
  );
};

Products.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};

export default Products;
