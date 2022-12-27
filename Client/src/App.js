import {Routes,Route} from 'react-router-dom'
import Public from './components/Public';
import Login from './features/auth/Login';
import AddNewPost from './features/posts/AddNewPost';
import PostList from './features/posts/PostList';
import AddNewUser from './features/users/AddNewUser';
import UsersList from './features/users/UsersList';
import EditUser from './features/users/EditUser';
import Layout from './components/Layout';
import Home from './components/Home';
import DashLayout from './components/DashLayout';
import PersistLogin from './features/auth/PersistLogin';
import Prefetch from './features/auth/Prefetch';
import CoursesList from './features/courses/CourseList';
import AddNewCourse from './features/courses/AddNewCourse';
import NewPost from './features/posts/NewPost';
import RegisterList from './features/registeration/RegisterList';
import NewCourse from './features/courses/NewCourse';
import Register from './features/registeration/Register';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="login" element={<Login />} />


      <Route element={<PersistLogin/>}>
      <Route element={<Prefetch/>}>
        <Route path="dash" element={<Public/>}/>

         

        <Route path='/dash/users' element={<UsersList />} />
        <Route path="/dash/users/:id" element={<EditUser />} />
        <Route path="/dash/users/add" element={<AddNewUser />} />

        <Route path='dash/posts' element={<PostList />} />
            {/* <Route path=":id" element={<EditNote />} /> */}
        <Route path="/dash/posts/add" element={<NewPost />} />
        {/* </Route> */}
        <Route path='dash/courses' element={<CoursesList />} />
        <Route path='dash/courses/add' element={<NewCourse />} />
        <Route path='dash/register' element={<Register/>} />

        </Route>
        </Route>
        

  </Routes>
  );
}

export default App;
