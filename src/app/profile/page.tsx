"use client";

import { useState } from "react";
// import { useForm } from "react-hook-form";
// import Image from "next/image";
// import Head from "next/head";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import toast, { Toast } from "react-hot-toast";



// type ProfileFormValues = {
//   fullName: string;
//   email: string;
//   bio: string;
// };

// export default function ProfilePage() {
//   const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormValues>();
//   const [profileImage, setProfileImage] = useState("/default-avatar.png");
//   const router = useRouter();

//   const onSubmit = (data: ProfileFormValues) => {
//     console.log("Profile Updated:", data);
//     alert("Profile saved successfully!");
//   };

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         if (e.target?.result) {
//           setProfileImage(e.target.result as string);
//         }
//       };
//       reader.readAsDataURL(e.target.files[0]);
//     }
//   };


//   const logout  = async ()=>{
//     try {
//         await axios.get('/api/users/logout')
//         toast.success('logout successful')
//         router.push('/login')
//     } catch (error:any) {
//       console.log(error.message);
//       toast.error(error.message)

//     }
//   }
   


//   // const handleLogout = () => {
//   //   // Here you would clear auth tokens/session, etc.
//   //   alert("Logged out successfully!");
//   //   router.push("/");
//   // };

//   return (
//     <>
//       <Head>
//         <title>My Profile</title>
//       </Head>

//       <div className="min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 flex items-center justify-center p-6">
//         <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden p-8 space-y-8">
//           <h1 className="text-3xl font-extrabold text-gray-800 text-center">Me</h1>

//           <div className="flex flex-col items-center space-y-4">
//             <div className="relative w-28 h-28">
//               <Image
//                 src={profileImage}
//                 alt="Profile"
//                 layout="fill"
//                 className="rounded-full object-cover border-4 border-pink-400 shadow-lg"
//               />
//             </div>

//             <label className="text-pink-600 font-medium cursor-pointer hover:underline">
//               <input
//                 type="file"
//                 onChange={handleImageChange}
//                 className="hidden"
//                 accept="image/*"
//               />
//               Change Profile Picture
//             </label>
//           </div>

//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
//               <input
//                 {...register("fullName", { required: "Full name is required" })}
//                 type="text"
//                 className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-pink-400 focus:outline-none"
//                 placeholder="Your Name"
//               />
//               {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
//               <input
//                 {...register("email", {
//                   required: "Email is required",
//                   pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
//                 })}
//                 type="email"
//                 className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-pink-400 focus:outline-none"
//                 placeholder="you@example.com"
//               />
//               {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
//               <textarea
//                 {...register("bio")}
//                 className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-pink-400 focus:outline-none"
//                 rows={3}
//                 placeholder="Write something about yourself..."
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-pink-600 hover:bg-pink-700 text-white text-lg font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg"
//             >
//               Save Changes
//             </button>
//           </form>

//           <button
//             onClick={logout}
//             className="w-full mt-4 bg-gray-700 hover:bg-gray-900 text-white text-lg font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg"
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }



export default function ProfilePage() {

  const router = useRouter();
 const [data,setData] = useState("nothing");
   const logout  = async ()=>{
    try {
        await axios.get('/api/users/logout')
        toast.success('logout successful')
        router.push('/login')
    } catch (error:any) {
      console.log(error.message);
      toast.error(error.message)

    }
  }
   
const getUserDetails = async () =>{
  const res = await axios.get('/api/users/me');
  console.log(res.data)
  setData(res.data.data._id)
}


  return (
    
     <div>  <h1 className="bg-amber-400 text-6xl">My Profile</h1>
      <h2>Data</h2>
      <h3 className="p-3 rounded bg-amber-200">{data ==='nothing'? "Nothing":
       <Link href={`/profile/${data}`}>
        {data}
         </Link>}
       </h3>




       <button
            onClick={logout}
            className="w-full mt-4 bg-gray-700 hover:bg-gray-900 text-white text-lg font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg"
          >
            Logout
          </button>


          <button
            onClick={getUserDetails}
            className="w-full mt-10 bg-yellow-400 hover:bg-gray-900 text-white text-2xl font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg"
          >
            Get User Details
          </button>
     </div>
      
)

}

