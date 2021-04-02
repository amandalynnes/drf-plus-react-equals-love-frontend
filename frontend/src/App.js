import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const UpVote = (id) => {
  const url = `http://127.0.0.1:8000/api/posts/${id}/up_vote/`

    axios.post(url, {
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

const DownVote = (id) => {
  const url = `http://127.0.0.1:8000/api/posts/${id}/down_vote/`

    axios.post(url, {
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

const Header = () => {
  return (
    <div>
      <p>GhostPost Machine™</p>
    </div>
  )
};

const Delete = (id) => {
      const url = `http://127.0.0.1:8000/api/posts/${id}/`
      axios.delete(url, {
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

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
      <Link to='/about'>|About|</Link>
      <Link to='/highestRated'>|Highest Rated|</Link>
      <Link to='/boasts'>|Boasts|</Link>
      <Link to='/roasts'>|Roasts|</Link>
      <Link to='/post'>|Post|</Link>


      <h1>Ghost Post Machine</h1>

      {posts.map ((p)=> (
      <ul>
        <li>post: {p.text}</li>
        <li>posted: {p.time_created}</li>
        <li>post type: {p.type_of_post}</li>
        <li>total votes: {p.total_votes}</li>
        <button onClick={() => UpVote(p.id)}>Like</button>
        <button onClick={() => DownVote(p.id)}>DisLike</button>
        <button onClick={() => Delete(p.id)}>Trash</button>
      </ul>
      ))}
    </>
  );
}

const About = () => {
	return (
		<div>
        <Header/>
				<Link to='/'>|Homepage|</Link>
				<h1>About GhostPost</h1>
        <p>
        The GhostPost Machine™ is a website where people can anonymously post Boasts or Roasts of whatever they want. 
        </p>
        <p>
        Like Twitter, there is a character limit: 280 characters.
        </p>
		</div>
	)
};

const Post = () => {
  const [values, setValues] = useState({
    text: '',
    type_of_post: '',
  })
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleTextInputChange = (event) => {
    event.persist();
      setValues((values) => ({
        ...values,
        text: event.target.value,
      }));
  };

  const handleTypeOfPostInputChange = (event) => {
    event.persist();
      setValues((values) => ({
        ...values,
        type_of_post: event.target.value,
      }));
  };

  const handleSubmit = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if(values.text && values.type_of_post) {
          setValid(true);
      }
      setSubmitted(true);
      const url = `http://127.0.0.1:8000/api/posts/`
      axios.post(url, {
        ...values
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      }
  }

	return (
		<div>
        <Header/>
				<Link to='/'>|Homepage|</Link>
				<h1>Post a Boast or Roast</h1>
        <p>
          Helpul Hint: type "BO" for "boast", or "RO for "roast" in the post type field.
        </p>
        
        <p></p>
      <form class='form' onSubmit={handleSubmit}>
        <label>
          Message:
          <input
            id="text"
            class="form-field"
            type="text"
            placeholder="Write post here"
            name="post"
            value={values.text}
            onChange={handleTextInputChange}
          />
          {submitted && !values.text && <span id="text-error">Please enter a message with less than 280 characters.</span>}

        </label>
        <p></p>
        <label>
          Post Type:
          <input
              id="type_of_post"
              class="form-field"
              type="text"
              placeholder="RO"
              name="post type"
              value={values.type_of_post}
              onChange={handleTypeOfPostInputChange}
              onKeyDown={handleSubmit}
          />
          {submitted && !values.text && <span id="type-of-post-error">Please enter valid post type: "BO" for boast or "RO" for roast.</span>}

        </label>
        {submitted && <div class='success-message'>Success! Thank you for posting.</div>}

      </form>
		</div>
	)
};

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
      <Link to='/'> |Homepage|</Link>
      <Link to='/about'>|About|</Link>
      <Link to='/boasts'>|Boasts|</Link>
      <Link to='/roasts'>|Roasts|</Link>
      <Link to='/post'>|Post|</Link>

      <h1>Highest Rated</h1>
      {highestRated.map ((h)=> (
      <ul>
        <li>post: {h.text}</li>
        <li>posted: {h.time_created}</li>
        <li>post type: {h.type_of_post}</li>
        <li>total votes: {h.total_votes}</li>
        <button onClick={() => UpVote(h.id)}>Like</button>
        <button onClick={() => DownVote(h.id)}>DisLike</button>
        <button onClick={() => Delete(h.id)}>Trash</button>
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
      <Link to='/'>|Homepage|</Link>
      <Link to='/about'>|About|</Link>
      <Link to='/highestRated'>|Highest Rated|</Link>
      <Link to='/roasts'>|Roasts|</Link>
      <Link to='/post'>|Post|</Link>


      <h1>Boasts</h1>
      {boasts.map ((b)=> (
      <ul>
        <li>post: {b.text}</li>
        <li>posted: {b.time_created}</li>
        <li>post type: {b.type_of_post}</li>
        <li>total votes: {b.total_votes}</li>
        <button onClick={() => UpVote(b.id)}>Like</button>
        <button onClick={() => DownVote(b.id)}>DisLike</button>
        <button onClick={() => Delete(b.id)}>Trash</button>
      </ul>
      ))}
    </>
  );
}

const Roasts = () => {
  const [roasts, setRoasts] = useState([])
  const url = 'http://127.0.0.1:8000/api/posts/roasts'
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setRoasts(data));
  }, [])

  return (
    <>
      <Header/>
      <Link to='/'>|Homepage|</Link>
      <Link to='/about'>|About|</Link>
      <Link to='/highestRated'>|Highest Rated|</Link>
      <Link to='/boasts'>|Boasts|</Link>
      <Link to='/post'>|Post|</Link>


      <h1>Roasts</h1>
      {roasts.map ((r)=> (
      <ul>
        <li>post: {r.text}</li>
        <li>posted: {r.time_created}</li>
        <li>post type: {r.type_of_post}</li>
        <li>total votes: {r.total_votes}</li>
        <button onClick={() => UpVote(r.id)}>Like</button>
        <button onClick={() => DownVote(r.id)}>DisLike</button>
        <button onClick={() => Delete(r.id)}>Trash</button>
      </ul>
      ))}
    </>
  );
}


export {Homepage, About, HighestRated, Boasts, Roasts, Post};
