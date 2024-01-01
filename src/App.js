import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Authors from "./pages/Authors";
import MostLiked from "./pages/MostLiked";
import MostComment from "./pages/MostComment";
import { AuthorProvider } from "./context/AuthorContext";
import Profile from "./pages/Profile";
import { PostProvider } from "./context/PostContext";
import Post from "./pages/Post";
function App() {
  return (
    <AuthorProvider>
      <PostProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Authors />} />
              <Route element={<Authors />} />
              <Route path="Profile/:id" element={<Profile />} />
              <Route path="Post/:id" element={<Post />} />
              <Route path="MostLikedPost" element={<MostLiked />} />
              <Route path="MostCommentPost" element={<MostLiked />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PostProvider>
    </AuthorProvider>
  );
}

export default App;
