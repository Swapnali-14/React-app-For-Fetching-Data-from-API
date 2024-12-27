
import React,{useEffect,useState} from 'react';
function App() {
  const[data,setData]=useState([]);
  useEffect(()=>{
    fetch('https://dummyapi.online/api/movies')
    .then(response=>response.json())
    .then(data=>setData(data))
    .catch(error=>console.error('Error in Data Catching'));

  },[])

  return (
  <div>
  
  <table border="1">
  <tr>
    <th>Id</th>
    <th>Movie</th>
    <th>Rating</th>
    <th>image</th>
    <th>Image_url</th>

  </tr>
  <td>{data.map(item=>(
    <tr>{item.id}</tr>
  ))}</td>

  <td>{data.map(item=>(
    <tr>{item.movie}</tr>
  ))}
</td>

<td>{data.map(item=>(
    <tr>{item.rating}</tr>
  ))}
</td>

<td>{data.map(item=>(
    <tr>{item.image}</tr>
  ))}
</td>

<td>{data.map(item=>(
    <tr>{item.imdb_url}</tr>
  ))}
</td>

  
  
</table>
  </div>
  );
}

export default App;
