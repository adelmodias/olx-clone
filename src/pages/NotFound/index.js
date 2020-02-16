import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>Página não encontrada!</h1>
            <br />
            <Link to="./">Voltar para a home</Link>
        </div>
    );
}

export default NotFound;