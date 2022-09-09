import React from 'react';
import { Routes, BrowserRouter, Route, useRoutes } from 'react-router-dom';
import MainLayout from './hoc/mainLayout';

import Home from './components/home';
import Contact from './components/contact';
import Header from './components/header';
import PostComponent from './components/posts';


const App = () => {
    let routes = useRoutes([
        { path: "/article/:id", element: <PostComponent /> },
        { path: "/contact", element: <Contact /> },
        { path: "/", element: <Home /> }
        // ...
    ]);
    return routes;
};


const Routers = () => (
    <BrowserRouter>
        <Header />
        <MainLayout>

            <Routes>
                <Route path="/article/:id" exact element={PostComponent} />
                <Route path="/contact" exact element={Contact} />
                <Route path="/" exact element={Home} />
                <App />
            </Routes>
        </MainLayout>
    </BrowserRouter>
)


export default Routers