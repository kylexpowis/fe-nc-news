
import React from 'react';
import ArticlesList from "./ArticlesList";

function Home() {
    return (
        <div className="bg-gray-100">
            <header className="banner">
                <h1> This website is now offline :( </h1>
            </header>
            <nav className="bg-black text-white p-2">
                {/* ... existing nav content ... */}
            </nav>
            <main className="container mx-auto my-8">
                <ArticlesList />
            </main>
            <footer className="bg-black text-white p-4">
                {/* ... existing footer content ... */}
            </footer>
        </div>
    )
}

export default Home;


