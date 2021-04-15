const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controllers');



// routes/products.route.js

router.get('/:id', product_controller.product_details);
// Now let’s write the product_details controller in our controller file. Head to controllers/product.controller.js and paste the following code.
// controllers/products.controller.js


// routes/products.route.js
router.put('/:id/update', product_controller.product_update);

// routes/products.route.js
router.delete('/:id/delete', product_controller.product_delete);


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);
module.exports = router;

// routes/products.route.js

router.post('/create', product_controller.product_create);


// routes/products.route.js

router.get('/:id', product_controller.product_details);
// Now let’s write the product_details controller in our controller file. Head to controllers/product.controller.js and paste the following code.
// controllers/products.controller.js
exports.product_details = function(req, res) {
    Product.findById(req.params.id, function(err, product) {
        if (err) return next(err);
        res.send(product);
    })
};