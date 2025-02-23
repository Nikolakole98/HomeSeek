import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import SearchRoom from './pages/SearchRooms'
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
  path:'/room',
  element:<RoomPage/>
}

]);

function App() {
 return (
      
      <RouterProvider router={router}/>
    
        
    )
}

export default App;
