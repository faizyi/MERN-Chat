import { List, ListItem, ListItemText, Typography, Avatar, Box } from '@mui/material';
import usersHook from '../../customHooks/chatHooks/users.hook';
import { useDispatch } from 'react-redux';
import { setReceiverData } from '../../redux/userRedux/userSlice';
import Loader from '../loader/loader';

export default function GetUsers({ onUserClick, filteredUsers }) {
    const dispatch = useDispatch();
    const { handleUserClick, isLoading } = usersHook();

    const handleClick = (id, data) => {
        const receiver = { fullName: data.fullName, image: data.image};
        dispatch(setReceiverData(receiver));
        handleUserClick(id);
        onUserClick(id);
    };

    return (
        <List sx={{ flexGrow: 1,}}>
            {isLoading ? (
                // Loader container with flexbox centering
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '40vh', // Full height of the sidebar
                    }}
                >
                    <Loader />
                </Box>
            ) : filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                    <ListItem
                        key={user._id}
                        sx={{
                            p: 1.5,
                            borderBottom: '1px solid #333',
                            '&:hover': {
                                backgroundColor: '#2A2F32',
                            },
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                        }}
                        onClick={() => handleClick(user._id, user)}
                    >
                        <Avatar src={user.image} sx={{ width: 56, height: 56 }} />
                        <ListItemText
                            primary={user.fullName}
                            secondary={user.email}
                            primaryTypographyProps={{
                                sx: {
                                    fontWeight: 'bold',
                                    textTransform: 'capitalize',
                                    color: '#E9EDEF',
                                },
                            }}
                            secondaryTypographyProps={{
                                sx: { color: '#8696A0' },
                            }}
                        />
                    </ListItem>
                ))
            ) : (
                <Typography sx={{ textAlign: 'center', color: 'gray' }}>
                    No users found
                </Typography>
            )}
        </List>
    );
}
