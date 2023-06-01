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

app.get("/",function(req,res){
    // res.sendFile(__dirname+"/index.html")
    res.send("HI")
})

app.get("/heart",function(req,res){
    res.send(path.dirname(__dirname)+"/frontend/src/components/common/HeartForm.jsx")
})

app.get("/diabetes",function(req,res){
    res.send(path.dirname(__dirname)+"/frontend/src/components/common/DiabetessForm.jsx")
})


// app.get("/tumor",function(req,res){
//     res.sendFile(__dirname+"/test.html")
// })

// app.get("/tumor",function(req,res){
//     res.sendFile(__dirname+"/test.html")
// })

// app.get("/tumor",function(req,res){
//     res.sendFile(__dirname+"/test.html")
// })





app.post("/heart",function(req,res){
    console.log("Test`")
    var list=[[parseInt(req.body.sex),
            req.body.age/100,
            parseInt(req.body.cp),
            (req.body.trtbps-94)/(170-94),
            (req.body.chol-126)/(370.375-126),
            parseInt(req.body.fbs),
            parseInt(req.body.rest_ecg),
            (req.body.thalach-87.25)/(202-87.25),
            req.body.exang,
            req.body.oldpeak/4,
            parseInt(req.body.slp),
            parseInt(req.body.caa),
            parseInt(req.body.thall)]]
    console.log(list)
    const predictions=async()=>{
        const pred=await loadheart(list)
        console.log("pred:"+pred)
        res.send({
            predict:pred
        })
    }
    predictions()
})

async function loadheart(list){
    classes=["No","Yes"]
    const model=await tfjs.loadLayersModel("file://"+__dirname+"/MLmodels/tfjHeart/model.json")
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





app.post("/liver",function(req,res){
    console.log("Test`")
    var list=[[req.body.age/100,
            parseInt(req.body.gender),
            req.body.total_Bilirubin/6,
            req.body.direct_Bilirubin/3,
            (req.body.alkaline_Phosphotase-63)/(482-63),
            (req.body.alamine_Aminotransferase-10)/110,
            (req.body.aspartate_Aminotransferase-10)/170,
            req.body.total_protein/10,
            req.body.albumim/6,
            req.body.ratio/2]]
    console.log(list)
    const predictions=async()=>{
        const pred=await loadLiver(list)
        console.log("pred:"+pred)
        res.send({
            predict:pred
        })
    }
    predictions()
})

async function loadLiver(list){
    classes=["No","Yes"]
    const model=await tfjs.loadLayersModel("file://"+__dirname+"/MLmodels/tfjLiver/model.json")
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

//   /* OPEN_AI CONFIGURATION */

// const configuration = new Configuration({
//     apiKey: process.env.OPEN_API_KEY,
//   });
//   exports.openai = new OpenAIApi(configuration);
  
//   // ROUTE imports
//   const user = require("./routes/userRoutes");
  
//   app.use("/api/v1", user);
//   app.use("/openai", openAiRoutes);
  
//   //middleware for error
//   app.use(errorMiddleware);

 
  app.listen(3000,function(){
    console.log("Server is up and running on port 4000")  
}) 