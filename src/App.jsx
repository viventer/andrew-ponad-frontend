import { Routes, Route } from "react-router-dom";

import Layout from "./views/global/components/Layout";
import AdminPanel from "./views/admin-panel/components/AdminPanel";
import Home from "./views/home/components/Home";
import Login from "./views/login/components/Login";
import Post from "./views/post/components/Post";
import PostEditor from "./views/post/components/PostEditor";
import Missing from "./views/global/components/Missing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="adminpanel" element={<AdminPanel />} />
        <Route path="post/:id" element={<Post />} />
        <Route path="post/:id/edit" element={<PostEditor />} />
        <Route path="post/create" element={<PostEditor />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
