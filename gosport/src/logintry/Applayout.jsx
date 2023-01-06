// import React, { Suspense, lazy, useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import PageLogin from './login';
import Home from './pages/home';
import About from './pages/about';

// const PageHome = lazy(() => import('./pages/home'))
// const PageAbout = lazy(() => import('./pages/about'))

const AppLayout =() => {
    const [token, setToken] = useState();

    useEffect(() => {
        setToken(Cookies.get('token'))
    }, [])

    const saveToken = (token) => {
        Cookies.set('token', token, {
            expires: 7,
            sameSite: 'strict'
        })

        setToken(token)
    }

    const handleLogout = (e) => {
        e.preventDefault();

        Cookies.remove('token', {
            path: ''
        })

        setToken(null);
    }

    if (!token) {
        return <PageLogin saveToken={ saveToken } />;
    }

    return (
        <HashRouter>
            <nav>
                <Link to="/home">Home</Link> | <Link to="/about">Abount</Link>
            </nav>
            { token ? <p>Welcome, { token }。<a href="##" onClick={ handleLogout }>Logout</a></p> : '' }
            <Switch>
                {/* <Route path="/" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <PageHome />
                        </Suspense>
                    } />
                <Route path="/about" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <PageAbout />
                        </Suspense>
                    } /> */}
                <Route path="/" component={Home} exact/>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
            </Switch>
        </HashRouter>
    );
}

export default AppLayout;
