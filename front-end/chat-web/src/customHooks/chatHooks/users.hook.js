import React, { useState, useEffect } from 'react';
import { allUsers } from "../../services/auth.services";
import { useNavigate } from 'react-router-dom';
export default function usersHook() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await allUsers();
        console.log(result);
        
        setUsers(result.data.users)
        setLoading(false);
      } catch (error) {
        console.log(error)
        // navigate("/login")
      }
    }
    fetchUsers();
  }, [navigate]);
  const handleUserClick = (id) => {
    navigate(`/chat-home/${id}`);
  }
  return {
    users,
    handleUserClick,
  }
}
