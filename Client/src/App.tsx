import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [data, setData] =  useState([]);
  // const [dataItem, setDataItem] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const location = window.location.hostname;
  // const VITE_API=import.meta.env.VITE_API;

  // const getItem = async () =>{
  //     try {
  //       const response = await axios.get(`http://${location}:3500/items`);
  //       setDataItem(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
    
  // }

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();

      if (data) {
        setData(data);
      }
    
      
    } catch (err: unknown) {
      // Cast 'err' as an Error object
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };


   useEffect(() => {
    // getItem();
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>

      {/* <div>
        <h1>Database</h1>
        <ul>
          {dataItem.map((item: { id: number; name: string }) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div> */}
     

      <div>
        <h1>Posts</h1>
        <ul>
          {data.map((post: { id: number; title: string }) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>


      
    </>
  )
}

export default App
