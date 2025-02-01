const routes = ["education", "projects"];

module.exports = (app) => {
  routes.forEach((route) => {
    const _route = require(`../routes/${route}`);
    app.use(_route);
  });
};
