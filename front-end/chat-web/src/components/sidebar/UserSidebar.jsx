import SearchUser from './SearchUser';
import AllUsers from './allUsers';
import searchUsersHook from '../../customHooks/searchUsersHooks/searchUsers.Hook';
export default function UserSidebar({ onUserClick }) {
    const { query, handleSearch, filteredUsers } = searchUsersHook();
    return (
        <>
            <SearchUser query={query} handleSearch={handleSearch} />
            <AllUsers filteredUsers={filteredUsers} onUserClick={onUserClick} />
        </>
    );
}
