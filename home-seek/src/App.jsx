import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import SearchRoom from './pages/SearchRooms'
import RoomPage from './pages/RoomPage'
import AddRoom from './pages/AddRoom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import FavoriteRooms from './pages/FavoriteRooms'
import AdminPage from './pages/AdminPage'
import { AuthProvider } from './context/AuthContext'
import { isSupabaseConfigured } from './lib/supabase'


const router=createBrowserRouter([
 
{
  path:'/',
  element:<Home/>
},
{
  path:'/searchRooms',
  element:<SearchRoom/>
},
{
  path:'/room/:id',
  element:<RoomPage/>
},
{
  path:'/addRoom',
  element:<AddRoom/>
},
{
  path:'/login',
  element:<Login/>
},
{
  path:'/signUp',
  element:<SignUp/>
},
{
  path:'/favoriteRooms',
  element:<FavoriteRooms/>
},
{
  path:'/admin',
  element:<AdminPage/>
}

]);

function App() {
 if (!isSupabaseConfigured) {
  return (
      <main className="setupNotice">
        <h1>Supabase nije podešen</h1>
        <p>Upišite REACT_APP_SUPABASE_URL i REACT_APP_SUPABASE_ANON_KEY u fajl .env.local i ponovo pokrenite aplikaciju.</p>
      </main>
  )
 }

 return (
      
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>

    )
}

export default App;
