const express = require("express");
const bodyParser=require("body-parser")
const request=require("request")
const errorMiddleware = require("./middleware/error");



const app = express();
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:false}))

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,__dirname+'/Images')
    },
    filename:(req,file,cb)=>{
        console.log(file)
        cb(null,path.extname(file.originalname))
    }
})

const upload = multer({storage:storage});


// import { Configuration, OpenAIApi } from "openai";


app.use(express.json());
// app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
// app.use(morgan("common"));
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());

/* OPEN_AI CONFIGURATION */

// const configuration = new Configuration({
//   apiKey: process.env.OPEN_API_KEY,
// });
// export const openai = new OpenAIApi(configuration);

// ROUTE imports
const user = require("./routes/userRoutes");
const model = require("./model");

app.use("/api/v1", user);
app.use("/model",model)

//middleware for error
app.use(errorMiddleware);






module.exports = app;
