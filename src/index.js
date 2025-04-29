import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Fruites from './comp/fruites';
import Textfield from './form/textField';
import Counter from './counter/Counter';
import Button from './events/Button';
import Form from './form/form';
import ProductList from './tps/store/ProductList';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
var fruits = ["lbanan","lmawz","moska banan","dela7"]
fruits.push('l3inab')
root.render(
  <>
    {/* <Textfield inputLabel="Name" inputName ="name">
      lorem ipsum
    </Textfield>*/}
    {/* <Fruites ></Fruites>   */}
    {/* <Counter classname="m-10"/> */}
    <Form></Form>
    {/* <Button/>  */}
    {/* <ProductList/> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
