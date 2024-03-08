import React, {useEffect, useState, Component} from 'react';
import './App.css';

const App = () =>{
  return(
    <div className='App'>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

class Header extends Component
{
  render()
  {
    return (
      <header>
        <nav className="navbar bg-info">
          <div className="container-fluid col-10">
            <a href='#' className="navbar-brand">Navbar</a>
            <form className="d-flex" role="search">
              <input name="search" type="search" className="form-control me-2" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </header>
    )
  }
};

class Content extends Component
{

  generateCards()
  {
    const grup = []
    const apidb = GetApi()

    if (apidb.hasOwnProperty("results")) {
      apidb.result.map((item, i)=>{
        <>
        <a href='{}' className="card m-3" style={{width: "18rem"}}>
          <img src={'#'} className="card-img-top" alt='img'/>
          <div className="card-body">
            <h5 key={i} className="card-title">{item.title}</h5>
            <p className="card-text">{}/10</p>
          </div>
        </a>
      </>
      })
      grup.push(
        <>
          <a href='{}' className="card m-3" style={{width: "18rem"}}>
            <img src={'#'} className="card-img-top" alt='img'/>
            <div className="card-body">
              <h5 className="card-title">{apidb.result}</h5>
              <p className="card-text">{}/10</p>
            </div>
          </a>
        </>
      )
      return grup
    }else
    {
      return (
                <a href='#' className="card m-3" style={{width: "18rem"}}>
                    loading
                </a>
        )
    }
  }

  render()
  {
    return (
      <main className="d-flex flex-wrap justify-content-between align-items-start container-fluid col-11 m-5" style={{minHeight: "75vh"}}>
        <>
          <this.generateCards/>
        </>
      </main>
    )
  }
}

class Footer extends Component
{
  render()
  {
    return (
      <footer className="p-5 bg-primary">
      </footer>
    )
  }
}

/*
adult
: 
false
backdrop_path
: 
"/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg"
genre_ids
: 
(3) [28, 12, 878]
id
: 
693134
media_type
: 
"movie"
original_language
: 
"en"
original_title
: 
"Dune: Part Two"
overview
: 
"Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee."
popularity
: 
1380.555
poster_path
: 
"/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg"
release_date
: 
"2024-02-27"
title
: 
"Dune: Part Two"
video
: 
false
vote_average
: 
8.456
vote_count
: 
985
*/

function GetApi() 
{
  const [backendData, setBackendData] = useState([{}])

  useEffect( 
    ()=> {
      fetch("/api").then(
        response => response.json()
      ).then(
        data => {
          setBackendData(data)
        }
      )
    }, [])
    return backendData
}

export default App;