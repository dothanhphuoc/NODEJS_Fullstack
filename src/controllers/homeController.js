
let getHomePage = (req, res) => {
    return res.render('homePage.ejs');
}

let getAboutPage = (req, res) => {
    return res.render("aboutPage.ejs");
}

let getDemo = (req, res) => {
    return res.render("t1/t2/demo.ejs")
}

module.exports = {
    getHomePage,
    getAboutPage,
    getDemo
}