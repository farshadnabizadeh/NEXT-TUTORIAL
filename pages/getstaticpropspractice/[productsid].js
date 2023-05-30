import React from 'react';
import fs from 'fs/promises';
import path from "path";

const productsid = (props) => {
    const { loadedproduct } = props
    return (
        <>
            <div>
                <div>{loadedproduct.title}</div>
                <div>{loadedproduct.price}</div>
            </div>
        </>
    );
}

// context works Like useRouter
// we can not use useRouter in getStaticProps
// context is an object that we can access to URL in getStaticProps function 
// we will get Error if we use just getStaticProps , because , we are using dynamic route
// we need to use getStaticPaths , because , we are using dynamic route


const getData = async () => {
    const filePath = path.join(process.cwd(), 'data', 'products.json')
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)
    return data;
}

export async function getStaticProps(context) {
    const { params } = context
    const productid = params.productsid
    // we use await to stop process . because we must calculate getData
    const data = await getData()
    const product = data.products.find((item) => item.id === productid)
    return {
        props: {
            loadedproduct: product
        }
    }
}

// getStaticPaths return  only an Object
export async function getStaticPaths() {
    const data = await getData()
    const ids = data.products.map((item) => item.id)
    const params = ids.map((item) => ({ params: { productsid: item } }))
    return {
        paths: params,
        fallback: false,
    }
}

export default productsid;
