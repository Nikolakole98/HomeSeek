import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import SearchRoom from './pages/SearchRooms'
import RoomPage from './pages/RoomPage'
import AddRoom from './pages/AddRoom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import FavoriteRooms from './pages/FavoriteRooms'
import { AuthProvider } from './context/AuthContext'


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
}

]);

function App() {
 return (
      
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>

    )
}

export default App;
