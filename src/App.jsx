import { Routes, Route } from "react-router-dom";

import Layout from "./views/global/components/Layout";
import AdminPanel from "./views/admin-panel/components/AdminPanel";
import Home from "./views/home/components/Home";
import Login from "./views/auth/components/Login";
import Post from "./views/post/components/Post";
import PostEditor from "./views/post/components/PostEditor";
import Missing from "./views/global/components/Missing";
import Register from "./views/auth/components/Register";
import PersistLogin from "./views/auth/components/PersistLogin";
import RequireAuth from "./views/auth/components/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route element={<PersistLogin />}>
          <Route index element={<Home />} />
          <Route path="post/:id" element={<Post />} />
          <Route
            element={
              <RequireAuth allowedRoles={["Admin", "Editor", "Creator"]} />
            }
          >
            <Route path="adminpanel" element={<AdminPanel />} />
            <Route path="post/:id/edit" element={<PostEditor />} />
            <Route path="post/create" element={<PostEditor />} />
          </Route>
        </Route>
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
