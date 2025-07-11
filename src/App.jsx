// src/App.jsx
import { Route } from "wouter";

// Pages
import LandingPage from "./pages/LandingPage.jsx";
import Courses from "./pages/Courses.jsx";
import CourseDetails from "./pages/CourseDetails.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import EnrolledCourses from "./pages/EnrolledCourses.jsx";
import EditProfile from "./pages/EditProfile.jsx";
import CourseLearnView from "./pages/CourseLearnView.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import WebinarForm from "./pages/WebinarForm.jsx";
import WebinarPayment from "./pages/WebinarPayment.jsx";
import WebinarConfirmation from "./pages/WebinarConfirmation.jsx";

export default function App() {
  return (
    <>
        {/* Public Routes */}
        <Route path="/" component={LandingPage} />
        <Route path="/courses" component={Courses} />
        <Route path="/courses/:id" component={CourseDetails} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        {/*  Webinar*/}
        <Route path="/webinar" component={WebinarForm} />
        <Route path="/webinar/payment" component={WebinarPayment} />
        <Route path="/webinar/confirmation" component={WebinarConfirmation} />

        {/* User Dashboard & Learning */}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/my-courses" component={EnrolledCourses} />
        <Route path="/edit-profile" component={EditProfile} />
        <Route path="/course/:id/learn" component={CourseLearnView} />

        {/* Admin Panel */}
        <Route path="/admin" component={AdminPanel} />
    </>
  );
}
