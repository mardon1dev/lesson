// import { useEffect } from "react";
import { useState } from "react"
import styles from "./lesson51.module.scss";


const Lesson51 = () => {

  const url = `https://jsonplaceholder.typicode.com/users`;

  const getData = async ()=>{
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  }


  const [user, setUser] = useState(()=>{
    const getUser = localStorage.getItem("users");
    return getUser? JSON.parse(getUser): [];
  })

  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [userName, setUserName] = useState("");
  let [age, setAge]= useState("");
  let [salary, setSalary] = useState("");

  const handleSetUser = (e)=>{
    e.preventDefault();
    firstName = document.querySelector("form").childNodes[0].value
    lastName = document.querySelector("form").childNodes[1].value
    userName = document.querySelector("form").childNodes[2].value
    age = document.querySelector("form").childNodes[3].value
    salary = document.querySelector("form").childNodes[4].value

    if (id) {
      document.querySelector(".col").childNodes[0].textContent = document.querySelector("form").childNodes[0].value
      document.querySelector(".col").childNodes[1].textContent = document.querySelector("form").childNodes[1].value
      document.querySelector(".col").childNodes[2].textContent = document.querySelector("form").childNodes[2].value
      document.querySelector(".col").childNodes[3].textContent = document.querySelector("form").childNodes[3].value
      document.querySelector(".col").childNodes[4].textContent = document.querySelector("form").childNodes[4].value
    }
    else{
      if(!firstName.trim() && !lastName.trim() && !userName.trim() && !age.trim() && !salary.trim()) return;
      setUser([...user, {
        id: Date.now(),
        fname: firstName,
        lname: lastName,
        uname: userName,
        age: age,
        salary: salary
      },]);
    }
    



    
    document.querySelector("form").childNodes[0].value = ""
    document.querySelector("form").childNodes[1].value = ""
    document.querySelector("form").childNodes[2].value = ""
    document.querySelector("form").childNodes[3].value = ""
    document.querySelector("form").childNodes[4].value = ""
    setFirstName("");
    setLastName("");
    setUserName("");
    setAge("");
    setSalary("");

  }
  localStorage.setItem("users", JSON.stringify(user));

  const handleClear = ()=>{
    localStorage.clear("users");
    document.querySelector(".allusers").remove();
    window.location.reload();
  }

  const handleDeleteUser = (id)=>{
    const deleteUser = user.filter((user1)=> user1.id !== id);
    setUser(deleteUser);
  }

  const [button, setButton] = useState(false);
  const pressButton = ()=>{
    setButton(!button)
  }


  const handleEditUser = (id)=>{
    document.querySelector("form").childNodes[0].value = document.querySelector(".col").childNodes[0].textContent;
    document.querySelector("form").childNodes[1].value = document.querySelector(".col").childNodes[1].textContent;
    document.querySelector("form").childNodes[2].value = document.querySelector(".col").childNodes[2].textContent;
    document.querySelector("form").childNodes[3].value = document.querySelector(".col").childNodes[3].textContent;
    document.querySelector("form").childNodes[4].value = document.querySelector(".col").childNodes[4].textContent; 
    const editFirstName = document.querySelector("form").childNodes[0].value;
    const editLastName = document.querySelector("form").childNodes[1].value;
    const editUserName = document.querySelector("form").childNodes[2].value;
    const editAge = document.querySelector("form").childNodes[3].value;
    const editSalary = document.querySelector("form").childNodes[4].value;

    if (user.id === id) {
      
    }
    console.log(editFirstName, editLastName, editUserName, editAge, editSalary);
    // console.log(buttonedit);
    let data = JSON.parse(localStorage.getItem("users"));
    console.log(data);
    const editdetName =  data.map(person=>{
      if (person.id === id) {
        return{
          ...person, 
          fname:  editFirstName,
          lname: editLastName,
          uname: editUserName,
          age: editAge,
          salary: editSalary  
        }
      }
      console.log(person);
      return person;
    })
    console.log(editdetName);
    localStorage.setItem("users", JSON.stringify(editdetName));

  }

  return (
    <div className="container">
      <button className="btn btn-primary btn1 mt-5 mb-5" onClick={pressButton}>Add user</button>
      <form onSubmit={handleSetUser} className={button? `d-flex`: `d-none`}> 
        <input type="text"  onChange={(e)=>setFirstName(e.target.value)}  placeholder="Firstname"/>
        <input type="text"  onChange={(e)=>setLastName(e.target.value)} />
        <input type="text"  onChange={(e)=>setUserName(e.target.value)} />
        <input type="number" onChange={(e)=>{setAge(e.target.value)}}/>
        <input type="number" onChange={(e) =>{setSalary(e.target.value)}} />
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
        <div className="allusers">
        {
              user.map((user)=>(
                <div key={user.id} className="d-flex col">
                  <h1>{user.fname}</h1>
                  <h2>{user.lname}</h2>
                  <h3>{user.uname}</h3>
                  <h3>{user.age}</h3>
                  <h4>{user.salary}</h4>
                  <button onClick={()=>{handleDeleteUser(user.id)}}>Delete</button>
                  <button onClick={()=>{handleEditUser(user.id)}}>Edit</button> 
                </div>
              ))
            }
        </div>
            <button onClick={handleClear} className="btn btn-danger mt-5 mb-5">Clear all</button>
    </div>
  )
}

export default Lesson51;