import {
  Counter,
  FetchData,
  Register,
  RecoverPassword,
  Login,
  CourseList,
  Course,
  AddCourse,
} from "./components";

const AppRoutes = [
  {
    index: true,
    element: <Login />,
  },
  {
    path: "/course-list",
    element: <CourseList />,
  },
  {
    path: "/recover-password",
    element: <RecoverPassword />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/course/:id",
    element: <Course />,
  },
  {
    path: "/add-course",
    element: <AddCourse />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/fetch-data",
    element: <FetchData />,
  },
];

export default AppRoutes;
