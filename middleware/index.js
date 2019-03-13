var Campground = require("../models/campground");
var Comment = require("../models/comment");


// all the middleware goes here
var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next){
    // is user logged in
     if(req.isAuthenticated()){
         Campground.findById(req.params.id, function(err, foundCampground){
            if(err || !foundCampground){        //err only deal with invalid Id, !foundCampground deal with valid but non-exist id
                req.flash("error", "Campground not found");
                res.redirect("back");       //back to the route req come from
            } else {
                // Does user own the campground?
                // foundCampground.author.id is a mongoose object, req.user._id is a string
                if(foundCampground.author.id.equals(req.user._id)) {
                    next();
                } else {
                    req.flash("error", "You don't have permission to do that");
                    res.redirect("back");
                }
                
            }
        });
     } else {
         req.flash("error", "You need to be logged in to do that");
         res.redirect(("back"));
     }
}

middlewareObj.checkCommentOwnership = function(req, res, next){
    // is user logged in
     if(req.isAuthenticated()){
         Comment.findById(req.params.comment_id, function(err, foundComment){
            if(err || !foundComment){
                req.flash("error", "Comment not found");
                res.redirect("back");       //back to the route req come from
            } else {
                // Does user own the comment?
                // foundCampground.author.id is a mongoose object, req.user._id is a string
                if(foundComment.author.id.equals(req.user._id)) {
                    next();
                } else {
                    req.flash("error", "You don't have permission to do that");
                    res.redirect("back");
                } 
            }
        });
     } else {
         req.flash("error", "You need to be logged in to do that");
         res.redirect(("back"));
     }
}

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that!")        //("key", "message"), before we redirect
    res.redirect("/login");
}


module.exports = middlewareObj;