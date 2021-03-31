import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [posts, setPosts] = useState([])
  const url = 'http://127.0.0.1:8000/api/posts/'
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setPosts(data));
  }, [])
  return (
    <>
      <h1>hello govna</h1>
      {posts.map ((p)=> (
      <ul>
        <li>{p.text}</li>
        <li>{p.likes}</li>
        <li>{p.dislikes}</li>
        <li>{p.time_created}</li>
        <li>{p.type_of_post}</li>
        <li>{p.total_votes}</li>
      </ul>
      ))}
    </>
  );
}

export default App;
