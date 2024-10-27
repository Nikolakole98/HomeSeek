
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import RoomPage from './pages/RoomPage';
import SearchRooms from './pages/SearchRooms';
import FavoriteRooms from './pages/FavoriteRooms';




const router=createBrowserRouter([
{
  path:'/',
  element:<Home/>, 
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
  path:'/room',
  element:<RoomPage/>
},
{
  path:'/searchRooms',
  element:<SearchRooms/>
},
{
  path:'/favoriteRooms',
  element:<FavoriteRooms/>
}
]);
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
