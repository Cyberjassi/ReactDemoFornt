// Main.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import CourseDetail from "./CourseDetail";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";

import TeacherDetail from "./TeacherDetail";

// users-
import Login from "./user/Login";
import Register from "./user/Register";
import Dashboard from "./user/Dashboard";
import MyCourses from "./user/MyCourses";
import FavoriteCourses from "./user/FavoriteCourses";
import RecommendedCourses from "./user/RecommendedCourses";
import ProfileSettings from "./user/ProfileSettings";
import ChangePassword from "./user/ChangePassword";

// teacher-
import TeacherChangePassword from "./Teacher/TeacherChangePassword";
import TeacherDashboard from "./Teacher/TeacherDashboard";
import TeacherLogin from "./Teacher/TeacherLogin";
import TeacherLogout from "./Teacher/TeacherLogout";
import TeacherProfileSettings from "./Teacher/TeacherProfileSettings";
import TeacherRegister from "./Teacher/TeacherRegister";
import TeacherMyCourses from "./Teacher/TeacherMyCourses";
import AddCourses from "./Teacher/AddCourses";
import AddChapter from "./Teacher/AddChpater";
import MyUsers from "./Teacher/MyUsers";

// List pages
import AllCourses from "./AllCourses";
import PopularTeachers from "./PopularTeachers";
import PopularCourses from "./PopularCourses";
import CategoryCourses from "./CategoryCourses";

export default function Main() {
  return (
    // <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:course_id" element={<CourseDetail />}></Route>
        <Route path="/user-login" element={<Login></Login>}></Route>
        <Route
          path="/teacher-login"
          element={<TeacherLogin></TeacherLogin>}
        ></Route>
        <Route
          path="/teacher-logout"
          element={<TeacherLogout></TeacherLogout>}
        ></Route>
        <Route path="/user-register" element={<Register></Register>}></Route>
        <Route
          path="/teacher-register"
          element={<TeacherRegister></TeacherRegister>}
        ></Route>
        <Route path="/user-dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route
          path="/teacher-dashboard"
          element={<TeacherDashboard></TeacherDashboard>}
        ></Route>
        <Route path="/my-courses" element={<MyCourses></MyCourses>}></Route>
        <Route
          path="/teacher-my-courses"
          element={<TeacherMyCourses></TeacherMyCourses>}
        ></Route>

        <Route
          path="/favoite-courses"
          element={<FavoriteCourses></FavoriteCourses>}
        ></Route>
        <Route
          path="/recommended-courses"
          element={<RecommendedCourses></RecommendedCourses>}
        ></Route>
        <Route
          path="/profile-settings"
          element={<ProfileSettings></ProfileSettings>}
        ></Route>
        <Route
          path="/teacher-profile-settings"
          element={<TeacherProfileSettings></TeacherProfileSettings>}
        ></Route>
        <Route
          path="/change-password"
          element={<ChangePassword></ChangePassword>}
        ></Route>
        <Route
          path="/teacher-change-password"
          element={<TeacherChangePassword></TeacherChangePassword>}
        ></Route>
        <Route
          path="/teacher-my-courses"
          element={<TeacherMyCourses></TeacherMyCourses>}
        ></Route>
        <Route path="/teacher-add-courses" element={<AddCourses></AddCourses>}></Route>
        <Route path="/add-chapter/:course_id" element={<AddChapter></AddChapter>}></Route>
        <Route path="/myusers" element={<MyUsers></MyUsers>}></Route>
        <Route path="/teacher-detail/:teacher_id" element={<TeacherDetail></TeacherDetail>}></Route>
        <Route path="/all-courses" element={<AllCourses></AllCourses>}></Route>
        <Route path="/popular-courses" element ={<PopularCourses></PopularCourses>}></Route>
        <Route path="/popular-teachers" element ={<PopularTeachers></PopularTeachers>}></Route>
        <Route path="/category/:category_slug" element ={<CategoryCourses></CategoryCourses>}></Route>
      </Routes>
      <Footer />
    </div>
    // </BrowserRouter>
  );
}
