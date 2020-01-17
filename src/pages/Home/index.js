import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Página inicial</h1>
            <br />
            <Link to="/sobre">Página Sobre</Link>
        </div>
    );
}

export default Home;