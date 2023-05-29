import React from 'react';
import fs from 'fs/promises';
import path from "path";

const index = (props) => {
    const { products } = props
    return (
        <div className='w-full flex justify-center py-5'>
            <ul>
                {
                    products.map((item) => (
                        <li key={item.id}>
                            {item.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
// getStaticprops only render Elements from Server
// getStaticProps is one of pre-rendering methodes
// getStaticProps always return an Object
// getStaticProps provides filesystem
export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data', 'products.json')
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)
    return {
        props: {
            products: data.products
        }
    }
}

export default index;
