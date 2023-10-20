import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ChatBot from "../pages/ChatBot/ChatBot";
import StudentInfo from "../pages/StudentInfo/StudentInfo";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "/chatbot",
        element: <ChatBot></ChatBot>,
      },
      {
        path: "studentinfo",
        element: <StudentInfo></StudentInfo>,
      },
    ],
  },
]);

export default router;
