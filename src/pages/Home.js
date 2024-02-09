import React from 'react';

function Home() {
    return (
        <div className="bg-dark text-light d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="text-primary">Welcome to Our  Movie App!</h1>
                <p>
                    Here you can find the most popular movies in the world.<br/> 
                    <span className="text-warning">Click</span> on a Movie' Tap and Enjoy!
                </p>
                <img src="https://media.baamboozle.com/uploads/images/37857/1606808876_268709" 
                alt="Poster" className="w-50"/>
            </div>
        </div>
    );
}

export default Home;