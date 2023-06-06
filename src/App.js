import { BrowserRouter as Router , Routes,Route } from "react-router-dom";
import React,{useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Varieties from './components/varieties'
import { Provider } from "react-redux";
import store from "./Store/Store";
import Cart from "./pages/Cart";
import HeroSection from "./pages/HeroSection";
import Footer from "./components/Footer";



function App() {

const cakes =  [
  {
   "id" :1,
    "title" :"Berry White Cream Cake",
    "image" : "https://cdn.pixabay.com/photo/2016/10/27/22/12/cakes-1776661_1280.jpg",
    "price" : parseInt(500),
    "rating" :4,
  },
  {
   "id" :2,
    "title" :"Chocolate Pastries",
    "image" : "https://th.bing.com/th/id/OIP.fM1KKgbOaZdgmwDRVQ4tVwHaE8?w=304&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    "price" : parseInt(500),
    "rating" :5,
  },
  {
   "id" :3,
    "title" :"Fruit Cake",
    "image" :"https://th.bing.com/th/id/OIP.N9sRIGvVplriyMBJgc9G7AHaFC?pid=ImgDet&w=191&h=129&c=7&dpr=1.5",
    "price" : parseInt(800),
    "rating" :3,
  },
  {
   "id" :4,
    "title" :"Cream Cup Cake",
    "image" :"https://th.bing.com/th/id/OIP.7fNrgz618No9ZiT8pi_AagHaE7?pid=ImgDet&w=191&h=127&c=7&dpr=1.5",
    "price" : parseInt(100),
    "rating" :5,
  },
  {
   "id" :5,
    "title" :"Sweet Desserts",
    "image" : "https://cdn.pixabay.com/photo/2016/03/16/21/14/sweet-dessert-1261776_1280.jpg",
    "price" :parseInt(250),
    "rating" :4,
  },
  {
   "id" :6,
    "title" :"Fruit Pastry",
    "image" : "https://images.pexels.com/photos/827513/pexels-photo-827513.jpeg?auto=compress&cs=tinysrgb&w=600",
    "price" : parseInt(150),
    "rating" :3,
  },
  {
   "id" :7,
    "title" :"Oreo Cream Ban",
    "image" : "https://th.bing.com/th/id/OIP.-rv8NjhJ9Fdx6qMwf5PFywHaE9?pid=ImgDet&w=1023&h=685&rs=1",
    "price" : parseInt(80),
    "rating" :5,
  },
  {
   "id" :8,
    "title" :"Multi cake Pieces",
    "image" : "https://th.bing.com/th/id/OIP.4wIMIoIaPOSinYRlF3D7LwHaE7?pid=ImgDet&w=1024&h=682&rs=1",
    "price" : parseInt(80),
    "rating" :3,
  }
 ]






  return (
    <Router>

      <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Varieties" element={<Varieties cakes={cakes}/>}/>
      </Routes>
      <Footer/>
    </Provider>
    </Router>
    

  );
}

export default App;
