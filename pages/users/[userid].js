import React from 'react'
import { useRouter } from "next/router"
const userid = () => {
    const router = useRouter();
    console.log('router.pathname is :', router.pathname)
    console.log('router.query is :', router.query)
}

export default userid