/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const addArticle = require("./add-article");
const viewAllArticles = require("./view-all-articles");
const viewList = require("./view-list");

module.exports = {
  Create: addArticle,
  list: viewList,
  view: viewAllArticles,
};
