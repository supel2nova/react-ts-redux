import { useEffect, useState } from "react";

type Users = {
  fullname: string;
};

const Appfooter = () => {
  const [users, setUsers] = useState<Users | null>(null);
  const [company, setCompany] = useState("Generation");

  const isShow = false;

  const showMsg = () => {
    setCompany("ODDS");
    setUsers({ fullname: "Jonh Doe" });
  };

useEffect(()=>{
    console.log("test useEffect")
})
useEffect(()=>{
    console.log("test useEffect 2")
},[])



  return (
    <div>
      <button onMouseOver={showMsg}>Click</button>
      {users && <p>User : {users.fullname}</p>}
      <p>{company}</p>
    </div>
  );
};

export default Appfooter;
