const express=require("express")
const bodyParser=require("body-parser")
const request=require("request")
const tfjs=require("@tensorflow/tfjs-node")
const multer=require("multer")
const path=require('path')
const fs = require('fs');
const cors = require("cors");
const morgan = require("morgan");
const helmet  = require("helmet");
const { Configuration, OpenAIApi } = require("openai");
const errorMiddleware = require("./middleware/error");
const dotenv = require("dotenv");
dotenv.config({ path: "config/config.env" });

const app=express()
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
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


app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:false}))


app.listen(3000,function(){
    console.log("Server is up and running on port 3000")  
}) 

const diseases = require("./routes/diseases")

app.use("/disease", diseases);





app.post("/diabetes",function(req,res){
    console.log("Test`")
    var list=[[parseInt(req.body.gender),
            req.body.age,
            req.body.hypertension,
            parseInt(req.body.heart_disease),
            parseInt(req.body.smoking_history),
            req.body.bmi,
            req.body.HbA1c_level,
            req.body.blood_glucose_level]]
    console.log(list)
    const predictions=async()=>{
        const pred=await loadDiabetes(list)
        console.log("pred:"+pred)
        res.send({
            predict:pred
        })
    }
    predictions()
})

async function loadDiabetes(list){
    classes=["No","Yes"]
    const model=await tfjs.loadLayersModel("file://"+__dirname+"/MLmodels/tfjDiabetes/model.json")
    console.log()
    list=tfjs.tensor(list)
    console.log(list.shape)
    // list=tfjs.expandDims(list)
    // console.log(list.shape)
    const y_pred= model.predict(list)
    console.log(tfjs.round(y_pred.dataSync()[0]))
    const prediction=tfjs.round(y_pred)
    // const accuracy=y_pred.dataSync()[prediction.dataSync()]
    return classes[prediction.dataSync()[0]]
}











app.post('/tumor',upload.single('image'),(req, res) => {
    imagePath=__dirname+"/Images/.jpg"
    readImage(imagePath).then((imageTensor) => {
        const predictions=async()=>{
            const pred=await loadTumor(imageTensor)
            console.log("pred:"+pred)
            res.send({
                prediction:pred
            })
        }
        predictions()
        console.log("TESTS:"+pred)
        res.send("Hello")
    }).catch((error) => {
        console.error('Error reading image:', error);
    });   
    
});       

async function loadTumor(image){
    console.log("Test")
    classes=["glioma","meningioma","notumor","pituitary"]
    var path="file://"+__dirname+"/MLmodels/tfjTumor/model.json"
    const model=await tfjs.loadLayersModel(path)
    console.log("Test")
    const y_pred=tfjs.variable(model.predict(image))
    console.log("YPRED="+y_pred)
    const prediction=tfjs.argMax(y_pred,axis=1)
    const accuracy=y_pred.dataSync()[prediction.dataSync()]
    return classes[prediction.dataSync()[0]]
}









app.post('/eye',upload.single('image'),(req, res) => {
    imagePath=__dirname+"/Images/.jpg"
    readImage(imagePath).then((imageTensor) => {
        const predictions=async()=>{
            const pred=await loadEye(imageTensor)
            console.log("pred:"+pred)
            res.send({
                prediction:pred
            })
        }
        predictions()
        console.log("TESTS:"+pred)
        res.send("Hello")
    }).catch((error) => {
        console.error('Error reading image:', error);
    });   
    
});       

async function loadEye(image){
    console.log("Test")
    classes=["cataract","diabetic_retinopathy","glaucoma","normal"]
    var path="file://"+__dirname+"/MLmodels/tfjEye/model.json"
    const model=await tfjs.loadLayersModel(path)
    console.log("Test")
    const y_pred=tfjs.variable(model.predict(image))
    console.log("YPRED="+y_pred)
    const prediction=tfjs.argMax(y_pred,axis=1)
    const accuracy=y_pred.dataSync()[prediction.dataSync()]
    return classes[prediction.dataSync()[0]]
}





app.post('/alzhimer',upload.single('image'),(req, res) => {
    imagePath=__dirname+"/Images/.jpg"
    readImage(imagePath).then((imageTensor) => {
        const predictions=async()=>{
            const pred=await loadAlzhimer(imageTensor)
            console.log("pred:"+pred)
            res.send({
                prediction:pred
            })
        }
        predictions()
        console.log("TESTS:"+pred)
        res.send("Hello")
    }).catch((error) => {
        console.error('Error reading image:', error);
    });   
    
});       

async function loadAlzhimer(image){
    console.log("Test")
    classes=["mild_demented","moderated_demented","non_demented","ver_mild_demented"]
    var path="file://"+__dirname+"/MLmodels/tfjAlzhimer/model.json"
    const model=await tfjs.loadLayersModel(path)
    console.log("Test")
    const y_pred=tfjs.variable(model.predict(image))
    console.log("YPRED="+y_pred)
    const prediction=tfjs.argMax(y_pred,axis=1)
    const accuracy=y_pred.dataSync()[prediction.dataSync()]
    return classes[prediction.dataSync()[0]]
}










async function readImage(path) {
    console.log("Test")
    const imageBuffer = fs.readFileSync(path);
    console.log("Test")
    const decodedImage = tfjs.node.decodeImage(imageBuffer);
    console.log(typeof(decodedImage))
    const grayscaleImage = decodedImage.mean(2).expandDims(2);
    const reshapedImage = tfjs.image.resizeBilinear(grayscaleImage, [256, 256]);
    const normalizedImage=tfjs.div(reshapedImage,255);
    tfjs.image.normalizedImage
    console.log("Test")
    console.log("Img"+normalizedImage)
    k=tfjs.expandDims(tfjs.variable(normalizedImage))
    return k;
  }

  /* OPEN_AI CONFIGURATION */

const configuration = new Configuration({
    apiKey: process.env.OPEN_API_KEY,
  });
  exports.openai = new OpenAIApi(configuration);

  const aiController = require("./controllers/openAiController") 
  
  // ROUTE imports
  const user = require("./routes/userRoutes");
  
  app.use("/api/v1", user);
  app.use("/ai-doctor", aiController)
  
  //middleware for error
  app.use(errorMiddleware);

 
  