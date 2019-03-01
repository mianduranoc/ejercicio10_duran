var mongoose = require('mongoose');
var schema=require('./schema');
//Llamada a metodos al final
mongoose.connect('mongodb://localhost:27017/test');

var Blog=mongoose.model('Blog',schema,'blog');
function insert(title,author,body) {
    var blog1 = new Blog({
        title: title,
        author: author,
        body: body
    });

    Blog.create(blog1, err => {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        console.log("Saved!!");
        process.exit(0);
    });
}
function find(author) {
    Blog.find({author:author}, (err, docs) => {
        if (err) {
            console.log(err);
            process.exit(1);
        } else {
            console.log("Consulta general");
            console.log(docs);
            process.exit(0);
        }
    });
}

function put(id,body){
    Blog.update({_id:id},{$set:{body:body}},err=>{
        if (err){
            console.log(err);
            process.exit(1);
        }
        console.log("Cuerpo actualizado");
        process.exit(0);
    });
}
function del(id){
    Blog.findByIdAndRemove({_id:id},(error)=>{
        if (error){
            console.log(error);
            process.exit(1);
        }
        else{
            console.log("Eliminacion Exitosa");
            process.exit(0);
        }
    });
}

//insert("Lo ultimo en tecnologia","Persona 1","En este blog podras encontrar lo ultimo en tecnologia");
//find("Persona 1");
//put('5c78bf52f2a4cf122af27241',"Este es un mensaje actualizado");
del('5c78bf52f2a4cf122af27241');