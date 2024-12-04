
import TR from "../../Images/TrGlasses.png"
import Accetate from "../../Images/Accetate.jpeg"
import  Sunglasses from "../../Images/Sunglasses.jpeg"
import sunglass from "../../Images/sunglass.png"
import progressive from "../../Images/progressive.png"
import computer from "../../Images/computer.png"
import eyeglass from "../../Images/eyeglass.png"
import axios from 'axios';

const consumerKey = process.env.REACT_APP_CONSUMER_KEY;
const consumerSecret = process.env.REACT_APP_CONSUMER_SECRET;


const fetchProductData = async (category) => {
  const url = `https://lincolneyewear.com/wp-json/wc/v3/products?category=${category}&per_page=10&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
  try {
    const response = await axios.get(url);
    return response.data.map(product => ({
      img: product.images[0]?.src || '',
      caption: product.name,
      id: product.id,
    }));
  } catch (error) {
    console.error('Error fetching product data:', error);
    return [];
  }
};

export const HomeDetails = [
  {
    img: eyeglass,
    caption: "Slide 1",
    title: "Eyeglasses",
    slug:"52"
  },
  {
    img: sunglass,
    caption: "Slide 2",
    title: "Sunglasses",
    slug:"53"
  },
  {
    img: computer,
    caption: "Slide 3",
    title: "Computer Glasses",
    slug:"52"
  },

  {
    img: progressive,
    caption: "Slide 4",
    title: "Progressive Lenses",
    slug:"52"
  }
];

export const HomeDetails1 = [
  {
    img:TR,
    caption: "Slide 1",
    slug:87
  },
  {
    img:Accetate,
    caption: "Slide 2",
    slug:80
  },
  {
    img:
    Sunglasses,
    caption: "Slide 3",
    slug:77
  },
  {
    img:TR,
    caption: "Slide 4",
    slug:87
  },
  {
    img:Accetate,
    caption: "Slide 5",
    slug:80
  },
  {
    img:
    Sunglasses,
    caption: "Slide 1",
    slug:77

  },
];

export const HomeDetails2 = [
  {
    name: "Blend Edit",
    img: "https://static1.lenskart.com/media/desktop/img/Sep21/blend.jpg",
    caption: "Slide 1"
  },
  {
    name: "Air Clip On",
    img: "https://static1.lenskart.com/media/desktop/img/Sep21/clipon.jpg",
    caption: "Slide 2"
  },
  {
    name: "Air Flex",
    img: "https://static1.lenskart.com/media/desktop/img/Sep21/airflex.jpg",
    caption: "Slide 3"
  },
  {
    name: "Retro Aviator",
    img: "https://static1.lenskart.com/media/desktop/img/Sep21/aviator.jpg",
    caption: "Slide 4"
  },
  {
    name: "Round",
    img: "https://static1.lenskart.com/media/desktop/img/Sep21/image179.png",
    caption: "Slide 1"
  },
  {
    name: "Cat-Eye",
    img: "https://static1.lenskart.com/media/desktop/img/Sep21/cateeye.jpg",
    caption: "Slide 1"
  },
  {
    name: "Clubmaster",
    img: "https://static1.lenskart.com/media/desktop/img/Sep21/clubmaster.jpg",
    caption: "Slide 1"
  },
  {
    name: "Transparent",
    img: "https://static1.lenskart.com/media/desktop/img/Sep21/trans.jpg",
    caption: "Slide 1"
  },
  {
    name: "Blend Edit",
    img: "https://static1.lenskart.com/media/desktop/img/Sep21/blend.jpg",
    caption: "Slide 1"
  },
  {
    name: "Air Clip On",
    img: "https://static1.lenskart.com/media/desktop/img/Sep21/clipon.jpg",
    caption: "Slide 1"
  },
  {
    name: "Air Flex",
    img: "https://static1.lenskart.com/media/desktop/img/Sep21/airflex.jpg",
    caption: "Slide 1"
  },
  {
    name: "Retro Aviator",
    img: "https://static1.lenskart.com/media/desktop/img/Sep21/aviator.jpg",
    caption: "Slide 1"
  }
];

export const HomeDetails4 = [
  {
    img:
      "https://static1.lenskart.com/media/desktop/img/June22/contact-lens-more.jpg",
    caption: "Slide 4"
  },
  {
    img:
      "https://static1.lenskart.com/media/desktop/img/June22/contact-lens-more-1.jpg",
    caption: "Slide 4"
  }
];

export const HomeDetails5 = [
  {
    img:
      "https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/call1800.jpg",
    caption: "Slide 4"
  },
  {
    img: "https://static1.lenskart.com/media/desktop/img/Nov21/whatsapp.jpg",
    caption: "Slide 4"
  },
  {
    img: "https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/hto.jpg",
    caption: "Slide 4"
  },
  {
    img:
      "https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/stores.jpg",
    caption: "Slide 4"
  }
];

export const HomeDetails6 = await fetchProductData(80);
export const HomeDetails7 = await fetchProductData(53);
export const HomeDetails8 = await fetchProductData(87);

