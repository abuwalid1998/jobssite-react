import './App.css'

import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from "./Pages/HomePage.jsx";
import Navbar from "./Components/Navbar.jsx";
import JobsPage from "./Pages/JobsPage.jsx";
import AddJobPage from "./Pages/AddJobPage.jsx";
import NotFound from "./Pages/NotFound.jsx";
import SingleJop, {JobLoader} from "./Components/Templates/SingleJop.jsx";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
            <Route index path='/home' element={<HomePage />} />
            <Route path='/jobs' element={<JobsPage />} />
            <Route path='/jobs/:id' element={<SingleJop />} loader={JobLoader}/>
            <Route index path='/add-job' element={<AddJobPage />} />
            <Route path='*' element={<NotFound />} />

        </Route>
    )
);

function App() {

  return (
    <>
        <Navbar logged={true}/>
        <RouterProvider router={router}/>
    </>
);



}

export default App
