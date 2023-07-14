import jwt from "jsonwebtoken";
import User from "../../models/User.js"
const googleOAuthController = {
  googleOAuthUrl: async (req, res) => {
    const { getGoogleOAuthUrl } = await import("../../config/auth/googleOAuth.js")
    res.status(200).json(getGoogleOAuthUrl());
  },

  googleOAuthCallback: async (req, res) => {
    const { code } = req.query;
    const { getGoogleUser } = await import("../../config/auth/googleOAuth.js")
    const user = await getGoogleUser(code);
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
      expiresIn: 60 * 60 * 24 * 1000,
    });
    try {
      res.cookie("auth", token, { expiresIn: 3 * 24 * 60 * 60 });
      const new_user = await User.create({
        email: user.email,
        name: {
          first_name: user.given_name,
          last_name: user.family_name,
        },
        avatar: user.picture,
        password: user.id
      });
      console.log("User created");
      console.log(new_user);
      console.log("Logged in")
      res.redirect(process.env.SUCCESS_AUTH_REDIRECT_URL);
    } catch (error) {
      res.redirect(process.env.FAIL_AUTH_REDIRECT_URL);
    }
  },
};
export default googleOAuthController;
