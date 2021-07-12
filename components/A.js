import React from 'react';
import Link from "next/link"

const A = ({text, href}) => {
    return (
        <Link href={href}>
            <a>{text}</a>
        </Link>
    );
};

export default A;
