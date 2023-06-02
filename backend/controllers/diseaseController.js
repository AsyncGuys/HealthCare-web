const express = require("express");
const tfjs=require("@tensorflow/tfjs-node")
const path = require("path")


const router = express.Router();

exports.getHeartDisease = ((req,res) => {
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
    const model=await tfjs.loadLayersModel("file://"+path.dirname(__dirname)+"/MLmodels/tfjHeart/model.json")
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

exports.liverDisease = ((req,res) => {
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
    const model=await tfjs.loadLayersModel("file://"+path.dirname(__dirname)+"/MLmodels/tfjLiver/model.json")
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
