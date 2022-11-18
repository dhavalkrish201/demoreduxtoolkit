import UserList from "./features/users/UserList";
import { Routes, Route } from "react-router-dom";
import AddUser from "./features/users/AddUser";
import EditUser from "./features/users/EditUser";

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-2xl text-gray-500">
        CRUD With Redux Toolkit
      </h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/edituser/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
