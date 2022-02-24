function auth(request, response, next) {
  const token = process.env.SECRET_MS_INFLUENCER_APP_TOKEN
  const tokenReciveid = request.headers["app-token"];
  if(!tokenReciveid || tokenReciveid === "") {
    return response.status(401).json({
      message: "Certify to insert authenticate token app_token",
    });
  }
  if (tokenReciveid !== token) {
    return response.status(401).json({
      message: "Bad request verify your app-token",
    });
  }
  next();
}

module.exports = {
  auth,
};
