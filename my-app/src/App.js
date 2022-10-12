import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home';
import QuizItem from './Components/QuizItem/QuizItem';
import Statistics from './Components/Statistics/Statistics';
import Topics from './Components/Topics/Topics';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
    
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader:()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/topics',
          element: <Topics></Topics>
        },
        {
          path: '/statistics',
          element:<Statistics></Statistics>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path : 'topics/topics:id',
          loader:({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <QuizItem></QuizItem>
        },
        {
          path: '*',
          element: <div> Data not found </div>
        }
        
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
