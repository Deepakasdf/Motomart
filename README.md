1. Move creds to .env file //ok done
2. Change the Database name to project name .//done
3. Change the database name to a env variable //done
4. Move all code of categories to a single file //done
5. add error handler to all the code .//done
6. add 0auth beside of bcrypt.//done with bcrypt

//category_id hash md5 - category name // done
//url//done
//category image url //done
//category type//done
//app.post("/categories", jsonparser, async (req, res) => {
const category = new Category(req.body);
await category.save();
res.send({ category });
});//make router of it//done
