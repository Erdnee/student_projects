var express = require('express');
var fs = require("fs");
var path = require("path");
var router = express.Router();

/* GET groups listing. */
router.get('/:prof/:group?', function(req, res, next) {
  fs.readdir(path.join(__dirname, "../public/projects"), (err, profs) => {
    if (err) throw err;
    if(profs.includes(req.params.prof)){
      fs.readdir(path.join(__dirname,"../public/projects",req.params.prof), (err,groups) => {
        if(err) throw err;
        console.log(groups);
        if(groups.includes(req.params.group)){
          fs.readdir(path.join(__dirname,"../public/projects",req.params.prof,req.params.group),(err,students)=>{
            if(err) throw err;
            fs.readdir(path.join(__dirname,"../public/projects",req.params.prof,req.params.group,students[0]),(err,files) =>{
              if(files.some((file)=>{
                return path.extname(file) == ".html"; 
              })){
                res.render("group",{group:req.params.group,students,prof:req.params.prof});
              }
              else{
                res.render("group",{group:req.params.group,students,prof:req.params.prof,files});
              }
            })

          })
        }
        else{
          res.render("groups",{groups,prof:req.params.prof});
        }
      })
    }
    else{
      res.status(404);
      res.render('error',{message:"Wrong parameter",error:{status:404,stack:""}});
    }
  })
});
router.get('/:prof/:group?/:project', function(req, res, next) {
  let prof = req.params.prof;
  let group = req.params.group;
  let project = req.params.project;
  fs.readdir(path.join(__dirname,"../public/projects",prof,group,project),(err,files)=>{
    if(err) throw err;
    if(files.every((file)=>{
      return path.extname(file) != ".html"; 
    })){
      var noExtFiles = files.map(file => {
        return file.substring(0, file.length - path.extname(file).length);
      })
      let temp = [];
      for(let i = 0; i < files.length; i++){
        temp[i] = {fileName:files[i],fileNoExt:noExtFiles[i]};
      }
      files = temp;
      res.render("project",{prof,group,project,files})
    }
    else{
      next();
    }
  })
})
module.exports = router;
