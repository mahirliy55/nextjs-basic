import React from 'react';
import Link from "next/link"

const MainContainer = ({children}) => {
    return (
        <>
            <div className="navbar">
                <Link href={"/"}>
                    <a>Home</a>
                </Link>
                <Link href={"/users"}>
                    <a>User</a>
                </Link>
            </div>
            <style jsx>
                {`
                  .navbar {
                    background: navajowhite;
                    padding: 20px;
                    text-align: center;
                  }

                  a {
                    margin: 0 20px;
                    text-decoration: none;
                    color: #000;
                    font-family: sans-serif;
                    font-size: 20px;
                  }


                `}
            </style>
        </>
    );
};

export default MainContainer
