import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import { githubdata } from './Component/api';
import Card from './Component/Card';
function App() {
  const [data, setdata] = useState([])
  const [lan,setlan]=useState("all")
  console.log(data)
  useEffect(() => {
    githubdata(lan)
    .then((res)=>{
      // console.log(res)
      setdata(res.data.items)
    })
    .catch((e)=>{
      console.log(e)
    })
  }, [lan])
  
  return (
    <div className="App">
      <div>
        <button style={{margin:'20px',padding:'4px 20px',borderRadius:'8px'}} onClick={()=>setlan("all")}>All</button>
        <button style={{margin:'20px',padding:'4px 20px',borderRadius:'8px'}} onClick={()=>setlan("html")}>HTML</button>
        <button style={{margin:'20px',padding:'4px 20px',borderRadius:'8px'}} onClick={()=>setlan("javascript")}>Javascript</button>
        <button style={{margin:'20px',padding:'4px 20px',borderRadius:'8px'}} onClick={()=>setlan("css")}>CSS</button>
      </div>
      <div className='parent' >
        
        {
          data.map((el)=>(
            <Card key={el.id} image={el.owner.avatar_url} language={el.language} watchers={el.watchers} forks={el.forks}  />
          ))
        }
      </div>
    </div>
  );
}

export default App;
