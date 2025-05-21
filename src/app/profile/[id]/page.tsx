
export default function UserProfile({params}:any){

    return (
       <div className="flex flex-col justify-center min-h-screen py-2 items-center">
        <h1>Profile</h1>
        <hr/>

        <p className="text-2xl  bg-green-500"> Profile page</p>
        <span className="p-2 ml-2 rounded-2xl bg-amber-400 text-blue-800">
            {params.id}
        </span>
       </div>
    )
}
