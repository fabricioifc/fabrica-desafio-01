import React, {useEffect, useState, Component} from 'react';
import './App.css';

const App = () =>{
  return(
    <div className='App p-0' style={{maxWhith: "100wv"}}>
      <Header/>
      {(window.location.pathname === '/')?(
        <Content/>
      ):(
        <Details/>
      )}
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

class Details extends Component{
  getItem()
  {
    const id = window.location.pathname
    const apidb = GetApi()
    //gambiara 
    //n consegui verificar o formato json estava completo, mas pelo vato de sempre vir com propriedade length isso da certo quando é ao menos 1 item
    if (apidb.length >= 2) {
      let i = 0
      for(i = 0; i < apidb.length; i++){
        if(("/"+apidb[i].id) !== id){
          break;
        }
      }
      if(apidb.length >= i)
      {
        let grup = []
        let element = apidb[i];
        //name or title
        let title = element["title"] + ""
        if(title === 'undefined'){
          title = element["name"]
        }
        grup.push(
          <>
            <div className="card m-3 link-underline link-underline-opacity-0 m-3" style={{width: "18rem", height: "18rem"}}>
              <img src={`https://image.tmdb.org/t/p/w300/${element.backdrop_path}`} className="card-img-top" alt='img'/>
              <div className="card-body d-flex flex-wrap justify-content-start" style={{height: "100%"}}>
                <h5 className="fw-bolder card-title align-self-start col-12" title={title}>{title}</h5>
                <p className="card-text align-self-end col-12">{element.popularity}⭐</p>
              </div>
            </div>
          </>
        )
        return grup
      }else{
        return (
          <div>
              not found
          </div>
        )
      }
    }else
    {
      return (
        <div>
            loading
        </div>
      )
    }

  }

  render()
  {
    return (
      <this.getItem/>
    )
  }
}

class Content extends Component
{

  generateCards()
  {
    let grup = []
    const apidb = GetApi()
    //gambiara 
    //n consegui verificar o formato json estava completo, mas pelo vato de sempre vir com propriedade length isso da certo quando é ao menos 1 item
    if (apidb.length >= 2) {
      for (let i = 0; i < apidb.length; i++) {
        const element = apidb[i];

        //name or title
        let title = element["title"] + ""
        if(title === 'undefined'){
          title = element["name"]
        }

        grup.push(
          <>
            <a href={element.id} className="card m-3 link-underline link-underline-opacity-0 m-3" style={{width: "18rem", height: "18rem"}}>
              <img src={`https://image.tmdb.org/t/p/w300/${element.backdrop_path}`} className="card-img-top" alt='img'/>
              <div className="card-body d-flex flex-wrap justify-content-start" style={{height: "100%"}}>
                <h5 className="fw-bolder card-title align-self-start col-12" title={title}>{title}</h5>
                <p className="card-text align-self-end col-12">{element.popularity}⭐</p>
              </div>
            </a>
          </>
        )
      }
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
      <main className="d-flex flex-wrap justify-content-center align-items-start container-fluid col-12 p-0" style={{minHeight: "75vh"}}>
        <div className='d-flex flex-wrap justify-content-between align-items-start container-fluid col-10'>
          <>
            <this.generateCards/>
          </>
        </div>
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