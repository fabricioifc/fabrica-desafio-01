import React, {useEffect, useState} from 'react';
import './App.css';
function App() 
{
  const [backendData, setBackendData] = useState([{}])

  useEffect( 
    ()=> {
      fetch("/api").then(
        Response => Response.json()
      ).then(
        data => {
          setBackendData(data)
        }
      )
    }, [])

  return (
    <div>
        {(typeof backendData.users === 'undefined') ? (
            <p>Loading...</p>
          ): (
            backendData.users.map((user, i) =>(
              <p key={i} className='p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3'>{user}</p>
            ))
          )
        }
    </div>
  )
}

function header() 
{
  return (
      `<div class="dropdown-menu">
    <form class="px-4 py-3">
      <div class="mb-3">
        <label for="exampleDropdownFormEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
      </div>
      <div class="mb-3">
        <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
      </div>
      <div class="mb-3">
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="dropdownCheck">
          <label class="form-check-label" for="dropdownCheck">
            Remember me
          </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">New around here? Sign up</a>
    <a class="dropdown-item" href="#">Forgot password?</a>
  </div>`
  ); 
}

export default App