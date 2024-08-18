const whiteList = ["http://localhost:5173", "https://mern-chat-gamma.vercel.app"]
const corsOption = {
    origin: function(origin, callback){
        if(whiteList.indexOf(origin) !== -1 || !origin) callback(null, true)
        else{
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
};
export {
    corsOption, 
    whiteList
}