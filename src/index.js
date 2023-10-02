import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cart from './components/Cart';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* props is the value of argument which is passed to component from external (we pass it from ouside)like  below we pass arg to Cart component*/}
   {/* image name and joined are the attributes of the cart tag and we pass it as a argument to Cart component and behind the scene it is object  */}
   <Cart 
   image="https://randomuser.me/portraits/men/22.jpg"
   name="Mustafa"
   joined="joined in 2013"
   desc="Kristy is an art director living in New York."
   noOfFriends="4"
   />

<Cart 
   image="https://randomuser.me/portraits/women/23.jpg"
   name="Sara"
   joined="joined in 2018"
   desc="Kristy is an art director living in New York."
   noOfFriends="3"
   />
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
