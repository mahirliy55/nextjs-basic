import {useRouter} from "next/router"
import styles from "../../styles/user.module.scss"
import Link from "next/link"

export default function User({users}) {
    const {query} = useRouter()
    return (
        <div className={styles.user}>
            <h1>
                id : {query.id}
            </h1>
            <div>
                <ul>
                    <li>
                        Name - {users.name}
                    </li>
                </ul>
                <Link href={"/users"}>
                    <a>Back to Users</a>
                </Link>
            </div>

        </div>
    )
}

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const users = await response.json()
    return {
        props: {users}, // will be passed to the page component as props
    }
}
