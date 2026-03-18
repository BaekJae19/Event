import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoticeBoard from "./pages/NoticeBoard";
import CommunityBoard from "./pages/CommunityBoard";
import PostDetail from "./pages/PostDetail";
import PostEditor from "./pages/PostEditor";
import MyPage from "./pages/MyPage";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";
import MenuCalendar from "./pages/MenuCalendar";
import KnowledgeArchive from "./pages/KnowledgeArchive";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Dashboard },
      { path: "notice", Component: NoticeBoard },
      { path: "community", Component: CommunityBoard },
      { path: "post/:id", Component: PostDetail },
      { path: "write", Component: PostEditor },
      { path: "edit/:id", Component: PostEditor },
      { path: "mypage", Component: MyPage },
      { path: "calendar", Component: Calendar },
      { path: "settings", Component: Settings },
      { path: "menu-calendar", Component: MenuCalendar },
      { path: "knowledge", Component: KnowledgeArchive },
      { path: "*", Component: NotFound },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
]);