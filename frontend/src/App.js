import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <p>Header</p>
    </div>
  )
};

const Homepage = () => {
  const [posts, setPosts] = useState([])
  const url = 'http://127.0.0.1:8000/api/posts/'
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setPosts(data));
  }, [])

  return (
    <>
      <Header/>
      <Link to='/about'>|Aboutpage|</Link>
      <Link to='/boasts'>|Boasts|</Link>

      <h1>Ghost Post Machine</h1>
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

const Aboutpage = () => {
  return (
    <div>
      <Header/>
      <h1>Aboutpage</h1>
      <Link to='/'>Go to Homepage</Link>
    </div>
  )
};

const Boasts = () => {
  const [boasts, setBoasts] = useState([])
  const url = 'http://127.0.0.1:8000/api/posts/boasts'
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setBoasts(data));
  }, [])

  return (
    <>
      <Header/>
      <Link to='/'>Go to Homepage</Link>
      <h1>Boasts</h1>
      {boasts.map ((b)=> (
      <ul>
        <li>{b.text}</li>
        <li>{b.likes}</li>
        <li>{b.dislikes}</li>
        <li>{b.time_created}</li>
        <li>{b.type_of_post}</li>
        <li>{b.total_votes}</li>
      </ul>
      ))}
    </>
  );
}

export {Homepage, Aboutpage, Boasts};
