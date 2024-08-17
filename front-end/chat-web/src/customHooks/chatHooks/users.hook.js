import React, { useState, useEffect } from 'react';
import { allUsers } from "../../services/auth.services";
import { useNavigate } from 'react-router-dom';
export default function usersHook() {
  const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        const fetchUsers = async ()=>{
          try {
            const result = await allUsers();
              setUsers(result.data.users)
          } catch (error) {
            console.log(error)
            navigate("/login")
          }
        }
        fetchUsers();
      },[]);
      const handleUserClick = (id) => {
        navigate(`/chat-home/${id}`);
      }
  return {
    users,
    handleUserClick
  }
}
