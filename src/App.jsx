
import reactLogo from './assets/react.svg'
import './App.css'
import { Link, Route, Routes, useParams, Outlet, Navigate, useNavigate, useLocation } from 'react-router-dom'
import { NavLink } from './NavLink.jsx'
import { useAuth } from './useAuth.jsx'


const Home = () => <h1>Home</h1>

const SearchPage = () => {
  const tacos = [
    'cochinita',
    'chili',
    'carnita',
    'quesadilla'

  ]
  return(
    <div>
      <h1>Search Page</h1>
      <ul>
      {tacos.map(taco =>(
        <li  key={taco}><Link  to={`/tacos/${taco}`}> {taco}</Link></li>
      ))}
      </ul>
    </div>
  )
}

const Tacos = () =>{
  const {taco} = useParams()
return (
<div>
    <h1>Tacos</h1>
      {taco}
      
      <Link to='details'> Ir a los detalles</Link>
      <Outlet />
</div>
)
} 
const TacoIndex = () =>{
return(
  <h1> Index Route de Tacos</h1>
)
}
const TacoDetails = () =>{
  const { taco } = useParams()
  return(
    <h1>Taco Details {taco}</h1>
  )
}
const Login = () =>{
  const {login} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  console.log(location.state)
  location.state 

  const handleClick = () =>{
    login()
    
    navigate(state?.location?.pathname ?? '/')
  }
  return(
    <button onClick={handleClick}>Login</button>
  )
}

const ProtectedRoute = ({children}) =>{
  const { isAuthenticated } = useAuth()
  const location = useLocation()
  if(!isAuthenticated){
    return <Navigate to='/login' state={{location}}/>
  }

  return children


}


function App() {


  return (
    <div className="App">
      <header> 
        <h1> miduchollo $</h1>
      
   <nav>
     
     <ul>
       <li>
          <NavLink to='/'> Home </NavLink>
       </li>
       <li><NavLink   to='/search-page'> Search Page </NavLink></li>
       
     </ul>
   </nav>
   </header>
    <Routes>

      <Route path="/" element={<Home/>}/>     
      <Route path="/search-page" element={<SearchPage/>}/>  
      <Route path="/tacos/:taco" element={<Tacos/>}/>
      <Route path='/login' element={<Login/>}/>
      {/* <Route path="details" element={<h1><TacoDetails /></h1>}/> */}
   
    
      
    </Routes>
    </div>
  )
}

export default App;
