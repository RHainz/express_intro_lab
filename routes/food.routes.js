import express from "express"
import data from "./data.js"

const foodRouter=express.Router();
const newData=[];
let _id=0;
let foodJect={
    "_id":"",
    "name":""
}
const count=Math.floor(Math.random()*99999999999);
let counter=count;

function generateId () {
    let idNew=counter;
    counter++
    console.log(idNew)
    return idNew
}


foodRouter.post("/create-food", (req,res) =>{
    let naming=req.body.name;
    let newId=generateId();
    console.log (newId)
    console.log(req.body);
    foodJect._id=newId;
    foodJect.name=naming;
    data.push(foodJect);
    foodJect={
        "_id":"",
        "name":""
    }
    
    return res.json(data);
})

foodRouter.get("/create-food",(req,res) =>{
    return res.json(data);
})

foodRouter.put("/create-food/:id", (req,res)=>{
    const id = req.params.id
    // data.map((current)=>{
    //     if (current === `${name}`) {
    //         data[current]=(req.body)}        
    //   } 
    })


export {foodRouter};