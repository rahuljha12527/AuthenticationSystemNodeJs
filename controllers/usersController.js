module.exports.profile = function (req, res) {
  return res.render("user_profile", {
    title: "user_profile",
  });
};

// render the sign up page
module.exports.signUp = function (req, res) {
  return res.render("user_sign_up", {
    title: "Sign up",
  });
};

// render the sign in page
module.exports.signIn = function (req, res) {
  return res.render("user_sign_in", {
    title: "Sign in",
  });
};


