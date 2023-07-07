import React from 'react';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';

function Home(props) {
    return (
        <>
        <Nav />
        <main className=" bg-slate-100 w-full mb-28"></main>
        <Footer />
        </>
    );
}

export default Home;