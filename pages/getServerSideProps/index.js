import React from 'react';

const index = (props) => {
   
    return (
        <div>
            welcome
        </div>
    );
}

export async function getServerSideProps(context) {
    const { params, req, res } = context
    return {
        props: {
            username: 'Farshad',
        }
    }
}

export default index;
