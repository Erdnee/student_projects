const express = require('express');
const fs = require("fs");
const path = require("path");
const Constants = require("../bin/Constants");

const router = express.Router();

  /* GET professional listing. */
  router.get('/', function (req, res, next) {
    fs.readdir(path.join(__dirname, "../public/projects"), (err, profs) => {
        res.render("index", { title: Constants.INDRA_NAME_MN, profs:profs, motto:Constants.MOTTO});
    })
  });



module.exports = router;
