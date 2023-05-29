import React from 'react';
import Link from "next/link";
const index = () => {
    return (
        <div className='w-full min-h-[100vh] flex justify-center'>
            <div>
                <Link href='/products/1/80?DATA=THIS IS TEST'>CLICK HERE . . .</Link>
            </div>
        </div>
    );
}

export default index;
