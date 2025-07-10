import { useState } from "react";
import coursesData from "../data/coursesData";

export default function AdminPanel() {
    const [tab, setTab] = useState("courses");
    const [courses, setCourses] = useState(coursesData);
    const [showAddCourse, setShowAddCourse] = useState(false);
    const [newCourse, setNewCourse] = useState({
        title: "",
        image: "",
        description: "",
        instructor: "",
        duration: "",
        rating: "",
        students: "",
    });

    const [users, setUsers] = useState([
        { id: 1, name: "Arjun", email: "arjun@mail.com", role: "student" },
        { id: 2, name: "Dr. Kavya", email: "kavya@ayurveda.com", role: "teacher" },
    ]);
    const [newUser, setNewUser] = useState({ name: "", email: "", role: "student" });

    const deleteCourse = (id) => {
        setCourses((prev) => prev.filter((c) => c.id !== id));
    };

    const addNewCourse = () => {
        if (newCourse.title && newCourse.image && newCourse.description && newCourse.instructor && newCourse.duration && newCourse.rating && newCourse.students) {
            setCourses((prev) => [...prev, { ...newCourse, id: Date.now() }]);
            setNewCourse({ title: "", image: "", description: "", instructor: "", duration: "", rating: "", students: "" });
            setShowAddCourse(false);
        } else {
            alert("Please fill all course fields");
        }
    };

    const handleAddUser = () => {
        if (newUser.name && newUser.email && newUser.role) {
            setUsers((prev) => [...prev, { ...newUser, id: Date.now() }]);
            setNewUser({ name: "", email: "", role: "student" });
        } else {
            alert("Please fill all user fields");
        }
    };

    const handleDeleteUser = (id) => {
        setUsers((prev) => prev.filter((u) => u.id !== id));
    };

    return (
        <section className="min-h-screen bg-green-50 p-6">
            <header className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-green-800">Admin Panel</h1>
                <div className="flex gap-4">
                    <button
                        onClick={() => setTab("courses")}
                        className={`px-4 py-2 rounded ${tab === "courses" ? "bg-green-700 text-white" : "bg-white text-green-700 border"}`}
                    >
                        Courses
                    </button>
                    <button
                        onClick={() => setTab("users")}
                        className={`px-4 py-2 rounded ${tab === "users" ? "bg-green-700 text-white" : "bg-white text-green-700 border"}`}
                    >
                        Users
                    </button>
                </div>
            </header>

            {tab === "courses" && (
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">All Courses</h2>
                        <button
                            onClick={() => setShowAddCourse(!showAddCourse)}
                            className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
                        >
                            {showAddCourse ? "Close" : "Add Course"}
                        </button>
                    </div>

                    {showAddCourse && (
                        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <input className="p-2 border rounded" placeholder="Title" value={newCourse.title} onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })} />
                            <input className="p-2 border rounded" placeholder="Image URL" value={newCourse.image} onChange={(e) => setNewCourse({ ...newCourse, image: e.target.value })} />
                            <input className="p-2 border rounded" placeholder="Description" value={newCourse.description} onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })} />
                            <input className="p-2 border rounded" placeholder="Instructor" value={newCourse.instructor} onChange={(e) => setNewCourse({ ...newCourse, instructor: e.target.value })} />
                            <input className="p-2 border rounded" placeholder="Duration" value={newCourse.duration} onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })} />
                            <input className="p-2 border rounded" placeholder="Rating" value={newCourse.rating} onChange={(e) => setNewCourse({ ...newCourse, rating: e.target.value })} />
                            <input className="p-2 border rounded" placeholder="Students Enrolled" value={newCourse.students} onChange={(e) => setNewCourse({ ...newCourse, students: e.target.value })} />
                            <button onClick={addNewCourse} className="col-span-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                Save Course
                            </button>
                        </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courses.map((course) => (
                            <div key={course.id} className="bg-white rounded-xl shadow p-4">
                                <img src={course.image} alt={course.title} className="h-40 w-full object-cover rounded" />
                                <h3 className="text-lg font-bold mt-2 text-green-700">{course.title}</h3>
                                <p className="text-sm text-gray-600">Instructor: {course.instructor}</p>
                                <p className="text-sm text-gray-600">Duration: {course.duration}</p>
                                <p className="text-sm text-gray-500">Rating: {course.rating} ⭐</p>
                                <p className="text-sm text-gray-500">Students: {course.students}</p>
                                <div className="mt-4 flex justify-between">
                                    <button className="text-sm text-blue-600 hover:underline">Edit</button>
                                    <button onClick={() => deleteCourse(course.id)} className="text-sm text-red-600 hover:underline">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {tab === "users" && (
                <div>
                    <h2 className="text-xl font-semibold mb-4">All Users</h2>
                    <div className="mb-4">
                        <input type="text" placeholder="Name" className="px-3 py-2 border rounded mr-2" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
                        <input type="email" placeholder="Email" className="px-3 py-2 border rounded mr-2" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                        <select className="px-3 py-2 border rounded mr-2" value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}>
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                            <option value="admin">Admin</option>
                        </select>
                        <button onClick={handleAddUser} className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
                            Add User
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {users.map((user) => (
                            <div key={user.id} className="bg-white p-4 rounded shadow relative">
                                <h3 className="text-lg font-bold text-green-700">{user.name}</h3>
                                <p className="text-sm text-gray-600">{user.email}</p>
                                <p className="text-sm text-gray-500">Role: {user.role}</p>
                                <button onClick={() => handleDeleteUser(user.id)} className="absolute top-2 right-2 text-red-600 hover:underline text-sm">Delete</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
