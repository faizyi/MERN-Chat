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
  const cachekey = "/api/users/all-users"
  useEffect(() => {
    dispatch(showLoader())
    const fetchUsers = async () => {
      try {
        const cache = await caches.open("users-cache");
        const cacheResponse = await cache.match(cachekey);
        if(cacheResponse){
          const cacheData = await cacheResponse.json();
          setUsers(cacheData)
        }else{
          const result = await allUsers();
          if(result.status === 201){
            dispatch(hideLoader())
            const data = result.data.users;
            await cache.put(cachekey, new Response(JSON.stringify(data)))
            setUsers(data)
          }
        }
        // console.log(result);
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
