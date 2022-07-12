import React from 'react';

const ListName = () => {
    return (
        <div className='flex justify-around'>
            <div>
                <h3 className='text-xl font-serif'>Description</h3>
            </div>
            <div>
                <h3 className='text-xl font-serif ml-20'>Price</h3>
            </div>
            <div>
                <h3 className='text-xl font-serif '>Quantity</h3>
            </div>
            <div>
                <h3 className='text-xl font-serif'>subTotal</h3>
            </div>
        </div>
    );
};

export default ListName;