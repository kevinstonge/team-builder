import React, { useState } from "react";
import "./App.scss";
import membersData from "./members.js";
import Form from "./Form";

function App() {
  const [members, setMembers] = useState(membersData);
  const [form, setForm] = useState({ visible: false, method: "add" });
  const addMember = (memberData) => {
    console.log("add");
    setMembers([...members, memberData]);
  };
  const deleteMember = (memberId) => {
    console.log("delete");
    setMembers(members.filter((m) => m.id !== memberId));
  };
  const editMember = (memberId) => {
    console.log("edit");
  };
  const formControl = (options) => {
    setForm({ visible: options.visible, method: options.method });
  };
  return (
    <div className="App">
      <header>
        <h1>Team Members</h1>
      </header>
      <Form
        options={{ visible: form.visible, method: form.method }}
        formControl={formControl}
      />
      <div className="addMember">
        <button
          className="addMemberButton"
          onClick={() => formControl({ visible: true, method: "add" })}
        >
          add
        </button>
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
                <button
                  className="deleteMemberButton"
                  onClick={() => deleteMember(m.id)}
                >
                  delete
                </button>
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
