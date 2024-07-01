class RootController {
  renderHomePage(req, res) {
    // res.render("index", {
    //   title: "home Page",
    //   layout: "../views/layouts/sidebar",
    // });
    res.render("login");
  }
}

module.exports = new RootController();
