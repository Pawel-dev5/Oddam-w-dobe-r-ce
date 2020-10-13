import React from "react";

const Hero = ({ handleLogout }) => {
    return (

    <section>
        <nav>
            <h1>Welcome!</h1>
            <button onClick={handleLogout}>LogOut</button>
        </nav>
    </section>
    )
}

export default Hero;
