const routes = ["education"];

module.exports = (app) => {
  routes.forEach((route) => {
    const _route = require(`../routes/${route}`);
    app.use(_route);
  });
};
