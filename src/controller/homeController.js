const viewController = (req, res) => {
  return res.render("home.ejs");
};

const handleUserControler = (red, res) => {
  return res.render("user.ejs");
};

module.exports = {
  viewController,
  handleUserControler,
};
