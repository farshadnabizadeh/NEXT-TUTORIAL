import React from 'react';
import Link from "next/link";
const index = () => {
    return (
        <div className='w-full min-h-[100vh] flex justify-center'>
            <div>
                <div><Link href='/products/1/80?DATA=THIS IS TEST'>CLICK HERE . . .</Link></div>
                <div>
                    <Link href={{
                        pathname: '/products/[userid]',
                        query: { userid: '80' }
                    }}>CLICK HERE . . . </Link>
                </div>
                <div>
                    <Link href={{
                        pathname: '/products/[...slug]',
                        query: { slug: '/1/12/8080?DATA=NEXT.JS' }
                    }}>CLICK HERE . . . </Link>
                </div>
            </div>
        </div>
    );
}

export default index;
