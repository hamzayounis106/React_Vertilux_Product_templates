import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const getTemplateData = async (postId) => {
  try {
    const response = await axios.get(
      `https://aep.tdd.mybluehost.me/staging/3938/wp-json/wp/v2/product-template-one/${postId}`,
      { withCredentials: true }
    );
    return response.data?.acf;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

export default function useFetchTemplate(postId) {
  return useQuery(["Template-data", postId], () => getTemplateData(postId), {
    refetchOnWindowFocus: false,
    retry: false,
  });
}
