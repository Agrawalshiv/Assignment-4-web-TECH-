const express = require('express');
const { Product, User, Order, Comment, Cart } = require('../models/models');

const router = express.Router();

// Products Routes
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    console.error('Error creating product:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
    res.json(product);
  } catch (err) {
    console.error('Error updating product:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error('Error deleting product:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Users Routes
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    console.error('Error creating user:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.json(user);
  } catch (err) {
    console.error('Error updating user:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error('Error deleting user:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Carts Routes
router.get('/carts', async (req, res) => {
  try {
    const carts = await Cart.find();
    res.json(carts);
  } catch (err) {
    console.error('Error fetching carts:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Carts Routes
router.post('/carts', async (req, res) => {
  try {
    const cart = new Cart(req.body);
    await cart.save();
    res.status(201).json(cart);
  } catch (err) {
    console.error('Error creating cart:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/carts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Cart.findByIdAndUpdate(id, req.body, { new: true });
    res.json(cart);
  } catch (err) {
    console.error('Error updating cart:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/carts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Cart.findByIdAndDelete(id);
    res.json({ message: 'Cart deleted successfully' });
  } catch (err) {
    console.error('Error deleting cart:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Comments Routes
router.get('/comments', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    console.error('Error fetching comments:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/comments', async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    console.error('Error creating comment:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/comments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findByIdAndUpdate(id, req.body, { new: true });
    res.json(comment);
  } catch (err) {
    console.error('Error updating comment:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/comments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Comment.findByIdAndDelete(id);
    res.json({ message: 'Comment deleted successfully' });
  } catch (err) {
    console.error('Error deleting comment:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Order Routes
router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    console.error('Error fetching orders:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/orders', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    console.error('Error creating order:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/orders/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByIdAndUpdate(id, req.body, { new: true });
    res.json(order);
  } catch (err) {
    console.error('Error updating order:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/orders/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Order.findByIdAndDelete(id);
    res.json({ message: 'Order deleted successfully' });
  } catch (err) {
    console.error('Error deleting order:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



module.exports = router;
