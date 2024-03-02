const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://jerin:jerin@cluster0.crsjo7n.mongodb.net/data?retryWrites=true&w=majority")
.then(()=>{console.log("client vannu")})
.catch(err=>console.log(err));
const addworkschema=new mongoose.Schema(
    {
    name:String,
    phone:Number,
   
    description:String,
    serivce:String,
    
    
    location:String,
    image1:{
        data : Buffer,
        contentType:String,
    
    }
    

});
var addworkmodel=mongoose.model("addwork",addworkschema)
module.exports=addworkmodel;
