var mongoose = require("mongoose");
var Night    = require("./models/night");
var Comment  = require("./models/comment");

var data = [
    {
        title : "The Long-Dead Boy",
        image : "https://icebreakerideas.com/wp-content/uploads/2015/08/The-Long-Dead-Boy-e1440550455317.jpg",
        body  : "Haaaaaaaaaaaa..........."
    }
]

function seedDB(){
    Night.remove({}, function(err){
        // if(err){
        //     console.log(err);
        // }else{
        //     console.log("DATABASE CLEARED!");
        //     data.forEach(function(seed){
        //         Night.create(seed,  function(err, night){
        //             if(err){
        //                 console.log(err);
        //             }else{
        //                 console.log("ADDED!");
        //                 Comment.create({
        //                     text : "It was really scary......",
        //                     author: "spooky77"
        //                 }, function(err, comment){
        //                     if(err){
        //                         console.log(err);
        //                     } else{
        //                         night.comments.push(comment);
        //                         night.save();
        //                         console.log("Comment added");
        //                     }
        //                 }
        //                 )
        //             }
        //         })
        //     })
        // }
    })
}

module.exports = seedDB;