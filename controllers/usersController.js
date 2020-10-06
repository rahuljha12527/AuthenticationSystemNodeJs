const User = require("../models/user");   

module.exports.profile = function (req, res) {
  return res.render("user_profile", {
    title: "user_profile",
  });
};

// render the sign up page
module.exports.signUp = function (req, res) {
  if (req.isAuthenticated()) {
      return   res.redirect('/users/profile');
  }
  return res.render("user_sign_up", {
    title: "Sign up",
  });
};

// render the sign in page
module.exports.signIn = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect('/users/profile');
}
  return res.render("user_sign_in", {
    title: "Sign in",
  });
};

// get the sign up data
module.exports.create = function (req, res) {

  if (req.body.password != req.body.Confirm_Password) {
     req.flash('error','Passwords do not match');//yehi hai
    return res.redirect("back");
  }

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
       req.flash('error',err);
      return;
    }

    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
           req.flash('error',err);
          return;
        }

        return res.redirect("/users/sign-in");
      });
    } else {
      req.flash('success','You have signed up,  login to continue')
      return res.redirect("back");
    }
  });
};

// sing in create a sessition for the user
module.exports.createSesition = function (req, res) {
  req.flash('success','Logged in Successfully');
  return res.redirect("/");
};

module.exports.destroySession=function(req,res){
  req.logout();
  req.flash('success','You have logged out!');
  return res.redirect('/');
}