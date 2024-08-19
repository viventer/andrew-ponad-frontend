import { useUpdatePostMutation } from "../views/post/slices/postsApiSlice";

import { PostType } from "../views/post/types/post.types";

const useUpdatePost = () => {
  const [updatePostMutation] = useUpdatePostMutation();

  const updatePost = async (newPostData: Partial<PostType>, id: string) => {
    await updatePostMutation({ postId: id, postData: newPostData }).unwrap();
  };

  return updatePost;
};

export default useUpdatePost;
