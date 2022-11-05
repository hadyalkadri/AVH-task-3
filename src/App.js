import React, { useEffect, useState } from 'react'; 
import Card from './components/Card';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import BounceLoader from 'react-spinners/BounceLoader';
import CardTwo from './components/CardTwo';



function App() {

  const [api, setAPI] = useState('');
  const [display, setDisplay] = useState([]);
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [push, setPush] = useState(false);
  const [magic, setMagic] = useState(false);

  useEffect(() => {
    fetchAPI();
  }, [])

  useEffect(() => {
    fetchAPI1();
  }, [])

  const displayCard = (api) => {
    // setDisplay(true);
    switch(api){
      case 'http://45.9.190.133:6339/avh/api/avhNews':
        setAPI(api);
        break;
      case 'http://45.9.190.133:6339/avh/api/getTopNews':
        setAPI(api);
        break;    
    }
  }
//   const test = () =>{
//     const array = Array.isArray(display)
//     console.log(array)
//     console.log(`display is ${array}`)
//   }

  const fetchAPI1 = () =>{
    const API = 'http://45.9.190.133:6339/avh/api/avhNews';
    
    fetch(API)
      .then((res) => {
        return res.json();
      })
      .then(
        (APi) => {
          setDisplay(APi);
        }
      )
    
  }



  const fetchAPI = () =>{
    const API = 'http://45.9.190.133:6339/avh/api/getTopNews'
    fetch(API)
      .then((res) => {
        return res.json();
      })
      .then(
        (APi) => {
          console.log(APi)
          setData(APi);
          setLoading(false);
          setPush(true);
        }
      )
    
  }

  return (
    <div className='main'>
        <NavBar />
        <Header />
        {loading ? <BounceLoader color='white' style={{'position': 'relative', 'left': '630px'}}/>
        :
        <Card 
          data = {data}
          show = {show}
          setShow = {setShow}
        />}
        <CardTwo 
          display = {display}
        />
        {/* {magic ? : null}
        <button onClick={() => {displayCard('http://45.9.190.133:6339/avh/api/avhNews'); setMagic(true)}}>Magic Button</button> */}
    <Footer 
      push = {push}
    />
    </div>
  )
}

export default App