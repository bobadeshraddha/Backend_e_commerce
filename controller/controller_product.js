const productModel = require("../model/product");

async function addproduct(req, res) {
  const { name, price , discontedPrice,Image,discription,categaryType } = req.body;

  try {
if
    (!name || !price || !discontedPrice || !discription ){
        return res.status(400).json ({message: "please enter all fields"})
  }

   var product = productModel({
   name,
   price,
   discontedPrice,
   discription,
   categaryType
});
  await product.save();

  res.status(201).json({
  message : "add successfully ",product
  });

  } catch (error) {
    res.status(500).json({ message: "something went wrong ",error });
  }
}

async function getAllproduct(req, res) {

  try {

    var Allproduct = await productModel.find().populate('categaryType','name');

  res.status(201).json({
  message : "add successfully ",Allproduct
  });

  } catch (error) {
    res.status(500).json({ message: "something went wrong ",error });
  }
}







module.exports = {
    addproduct,
    getAllproduct
}
