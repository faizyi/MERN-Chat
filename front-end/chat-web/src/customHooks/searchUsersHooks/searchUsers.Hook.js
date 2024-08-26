import React, { useEffect, useState } from 'react'
import usersHook from '../chatHooks/users.hook';
export default function searchUsersHook() {
    const { users } = usersHook();
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [query, setQuery] = useState('');
    useEffect(() => {
        setFilteredUsers(users);
    }, [users]);
    const handleSearch = (event) => {
        const searchValue = event.target.value.toLowerCase();
        setQuery(searchValue);
        if (searchValue.length > 0) {
            const searchData = users ? users.filter((user) => user.fullName.toLowerCase().includes(searchValue.toLowerCase()))
                : [];
            setFilteredUsers(searchData);

        } else {
            setFilteredUsers(users);
        }
    };


    return {
        filteredUsers,
        query,
        handleSearch,
    };
}
