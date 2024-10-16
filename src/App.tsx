import { Route, Routes } from 'react-router';
import './App.css'
import { Home } from './pages';

interface RoutesProps {
  path: string;
  component: React.ReactNode;
}

const routes: RoutesProps[] = [
  {
    path: '/',
    component: <Home />
  }
];

function App() {

  return (
    <>
      <Routes>
        {routes.map((route) => {
          return <Route path={route.path} element={route.component} />
        })}
      </Routes>
    </>
  )
}

export default App
