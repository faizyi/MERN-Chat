import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
export default function SearchUser() {
  return (
    <Paper
    component="form"
    sx={{backgroundColor: "#202C33",  p: '2px 4px', display: 'flex', alignItems: 'center', margin: 2}}
  >
    <InputBase
      sx={{ ml: 1, flex: 1, color: "white" }}
      placeholder="Search"
    />
    <IconButton type="button" sx={{ p: '10px', color: "grey" }} aria-label="search">
      <SearchIcon />
    </IconButton>
  </Paper>
  )
}
