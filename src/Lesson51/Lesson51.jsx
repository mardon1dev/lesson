// // import { useEffect } from "react";
// import { useState } from "react"
// // import styles from "./lesson51.module.scss";


// const Lesson51 = () => {

//   const [user, setUser] = useState(()=>{
//     const getUser = localStorage.getItem("users");
//     return getUser? JSON.parse(getUser): [];
//   })

//   let [firstName, setFirstName] = useState("");
//   let [lastName, setLastName] = useState("");
//   let [userName, setUserName] = useState("");
//   let [age, setAge]= useState("");
//   let [salary, setSalary] = useState("");

//   const [editFirstName, setEditFirstName] = useState();
//   const [editLastName, setEditLastName] = useState();
//   const [editUserName, setEditUserName] = useState();
//   const [editAge, setEditAge] = useState();
//   const [editSalary, setEditSalary] = useState();


//   const handleSetUser = (e)=>{
//     e.preventDefault();
//       if(!firstName.trim() && !lastName.trim() && !userName.trim() && !age.trim() && !salary.trim()) return;

//       if (editFirstName !== null && editLastName !== null && editUserName !== null && editAge !== null && editSalary !== null ) {
//         const updateUser = user.map((user)=>{
//           if (user.id === id) {
//             return {...user, 
//               fname: firstName,
//               lname: lastName,
//               uname: userName,
//               age: age,
//               salary: salary
//             }
//           }
//           else{
//             return user;
//           }
//         })
//         setUser(updateUser);
//         setEditFirstName(editFirstName)
//         setEditLastName(editLastName)
//         setEditUserName(editUserName)
//         setEditAge(editAge)
//         setEditSalary(editSalary)

//         setEditFirstName("")
//         setEditLastName("")
//         setEditUserName("")
//         setEditAge("")
//         setEditSalary("")


//       }
//       else{
//         setUser([...user, {
//           id: Date.now(),
//           fname: firstName,
//           lname: lastName,
//           uname: userName,
//           age: age,
//           salary: salary
//         },]);
//       setFirstName("");
//       setLastName("");
//       setUserName("");
//       setAge("");
//       setSalary("");
//       }

//   }
//   localStorage.setItem("users", JSON.stringify(user));

//   const handleClear = ()=>{
//     localStorage.clear("users");
//     document.querySelector(".allusers").remove();
//     window.location.reload();
//   }

//   const handleDeleteUser = (id)=>{
//     const deleteUser = user.filter((user1)=> user1.id !== id);
//     setUser(deleteUser);
//   }

//   const [button, setButton] = useState(false);
//   const pressButton = ()=>{
//     setButton(!button)
//   }


//   const handleEditUser = (id)=>{
//     const  userEdit = user.find((user)=>user.id === id);
//     setEditFirstName(id);
//     setFirstName(userEdit.text)
//   }

//   return (
//     <div className="container">
//       <button className="btn btn-primary btn1 mt-5 mb-5" onClick={pressButton}>Add user</button>
//       <form onSubmit={handleSetUser} className={button? `d-flex`: `d-none`}> 
//         <input type="text" value={firstName}  onChange={(e)=>setFirstName(e.target.value)}  placeholder="Firstname"/>
//         <input type="text" value={lastName}  onChange={(e)=>setLastName(e.target.value)} />
//         <input type="text" value={userName}  onChange={(e)=>setUserName(e.target.value)} />
//         <input type="number" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
//         <input type="number" value={salary} onChange={(e) =>{setSalary(e.target.value)}} />
//         <button type="submit" className="btn btn-primary">Add</button>
//       </form>
//         <div className="allusers">
//         {
//               user.map((user)=>(
//                 <div key={user.id} className="d-flex col">
//                   <h1>{user.fname}</h1>
//                   <h2>{user.lname}</h2>
//                   <h3>{user.uname}</h3>
//                   <h3>{user.age}</h3>
//                   <h4>{user.salary}</h4>
//                   <button onClick={()=>{handleDeleteUser(user.id)}}>Delete</button>
//                   <button onClick={()=>{handleEditUser(user.id)}}>Edit</button> 
//                 </div>
//               ))
//             }
//         </div>
//             <button onClick={handleClear} className="btn btn-danger mt-5 mb-5">Clear all</button>
//     </div>
//   )
// }

// export default Lesson51;