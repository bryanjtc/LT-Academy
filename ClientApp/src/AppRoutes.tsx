import {
  Register,
  RecoverPassword,
  Login,
  CourseList,
  Course,
  AddCourse,
  StudentList,
  Grades,
  AddQuestion,
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
    path: "/course/:id/student-list",
    element: <StudentList />,
  },
  {
    path: "/course/:id/grades",
    element: <Grades />,
  },
  {
    path: "/course/:id/add-question",
    element: <AddQuestion />,
  },
];

export default AppRoutes;
