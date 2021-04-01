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
      <Link to='/highestRated'>|Highest Rated|</Link>
      <Link to='/boasts'>|Boasts|</Link>

      <h1>Ghost Post Machine</h1>
      {posts.map ((p)=> (
      <ul>
        <li>post: {p.text}</li>
        <li>num of likes: {p.likes}</li>
        <li>num of dislikes: {p.dislikes}</li>
        <li>posted: {p.time_created}</li>
        <li>post type: {p.type_of_post}</li>
        <li>total votes: {p.total_votes}</li>
      </ul>
      ))}
    </>
  );
}

const HighestRated = () => {
  const [highestRated, sethighestRated] = useState([])
  const url = 'http://127.0.0.1:8000/api/posts/highest_rated'
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => sethighestRated(data));
  }, [])

  return (
    <>
      <Header/>
      <Link to='/'>Go to Homepage</Link>
      <h1>Highest Rated</h1>
      {highestRated.map ((h)=> (
      <ul>
        <li>post: {h.text}</li>
        <li>num of likes: {h.likes}</li>
        <li>num of dislikes: {h.dislikes}</li>
        <li>posted: {h.time_created}</li>
        <li>post type: {h.type_of_post}</li>
        <li>total votes: {h.total_votes}</li>
      </ul>
      ))}
    </>
  );
}

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
        <li>post: {b.text}</li>
        <li>num of likes: {b.likes}</li>
        <li>num of dislikes: {b.dislikes}</li>
        <li>posted: {b.time_created}</li>
        <li>post type: {b.type_of_post}</li>
        <li>total votes: {b.total_votes}</li>
      </ul>
      ))}
    </>
  );
}

export {Homepage, HighestRated, Boasts};
