var async = require('async');
var mongoose = require('mongoose');
console.log("Node js server started");
var URIString = "mongodb://localhost/test";
mongoose.connect(URIString,function(err){
    if(err){
        console.log("Error connection to db:"+err);
    }else{
        console.log("Successfully connected to db");
    }
});
var userSchema = new mongoose.Schema({
    name: {type:String,unique:true},
    age: {type: Number,min:18,max:45}
});

var newUsers = mongoose.model('Users',userSchema);


async.waterfall([
    function(callback) {
        newUsers.find({}).sort({age: -1}).limit(0).exec(function (err, result) {
            if (err) {
                console.log("Error occurred while fetching data from db");
            } else {
                callback(null,result);
            }
        });
    },
    function(result,callback){
    console.log("fetched record : "+result);
        callback(null,'done');
    }
],
    function(err,result){
        if(err)
            console.log("Final Error is: "+err);
        else
            console.log("final result is: "+result);
});