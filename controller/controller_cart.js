

const cartModel = require('../model/cart');


async function createCart(req, res) {

    var userId =req.id;

    const { productId} = req.body;

    try {
        const newCart = cartModel({productId,userId,quantity:1});
      await  newCart.save();

        res.status(201).json({
            status: 1,
            message: 'Cart created successfully',
            newCart
        })

    } catch (error) {
        res.status(500).json({ error });
    }

}
module.exports = {
    createCart
}