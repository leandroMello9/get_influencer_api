const apiAuth = require("../config/axios");

async function auth(request, response, next) {
  try {
    const { data } = await apiAuth.post("/login", {
      userName: process.env.SECRET_MS_IFLUENCER_USER_NAME_GLOBAL,
      password: process.env.SECRET_MS_IFLUENCER_USER_PASSWORD_GLOBAL,
    });
    if (!data) {
      return response.status(401).json({
        err: "Not authenticate",
      });
    }
    apiAuth["defaults"]["headers"][
      "Authorization"
    ] = `Bearer ${data.accessToken}`;
    next();
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  authGlobal: auth,
};
