import React, { useState, useEffect } from 'react';
import { allUsers } from "../../services/auth.services";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { showLoader, hideLoader } from '../../redux/loaderRedux/loaderSlice';
export default function usersHook() {
  const isLoading = useSelector(state => state.loader.isLoader);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    dispatch(showLoader())
    const fetchUsers = async () => {
      try {
        const result = await allUsers();
        dispatch(hideLoader())
        // console.log(result);
        setUsers(result.data.users)
      } catch (error) {
        console.log(error)
        navigate("/login")
      } finally {
        dispatch(hideLoader())
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
    isLoading
  }
}
