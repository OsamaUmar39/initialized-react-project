import { useQuery } from "@tanstack/react-query";
import { getAllPostsAsync } from ".";

export const useGetAllPostsQuery = () => {
  return useQuery(["getAllPosts"], getAllPostsAsync, {
    select: (res) => {
      return res.data;
    },
  });
};
