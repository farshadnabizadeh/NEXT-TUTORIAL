import React from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
const index = () => {
    const router = useRouter();
    const LinkProcess = () => {
        router.push('/products/12/21')
    }
    const BlogProcess = () => {
        router.push({
            pathname: '/blog/[userid]',
            query: { userid: 12 }
        })
    }
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
                <div>
                    <button className='p-5 bg-slate-900 text-lg text-white rounded-md my-12' onClick={(e) => LinkProcess()}>
                        go to products
                    </button>
                </div>
                <div>
                    <button className='p-5 bg-slate-900 text-lg text-white rounded-md my-12' onClick={(e) => BlogProcess()}>
                        go to blog
                    </button>
                </div>
            </div>
        </div>
    );
}

export default index;
