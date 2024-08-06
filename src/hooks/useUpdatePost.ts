import {
  Post,
  useUpdatePostMutation,
} from "../views/post/slices/postsApiSlice";

const useUpdatePost = () => {
  const [updatePostMutation] = useUpdatePostMutation();

  const updatePost = async (newPostData: Partial<Post>, id: string) => {
    await updatePostMutation({ postId: id, postData: newPostData }).unwrap();
  };

  return updatePost;
};

export default useUpdatePost;
