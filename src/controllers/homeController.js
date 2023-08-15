
let getHomePage = (req, res) => {
    return res.render('homePage.ejs');
}

let getAboutPage = (req, res) => {
    return res.render("aboutPage.ejs");
}

module.exports = {
    getHomePage,
    getAboutPage,
}