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
    var list=[parseInt(req.body.sex),
            req.body.age,
            parseInt(req.body.cp),
            req.body.trtbps,
            req.body.chol,
            parseInt(req.body.fbs),
            parseInt(req.body.rest_ecg),
            req.body.thalach,
            req.body.exang,
            req.body.oldpeak,
            parseInt(req.body.slp),
            parseInt(req.body.caa),
            parseInt(req.body.thall)]
    console.log(list)
    const predictions=async()=>{
        const pred=await loadheart(list)
        console.log("pred:"+pred)
        res.send(pred)
    }
    predictions()
})

async function loadheart(list){
    classes=["No","Yes"]
    const model=await tfjs.loadLayersModel("file://"+__dirname+"/MLmodels/tfjHeart/model.json")
    console.log()
    list=tfjs.cast(tfjs.tensor(list),"float64")
    console.log(list.shape)
    // list=tfjs.expandDims(list)
    // console.log(list.shape)
    const y_pred= model.predict(list)
    console.log(y_pred.sum().dataSync())
    const prediction=tfjs.argMax(y_pred,axis=1)
    // const accuracy=y_pred.dataSync()[prediction.dataSync()]
    return [classes[prediction.dataSync()[0]],accuracy]
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


  app.listen(3000,function(){
    console.log("Server is up and running on port 4000")  
})