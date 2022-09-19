import express from "express"
import data from "./data.js"

const foodRouter=express.Router();
let newData=[];
let _id=0;
let foodJect={
    "_id":"",
    "name":""
}
let foodJect2={}
const count=Math.floor(Math.random()*99999999999);
let counter=count;

console.log("adios")


function generateId () {
    let idNew=counter;
    counter++
    console.log(idNew)
    return idNew
}


foodRouter.post("/create-food", (req,res) =>{
    foodJect=req.body
    let newId=generateId();
    foodJect._id=newId;
    console.log(foodJect)
    data.push(foodJect);
    foodJect={}; 
    return res.json(data);
})

foodRouter.get("/create-food",(req,res) =>{
    return res.json(data);
})

foodRouter.delete("/create-food/:id", (req,res)=>{
    const id = req.params.id
    console.log(data._id)
    data.map((current)=>{
        if (current._id != id) {
        newData.push(current);
        }
    
    })
    data.splice(0, data.length);
    newData.forEach((curr)=>data.push(curr))
    newData.splice(0,newData.length);
    return res.json (data);
});

foodRouter.put("/create-food/:id", (req,res)=>{
    const id = req.params.id
    console.log(req.body)
    data.map((current)=>{
        if (current._id != id) {
        newData.push(current);
        }
    if (current._id == id) {
        foodJect=current;
        }
    })
    Object.assign(foodJect,req.body);
    data.splice(0, data.length);
    newData.forEach((curr)=>data.push(curr));
    data.push(foodJect);
    foodJect={};
    newData=[];
    return res.json (data);
});

export {foodRouter};