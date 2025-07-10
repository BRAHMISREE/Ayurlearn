import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";

export default function EditProfile() {
    const [, setLocation] = useLocation();
    const fileInputRef = useRef();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        setName(localStorage.getItem("userName") || "");
        setEmail(localStorage.getItem("userEmail") || "");
        setImage(localStorage.getItem("userImage") || "https://i.pravatar.cc/100?img=5");
    }, []);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result); // base64 image preview
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userImage", image);
        alert("Profile updated!");
        setLocation("/dashboard");
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-green-50 px-4 py-10">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Edit Profile</h2>

                {/* Profile Photo Section */}
                <div className="flex items-center gap-4 mb-6">
                    <img
                        src={image}
                        alt="Profile Preview"
                        className="h-20 w-20 rounded-full object-cover border border-green-500"
                    />
                    <div>
                        <button
                            type="button"
                            onClick={() => fileInputRef.current.click()}
                            className="text-green-700 underline text-sm hover:text-green-900"
                        >
                            Change Photo
                        </button>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            ref={fileInputRef}
                            className="hidden"
                        />
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </section>
    );
} in thsi show which plna uisng free or premium likthat aslo 