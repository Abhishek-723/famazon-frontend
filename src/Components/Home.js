import React from 'react'
import '../Styles/Home.css'

function Home() {
    return (
        <div>
            <div className="navbar">
                <div className="title">
                    <h3>Famazon</h3>
                </div>
                <div className="nav-links">
                    <ul>
                        <a href="#home"><li>Home</li></a>
                        <a href="#Products"><li>Products</li></a>
                        <a href="#Contact"><li>Contact us</li></a>
                        <a href="#Orders"><li>Orders</li></a>
                        <a href="#Help"><li>Help</li></a>
                    </ul>
                </div>
                <div className="login"><a href="login">LOGIN</a></div>
            </div>
        </div>
    )
}

export default Home
