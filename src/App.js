import React, { useState } from "react";
import "./App.scss";
import membersData from "./members.js";

function App() {
  const [members, setMembers] = useState(membersData);
  const addMember = (memberData) => {
    console.log("add");
    setMembers([...members, memberData]);
  };
  const deleteMember = (memberId) => {
    console.log("delete");
    let tempMembers = members;
  };
  const editMember = (memberId) => {
    console.log("edit");
  };
  return (
    <div className="App">
      <header>
        <h1>Team Members</h1>
      </header>
      <div className="addMember">
        <button className="addMemberButton">add</button>
      </div>
      <div className="members">
        {members.length > 0 ? (
          members.map((m) => (
            <div className="member" key={m.email}>
              <div className="memberName">
                <h2>{m.name}</h2>
              </div>
              <div className="memberEmail">
                <p>email: {m.email}</p>
              </div>
              <div className="memberRole">
                <p>role: {m.role}</p>
              </div>
              <div className="changeMember">
                <button className="editMemberButton">edit</button>
                <button className="deleteMemberButton">delete</button>
              </div>
            </div>
          ))
        ) : (
          <p>no members to display</p>
        )}
      </div>
    </div>
  );
}

export default App;
