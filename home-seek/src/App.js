import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import SearchRoom from './pages/SearchRooms'
import FavoriteRooms from './pages/FavoriteRooms'
import Login from './pages/Login'
import RoomPage from './pages/RoomPage'


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
  path:'/favoriteRooms',
  element:<FavoriteRooms/>
},
{
  path:'/login',
  element:<Login/>
},
{
  path:'/room',
  element:<RoomPage/>
}
]);

function App() {
 return <RouterProvider router={router}/>
}

export default App;
