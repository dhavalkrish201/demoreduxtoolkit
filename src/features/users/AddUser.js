import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "./userSlice";
import { v4 as uuidv4 } from "uuid";

const AddUser = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();
  const handleAddUser = () => {
    setValues({ name: "", email: "" });
    dispatch(
      addUser({
        id: uuidv4(),
        name: values.name,
        email: values.email,
      })
    );
    navigate("/");
  };

  return (
    <div>
      <h1>Add User</h1>
      <br></br>
      <TextField
        id="name"
        name="name"
        label="Enter Name"
        variant="outlined"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
      />
      <br></br>
      <br></br>
      <TextField
        id="email"
        name="email"
        label="Enter Email"
        variant="outlined"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
      />
      <br></br>
      <br></br>
      <Button variant="contained" onClick={handleAddUser}>
        Submit
      </Button>
    </div>
  );
};

export default AddUser;
