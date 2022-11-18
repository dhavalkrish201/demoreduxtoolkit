import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "./userSlice";

const EditUser = () => {
  const params = useParams();
  console.log(params.id);
  const users = useSelector((store) => store.users);
  const navigate = useNavigate();

  const existingUser = users.filter((user) => user.id === params.id);
  const { name, email } = existingUser[0];

  const [values, setValues] = useState({
    name,
    email,
  });

  const dispatch = useDispatch();

  const handleEditUser = () => {
    setValues({ name: "", email: "" });
    dispatch(
      editUser({
        id: params.id,
        name: values.name,
        email: values.email,
      })
    );
    navigate("/");
  };

  return (
    <div>
      <h1>Edit User</h1>
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
      <Button variant="contained" onClick={handleEditUser}>
        Update
      </Button>
    </div>
  );
};

export default EditUser;
