v1 ============================================
# YelpCamp
## Initial Setup
# Add Landing Page
# Add Campgrounds Page that lists all campgrounds

Each Campground has:
# Name
# Image


Layout and Basic Styling
# Create our header and footer partials
# Add in Bootstrap

Creating New Campgrounds
# Setup new campground POST route
# Add in body-parser
# Setup route to show form
# Add basic unstyled form

Style the campgrounds page
# Add a better header/title
# Make campgrounds display in a grid

Style the Navbar and Form
# Add a navbar to all templates
# Style the new campground form


v2==================================================================== 

Add Mongoose
# Install and configure mongoose
# Setup campground model
# Use campground model inside of our routes!

Avoid potential problems with Mongoose version
1. install latest version: npm uninstall mongoose ; npm install --save mongoose@latest version number


Show Page
# Review the RESTful routes we've seen so far
# Add dexcriptioin to our campground model
# Show db.collection.drop()
delete all data in db, usage: db.campgrounds.drop()

# Add a show route/template

1. Restful routes
name        url             verb        desc.       
=================================================================
INDEX       /dogs           GET         Display a list of all dog
NEW         /dogs/new       GET         Display form to make a new dog
CREATE      /dogs           POST        Add new dog to DB
SHOW        /dogs/:id       GET         Shows info about one dog

4. Add a show route/template
// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res) {
    //find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            //render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
});



v3================================================================================
## Refactor Mongoose Code
# Create a modles directory
# Use module.exports
# Require everything correctly


## Add Seeds File
# Add a seeds.js file
so that we can see the comments immediately
# Run the seeds file every time the server starts


## Add the Comment model!
# Make our errors
# Display comments on campground show page



v4===========================================================================
## Comment New/Create
# Discuss nested routes
# Add the comment new and create routes
# Add the new comment form


 Restful routes
name        url             verb        desc.       
=================================================================
INDEX       /dogs           GET         Display a list of all dog
NEW         /dogs/new       GET         Display form to make a new dog
CREATE      /dogs           POST        Add new dog to DB
SHOW        /dogs/:id       GET         Shows info about one dog


INDEX       /campgrounds
NEW         /campgrounds/new
CREATE      /campgrounds
SHOW        /campgrounds/:id

NEW         campgrounds/:id/comments/new    GET
CREATE      campgrounds/:id/comments



v5===================================================================================
## Style Show Page
# Add sidebar to show page
# Display comments nicely

# Finish Styling Show Page
1. Add public directory
2. Add custom stylesheet

//add css custom stylesheet file
app.use(express.static(__dirname + "/public"));


v6=====================================================================================
# Auth Pt. 1 - Add User Model
1. Install all packages needed for auth
2. Define User model


# Auth Pt. 2 - Register
1. Configure Passport
2. Add register routes
3. Add register template


# Auth Pt. 3 - Login
* Add login routes
* Add login template

# Auth Pt. 4 - Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar

# Auth Pt. 5 - Show/Hide Links
* Show/hide auth links in navbar correctly
* 


v7==============================================================
## Refactor the routes
1. use Express router to reoragnize all routes
2. 


v8=================================================================
## Users + Comments
1. Associate users and comments
2. Save author's name to a comment automatically
3. 

v9==================================================================

## Users + Campgrounds
1. Prevent an unauthenticated user from creating a campground
2. Save username+id to newly created campground
3. 


1. Add Method-Override
2. Add Edit Route for Campgrounds
3. Add Link to Edit Page
4. Add Update Route

## Deleting Campgrounds
1. Add Destroy Route
2. Add Delete button

v10========================================================
## Authorization
1. User can only edit his/her campgrounds
2. User can only delete his/her campgrounds
3. Hide/Show edit and delete buttons


## Editing Campgrounds
1. Add Method-Override
2. Add Edit Route for Campgrounds
3. Add Link to Edit Page
4. Add Update Route
5. Fix $set problem

## Deleting Campgrounds
1. Add Destroy Route
2. Add Delete button

for methodOverride, the form we use method="POST"
<form action="/campgrounds/<%= campground._id %>?_method=DELETE" method="POST">
<form action="/campgrounds/<%= campground_id %>/comments/<%= comment._id %>?_method=PUT" method="POST">


## Authorization
1. User can only edit his/her campgrounds
2. User can only delete his/her campgrounds
3. Hide/Show edit and delete buttons

## Editing Comments
1. Add Edit route form comments
2. Add Edit button
3. Add Update route

/campgrounds/:id/edit
/campgrounds/:id/comments/:comment_id/edit

## Deleting Comments
1. Add Destroy route
2. Add Delete button

Campground Destroy Route: /campgrounds/:id
Comment Destroy Route: /campgrounds/:id/comments/:comment_id

## Authorization Part 2: Comments
1. User can only edit his/her comments
2. User can only delete his/her comments
3. Hide/Show edit and delete buttons
4. Refactor Middleware


v11=========================================================================
## Adding in Flash!
1. Demo working version
2. Install and configure connect-flash
3. Add bootstrap alerts to header
4. 

Per the docs, you can either set a flash message on the req.flash object before returning a res.redirect() or you can pass the req.flash object into the res.render() function.

Sorry for the confusion.

Your solution is great (it follows the example in the docs), but you could also try the following:


if(err){
  req.flash("error", err.message);
  return res.redirect("/register");
}

 if(err){
      return res.render("register", {"error": err.message});
    }
    
    
[] is truty    
    


Restful routes
name        url             verb        desc.       
=================================================================
INDEX       /dogs           GET         Display a list of all dog
NEW         /dogs/new       GET         Display form to make a new dog
CREATE      /dogs           POST        Add new dog to DB
SHOW        /dogs/:id       GET         Shows info about one dog


INDEX       /campgrounds
NEW         /campgrounds/new
CREATE      /campgrounds
SHOW        /campgrounds/:id

NEW         campgrounds/:id/comments/new    GET
CREATE      campgrounds/:id/comments