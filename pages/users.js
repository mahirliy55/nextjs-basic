import Link from "next/link"

const Users = ({user}) => {
    return (

        <div className="navbar">
            <h1>Spisok polzivatelya</h1>
            <ul>
                {
                    user.map((users) => (
                        <li key={users.id}>
                            <Link href={`/users/${users.id}`}>
                                <a>{users.name}</a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Link href="/">
                <a>Back to Home</a>
            </Link>
            <style jsx>
                {`
                  .navbar {
                    text-align: center;
                    background: navajowhite;
                  }

                  li {
                    margin: 10px 0;
                  }

                  li:hover {
                    text-decoration: underline;
                  }

                  a {
                    color: #000;
                    text-decoration: none;
                    font-family: sans-serif;
                    font-size: 20px;
                  }


                `}
            </style>
        </div>


    )
        ;
};

export default Users;


export async function getStaticProps(context) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const user = await response.json()
    return {
        props: {user}, // will be passed to the page component as props
    }
}
