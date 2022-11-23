import { Navigate, useRoutes } from "react-router-dom";
import Register from "./pages/Register";
import PageNotFound from './pages/PageNotFound'
import Layout from "./Layouts/Layout";
import AllQuestions from "./pages/Qns";
import AskQn from "./pages/AskQn";
import YourQns from "./pages/YourQns";
import AdminLayout from "./Layouts/AdminLayout";
import AnswerQn from "./pages/Admin/AnswerQn"
import Unanswered from "./pages/Admin/Unanswered"
import { BrowserRouter as Router } from "react-router-dom";

export default function Routeer() {
  <Router></Router>;
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <>
          <Layout />
        </>
      ),
      children: [
        { element: <Navigate to="/all" />, index: true },
        { path: "all", element: <AllQuestions /> },
        { path: "register", element: <Register /> },
        { path: "askQestion", element: <AskQn /> },
        { path: "YourQuestions", element: <YourQns /> },
      ],
    },
    {
      path: "/admnDashboard",
      element: <AdminLayout />,
      children: [
        { element: <Navigate to="/admnDashboard/allqs" />, index: true },
        { path: "allqs", element: <AllQuestions /> },
        { path: "unanswered", element: <Unanswered /> },
        { path: "answerqn", element: <AnswerQn /> },
    ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
      element: <PageNotFound /> 
    },
  ]);

  return routes;
}
