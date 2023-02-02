module.exports = {
  friendlyName: "View list",

  description: 'Display "List" page.',

  inputs: {
    name: {
      type: "string",
      required: true,
    },
  },

  exits: {
    success: {
    },
  },

  fn: async function (inputs, exits) {
    // Respond with view.
    const res = this.res;
    console.log(inputs);
    res.send("Hello World");
  },
};
