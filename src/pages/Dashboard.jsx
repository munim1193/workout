import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.js";
import "./dashboard.css"

const User = (user) => {
  return (
    <div>
      <div className="dashboard--card_header">
        <h2>{user.username}</h2>
      </div>
      <div style={{padding: "1rem"}} className="dashboard--card_footer">
        <p>Email: {user.email}</p>
        <p>Name: {user.fname} {user.name}</p>
        <p>Telephone: {user.telephone}</p>
        <p>Gender: {user.gender}</p>
        <button onClick={user.onClick}>Delete</button>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  if (!token || role !== "admin") window.location = "/home";
  const [users, setUsers] = useState(null);

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:4000/api/admin/user/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const uUsers = users.filter(itm => itm._id !== id);
    setUsers(uUsers);
  };


  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get("http://localhost:4000/api/admin/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data);
    };
    getUsers();
  }, [token]);

  const renderUsers = () => {
    if (!users) return <h1>Loading...</h1>;
    if (!users.length) return <h1>No user was found</h1>

    const markup = [];
    for (const user of users) {
      markup.push(<User {...user} key={user._id} onClick={() => deleteUser(user._id)} />);
    }

    return markup;
  };

  return (
    <div>
      <Navbar />
      <div className="dashboard">{renderUsers()}</div>
    </div>
  );
};

export default Dashboard;
