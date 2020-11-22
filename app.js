const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");
//console.log(date());
const app=express();
let items=["shreya","hii","no"];
let workItems=[];

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
let day=  date.getDate();
res.render("list",{
 listTitle:day,newListItems:items
});
});
app.post("/",function(req,res){
   let item=req.body.newItem ;
  if(req.body.list=="work"){
    workItems.push(item);
    res.redirect("/work");
  }
  else{
    items.push(item);
    res.redirect("/");
  }
});
//console.log(item);
//items.push(item);
//res.redirect("/");
//});
app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List",newListItems:workItems});
});
//app.post("/work",function(req,res){
  //let item=req.body.newItem;
//  workItems.push(item);
//  res.redirect("/");
//});
app.listen( process.env.PORT ||3000,function(){
  console.log("server started on port 3000");
});
