const mongoose = require("mongoose");
const Model = require("./model.js");

const dburl = process.env.DB_URL.concat(process.env.DatabaseName);

main().catch((err) => console.log(err));

async function main() {
  mongoose.set("strictQuery", true);
  await mongoose.connect(dburl);
  console.log("done");
}

const models = [
  {
    car_model: "Mahindra thar",
    car_price: "ten lakh",
    createdat: "2020-05-18T14:10:30Z",
    updatedat: "2021-06-18T14:10:30Z",
  },
  {
    car_model: "Maryti jimny",
    car_price: "twelve lakh",
    createdat: "2022-05-18T14:10:30Z",
    updatedat: "2023-06-18T14:10:30Z",
  },
  {
    car_model: "Kia seltos",
    car_price: "18 lakh",
    createdat: "2018-05-18T14:10:30Z",
    updatedat: "2021-06-18T14:10:30Z",
  },
  {
    car_model: "Toyota fortuner",
    car_price: "30 lakh",
    createdat: "2017-05-18T14:10:30Z",
    updatedat: "2023-06-18T14:10:30Z",
  },
  {
    car_model: "tata nexon",
    car_price: "7 lakh",
    createdat: "2016-05-18T14:10:30Z",
    updatedat: "2023-06-18T14:10:30Z",
  },
  {
    car_model: "Innova",
    car_price: "19 lakh",
    createdat: "2015-05-18T14:10:30Z",
    updatedat: "2021-06-18T14:10:30Z",
  },
  {
    car_model: "Maruti brezza",
    car_price: "15 lakh",
    createdat: "2021-05-18T14:10:30Z",
    updatedat: "2022-07-18T14:10:30Z",
  },
  {
    car_model: "Creta",
    car_price: "30 lakh",
    createdat: "2019-06-18T14:10:30Z",
    updatedat: "2022-09-18T14:10:30Z",
  },
];

Model.insertMany(models)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
