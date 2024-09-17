import { IconButton } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { uploadImage } from '../../services/users.services';
import { convertToBase64 } from '../../utils/bufferToBase64';
import { useDispatch } from 'react-redux';
import { uploadImg } from '../../redux/profile/profileSlice';
export default function UploadPic() {
  const dispatch = useDispatch();
    const sender = JSON.parse(localStorage.getItem("userData")) || null;
    const handleAvatarChange = async (event)=>{
        const file = event.target.files[0];
        if (file && sender) {
            try {
                const base64Image = await convertToBase64(file);
                dispatch(uploadImg(base64Image));
                const formData = {id: sender.userId,imageBase64: base64Image};
                const response = await uploadImage(formData);
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    }
  return (
    <label htmlFor="upload-avatar" >
        <input type="file" accept='.jpeg, .png, .jpg' id='upload-avatar' style={{display: "none"}}
        onChange={handleAvatarChange}
        />
        <IconButton 
            color="primary" 
            aria-label="upload picture" 
            component="span"
            sx={{
              position: "absolute", 
              bottom: 180, 
              right: "calc(50% - -30px)", 
              backgroundColor: "#2A2F32",
              '&:hover': { backgroundColor: "#333" }
            }}
          >
            <PhotoCamera />
          </IconButton>
    </label>
  )
}
