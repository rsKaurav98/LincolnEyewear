const express = require('express');
const axios = require('axios');
const base64 = require('base-64');
const dotenv = require('dotenv');
const cors = require('cors'); // Import CORS middleware

dotenv.config();

const app = express();
const PORT = process.env.PROXY_PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Use CORS middleware
app.use(cors());

// Proxy route to fetch orders
app.get('/api/orders/:customerId', async (req, res) => {
  const customerId = req.params.customerId;
  const consumerKey = process.env.REACT_APP_CONSUMER_KEY;
  const consumerSecret = process.env.REACT_APP_CONSUMER_SECRET;

  try {
    const response = await axios.get(`https://lincolneyewear.com/wp-json/wc/v3/orders?customer=${customerId}`, {
      headers: {
        Authorization: 'Basic ' + base64.encode(`${consumerKey}:${consumerSecret}`)
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Proxy route to fetch products
app.get('/api/products/:id', async (req, res) => {
    const id = req.params.id;
    const consumerKey = process.env.REACT_APP_CONSUMER_KEY;
    const consumerSecret = process.env.REACT_APP_CONSUMER_SECRET;
  
    try {
      const response = await axios.get(`https://lincolneyewear.com/wp-json/wc/v3/products/${id}`, {
        headers: {
          Authorization: 'Basic ' + base64.encode(`${consumerKey}:${consumerSecret}`)
        }
      });
  
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get('/api/products/categories', async (req, res) => {
    const id = req.params.id;
    const consumerKey = process.env.REACT_APP_CONSUMER_KEY;
    const consumerSecret = process.env.REACT_APP_CONSUMER_SECRET;
  
    try {
      const response = await axios.get(`https://lincolneyewear.com/wp-json/wc/v3/products/categories`, {
        headers: {
          Authorization: 'Basic ' + base64.encode(`${consumerKey}:${consumerSecret}`)
        }
      });
  
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  app.get('/api/products/tags', async (req, res) => {
    const id = req.params.id;
    const consumerKey = process.env.REACT_APP_CONSUMER_KEY;
    const consumerSecret = process.env.REACT_APP_CONSUMER_SECRET;
  
    try {
      const response = await axios.get(`https://lincolneyewear.com/wp-json/wc/v3/products/tags`, {
        headers: {
          Authorization: 'Basic ' + base64.encode(`${consumerKey}:${consumerSecret}`)
        }
      });
  
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get('/api/products', async (req, res) => {
    const { page = 1, category = '', tag = '', sort = '', search = '' } = req.query;
    const perPage = 15;

    let categoryFilter = category ? `&category=${category}` : "";
    let tagFilter = tag ? `&tag=${tag}` : "";
    let sortQuery = "";

    if (sort === "lowtohigh") {
        sortQuery = "&orderby=price&order=asc";
    } else if (sort === "hightolow") {
        sortQuery = "&orderby=price&order=desc";
    }

    try {
        const response = await fetch(
        `https://lincolneyewear.com/wp-json/wc/v3/products?per_page=15&page=${page}${categoryFilter}${tagFilter}${sortQuery}&search=${encodeURIComponent(searchValue)}`,
        {
          headers: {
            'Authorization': 'Basic ' + base64.encode(`${consumerKey}:${consumerSecret}`)
          }
        }
      );

      const totalProductsCount = response.headers.get('X-WP-Total');
        const totalPages = Math.ceil(totalProductsCount / perPage);
        
        res.json({
            products: response.data,
            totalPages: totalPages,
            totalProducts: parseInt(totalProductsCount, 10) // Ensure this is an integer
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

  
  

// Start server
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
