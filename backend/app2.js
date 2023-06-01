const express=require("express")
const bodyParser=require("body-parser")
const request=require("request")
const tfjs=require("@tensorflow/tfjs-node")
const multer=require("multer")
const path=require('path')
const fs = require('fs');


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
const app=express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:false}))

app.get("/",function(req,res){
    // res.sendFile(__dirname+"/index.html")
    res.send("HI")
})

app.get("/heart",function(req,res){
    res.sendFile(__dirname+"/form1.html")
})

app.get("/tumor",function(req,res){
    res.sendFile(__dirname+"/test.html")
})

app.post("/heart",function(req,res){
    var list=[[parseInt(req.body.val1),
            parseInt(req.body.val2),
            parseInt(req.body.val3),
            parseInt(req.body.val4),
            parseInt(req.body.val5),
            parseInt(req.body.val6),
            parseInt(req.body.val7)]]    
    console.log(list)
    const predictions=async()=>{
        const pred=await loadModel(list)
        console.log("pred:"+pred)
        res.send(pred)
    }
    predictions()
})





async function loadModel(list){
    
    const model=await tfjs.loadLayersModel("file://"+__dirname+"/Model/cropRecommendation/model.json")
    console.log("test")
    const y_pred= model.predict(tfjs.tensor(list))
    console.log(y_pred.sum().dataSync())
    const prediction=tfjs.argMax(y_pred,axis=1)
    // const accuracy=y_pred.dataSync()[prediction.dataSync()]
    return [prediction.dataSync()[0],accuracy]
}


app.post('/tumor',upload.single('image'),(req, res) => {
    imagePath=__dirname+"/Images/.jpg"
    readImage(imagePath).then((imageTensor) => {
        const predictions=async()=>{
            const pred=await loadTumor(imageTensor)
            console.log("pred:"+typeof(pred))
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
    console.log("Server is up and running on port 3000")  
})