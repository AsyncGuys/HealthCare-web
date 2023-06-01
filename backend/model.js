// const express = require("express");
// const bodyParser=require("body-parser")
// const request=require("request")
// // const router = require("./router")
// const tfjs=require("@tensorflow/tfjs")
// const multer=require("multer")
// const path=require('path')
// const fs = require('fs');

// const router = express.Router();


// const storage=multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,__dirname+'/Images')
//     },
//     filename:(req,file,cb)=>{
//         console.log(file)
//         cb(null,path.extname(file.originalname))
//     }
// })

// const upload = multer({storage:storage});

// router.get("/tumor",function(res,req){
//     res.sendFile(__dirname+"/test.html");
// })

// router.post('/tumor',(req, res) => {  //,upload.single('image')
//     imagePath=__dirname+"/Images/.jpg"
//     readImage(imagePath).then((imageTensor) => {
//         const predictions=async()=>{
//             const pred=await loadTumor(imageTensor)
//             console.log("pred:"+typeof(pred))
//             res.send("Prediction="+pred)
//         }
//         predictions()
//         console.log("TESTS:"+pred)
//         res.send("Hello")
//     }).catch((error) => {
//         console.error('Error reading image:', error);
//     });   
    
// });       

// router.post('/alzhimer',(req, res) => {
//     imagePath=__dirname+"/Images/.jpg"
//     readImage(imagePath).then((imageTensor) => {
//         const predictions=async()=>{
//             const pred=await loadAlzhimer(imageTensor)
//             console.log("pred:"+typeof(pred))
//             res.send("Prediction="+pred)
//         }
//         predictions()
//         console.log("TESTS:"+pred)
//         res.send("Hello")
//     }).catch((error) => {
//         console.error('Error reading image:', error);
//     });   
    
// });       


// async function loadTumor(image){
//     classes=["glioma","meningioma","notumor","pituitary"]
//     var path="file://"+__dirname+"/MLmodel/tfjsTumor/model.json"
//     const model=await tfjs.loadLayersModel(path)
//     const y_pred=tfjs.variable(model.predict(image))
//     console.log("YPRED="+y_pred)
//     const prediction=tfjs.argMax(y_pred,axis=1)
//     const accuracy=y_pred.dataSync()[prediction.dataSync()]
//     return classes[prediction.dataSync()[0]]
// }

// async function loadAlzhimer(image){
//     classes=["glioma","meningioma","notumor","pituitary"]
//     var path="file://"+__dirname+"/MLmodel/tfjsAlzhimer/model.json"
//     const model=await tfjs.loadLayersModel(path)
//     const y_pred=tfjs.variable(model.predict(image))
//     console.log("YPRED="+y_pred)
//     const prediction=tfjs.argMax(y_pred,axis=1)
//     const accuracy=y_pred.dataSync()[prediction.dataSync()]
//     return classes[prediction.dataSync()[0]]
// }

// async function readImage(path) {
//     const imageBuffer = fs.readFileSync(path);
//     const decodedImage = tfjs.node.decodeImage(imageBuffer);
//     const grayscaleImage = decodedImage.mean(2).expandDims(2);
//     const reshapedImage = tfjs.image.resizeBilinear(grayscaleImage, [256, 256]);
//     const normalizedImage=tfjs.div(reshapedImage,255);
//     tfjs.image.normalizedImage
//     console.log("Test")
//     console.log("Img"+normalizedImage)
//     k=tfjs.expandDims(tfjs.variable(normalizedImage))
//     return k;
//   }



// //   router.listen(4000,function(){
// //     console.log("Server is up and running on port 3000")  
// // })
