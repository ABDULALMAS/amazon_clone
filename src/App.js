
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from './Checkout';
import Login from "./Login";
import Layout from './Layout';
import Payment from './Payment';
import { useEffect } from 'react';
import { auth } from './firebase';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DisabledByDefault } from '@mui/icons-material';
import { useStateValue } from './StateProvider';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Orders from './Orders';

const promise = loadStripe("pk_test_51NU571SCeUd31r4pzWzzIxQ2PJMWEWaxy0awnRSWYoxTt0Qv2xPR8trVNlPKjdtEVXhFFB1rFYEYNS6yhwWcPejl00zhOKacaz")
function App() {
  const [{user},dispatch] = useStateValue();
useEffect(() =>{
  auth.onAuthStateChanged((authUser) => {

    if(authUser){
      dispatch({
        type: "SET_USER",
        user: authUser,
      });
    }
    else{
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  })
},[]);

  return (
    <Router>
    <div className="app">
      <Routes>

      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        
        <Route path="/payment" element={
        <Elements stripe={promise}>
        <Payment />
        </Elements>} />
        <Route path="/orders" element={<Orders />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    
    </div>
    </Router>
  );
}

export default App;
