import { Routes, Route } from "react-router-dom";

import AdminPanel from "./views/admin-panel/components/AdminPanel";
import Home from "./views/home/components/Home";
import Login from "./views/login/components/Login";
import Post from "./views/post/components/Post";
import PostEditor from "./views/post/components/PostEditor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
}

export default App;
