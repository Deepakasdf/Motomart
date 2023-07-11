const mongoose = require("mongoose");
const Category = require("./category.js");

const dburl = process.env.DB_URL.concat(process.env.DatabaseName);

main().catch((err) => console.log(err));

async function main() {
  mongoose.set("strictQuery", true);
  await mongoose.connect(dburl);
  console.log("done");
}

const categories = [
  {
    category_name: "Fisker",
    category_description: "dummy description",
  },

  {
    category_name: "Ford",
    category_description: "dummy description",
  },

  {
    category_name: "Fso",
    category_description: "dummy description",
  },

  {
    category_name: "Geely",
    category_description: "dummy description",
  },

  {
    category_name: "Gta",
    category_description: "dummy description",
  },

  {
    category_name: "Holden",
    category_description: "dummy description",
  },

  {
    category_name: "Honda",
    category_description: "dummy description",
  },

  {
    category_name: "Mahindra",
    category_description: "dummy description",
  },

  {
    category_name: "Hyundai",
    category_description: "dummy description",
  },

  {
    category_name: "Thar",
    category_description: "dummy description",
  },

  {
    category_name: "Audi r8",
    category_description: "dummy description",
  },
];

Category.insertMany(categories)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
