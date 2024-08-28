const whiteList = ["http://localhost:5173", "http://localhost:5174" ];
const corsOption = {
    origin: function (origin, callback) {
        if (whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
};
export { whiteList, corsOption}