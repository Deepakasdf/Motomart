const mongoose = require("mongoose");
const Brand = require("./brand.js");

const dburl = process.env.DB_URL.concat(process.env.DatabaseName);

main().catch((err) => console.log(err));

async function main() {
  mongoose.set("strictQuery", true);
  await mongoose.connect(dburl);
  console.log("done");
}

const brands = [
  {
    car_brand: "Maruti",
    car_description: "dummy description",
  },

  {
    car_brand: "Renault",
    car_description: "dummy description",
  },

  {
    car_brand: "Datsun",
    car_description: "dummy description",
  },

  {
    car_brand: "Skoda",
    car_description: "dummy description",
  },

  {
    car_brand: "Nissan",
    car_description: "dummy description",
  },

  {
    car_brand: "BMW",
    car_description: "dummy description",
  },

  {
    car_brand: "Jaguar",
    car_description: "dummy description",
  },

  {
    car_brand: "Lamborghini",
    car_description: "dummy description",
  },

  {
    car_brand: "Rolls royce",
    car_description: "dummy description",
  },

  {
    car_brand: "Volvo",
    car_description: "dummy description",
  },

  {
    car_brand: "Bugatti",
    car_description: "dummy description",
  },
];

Brand.insertMany(brands)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
