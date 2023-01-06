// import React, { Suspense, lazy, useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import PageLogin from './login';
import Home from './pages/home';
import About from './pages/about';
import Selfpage from '../selfpage/selfpage';

// const PageHome = lazy(() => import('./pages/home'))
// const PageAbout = lazy(() => import('./pages/about'))

const AppLayout = () => {
    const [token, setToken] = useState();


    useEffect(() => {
        setToken(Cookies.get('token'))
    }, [])

    const saveToken = (token) => {
        Cookies.set(
            'token',//key
            token,//value
            {
                expires: 7,//有效7天
                sameSite: 'strict'//只有當前url與請求目標一致才會帶上cookie
            }
        )

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
        return <PageLogin saveToken={saveToken} />;
    }

    return (
        <HashRouter>
            <div style={{ position: "relative", top: '150px' }}>

                <nav >
                    <Link to="/home">Home</Link> |
                    <Link to="/about">Abount</Link> |
                    <Link to="/self">Self</Link>
                </nav>
                {token ? <p>Welcome, {token}。<a href="##" onClick={handleLogout}>Logout</a></p> : ''}
            </div>
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
                <Route path="/" component={Home} exact />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/self" component={Selfpage} />
            </Switch>
        </HashRouter>
    );
}

export default AppLayout;
