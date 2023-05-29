import React , {useState , useEffect} from 'react';
import Records from "./Components/Records";
import axios from 'axios';

function App() {
  const [show , setShow] = useState(5)
  const [data , setData] = useState([])
  const [ctr , setCtr] = useState(0)

  function handleShow(e){
    setShow(e)
    console.log(show)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/api/records/');
        setData(res.data.slice(0, show));
        setCtr(res.data.length);
      } catch (err) {
        console.log(err);
      }
    };
  
    fetchData();
  }, [show]);
  
    

  return (
    <div className="App">
      <Records data = {data} show = {handleShow} nowShow = {show} ctr = {ctr}/>
    </div>
  );
}

export default App;