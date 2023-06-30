import React from 'react'
import Layout from "@/components/Layout";

const templeList = () => {
  return (
    <div>Temple List</div>
  )
}


templeList.getLayout = function (page) {
    return <Layout>{page}</Layout>;
  };
export default templeList