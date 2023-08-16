import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import VideoList from './components/VideoList';
import WatchPage from './components/WatchPage';


function App() {
  
  return (
        <Provider store={store}>
          <Header />
          <Outlet />
          <Footer />
        </Provider>
  );
};

export const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <Body />,
        children: [
          {
            path: '/',
            element: <VideoList />,
          },
          {
            path: 'watch',
            element: <WatchPage />,
          },
        ]
      },
    ]
  }
]);

export default App;
