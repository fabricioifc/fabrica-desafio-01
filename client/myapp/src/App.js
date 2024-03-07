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
    console.log(apidb)
    grup.push(
      <>
        {(apidb == null)?(
          <>
            null
          </>
          ):(
            <>
            {apidb?.map((title, i) => {
            <a href='{apidb[i].id}' className="card m-3" style={{width: "18rem"}}>
              <img src={'#'} className="card-img-top" alt='img'/>
              <div className="card-body">
                <h5  key={i} className="card-title">{title}</h5>
                <p className="card-text">{}/10</p>
              </div>
            </a>
            })}
            </>
          )
        }
      </>
    )
    return grup
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

export default App;


function GetApi() 
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
    return backendData
}