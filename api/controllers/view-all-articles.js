// const Articles = require("../models/Articles");

module.exports = {
  friendlyName: "View all articles",

  description: 'Display "All articles" page.',

  exits: {
    success: {
      //send json data
      responseType: "ok",
    },
    error: {
      responseType: "serverError",
    },
    notFound: {
      description: "No user with the specified ID was found in the database.",
      responseType: "notFound",
    },
    serverError: {
      description: "Something went wrong on the server.",
      responseType: "serverError",
    },
    unauthorized: {
      description: "You are not permitted to perform this action.",
      responseType: "badRequest",
    },
  },

  fn: async function (inputs, exits) {
    const articles = await sails.helpers.test();
    return exits.success(articles);
    // res.json(articles);
  },
};
