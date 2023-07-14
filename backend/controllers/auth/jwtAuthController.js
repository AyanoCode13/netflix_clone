const jwtAuthController = {
  jwtAuthRegisterUrl: async (req, res) => {
    const user = await User.create(req.body);
    console.log(user)
    const { jwtTokenGenerator } = await import("../../config/auth/jwtTokenGenerator.js")
    res.status(200).json({ url: await jwtTokenGenerator(user) });
  },
  jwtAuthLoginUrl: async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    const { compare } = await import("bcrypt");
    if (compare(user.password, password)) {
        res.status(200).json({ url: jwtTokenGenerator(user) });
    }
    else{
        res.status(200).json({ url: jwtTokenGenerator(user) });
    }
    
  },
  jwtAuthCallback: async (req, res) => {
    console.log(req.query.token)
    if (req.query.token) {
      const { verify } = await import("jsonwebtoken");
      verify(
        req.query.token,
        process.env.JWT_SECRET,
        async (err, decoded) => {
          console.log(decoded);
          const User = await import("../../models/User.js");
          const user = await User.findOne({email:decoded.email});
          if (user) {
            res.cookie("auth",req.query.token,{ expiresIn: 60 * 60 * 1000})
            res.redirect(process.env.SUCCESS_AUTH_REDIRECT_URL);
          } else {
            res.redirect(process.env.FAIL_AUTH_REDIRECT_URL);
          }
        }
      );
    } else {
      res.redirect(process.env.FAIL_AUTH_REDIRECT_URL);
    }
  },
};
export default jwtAuthController