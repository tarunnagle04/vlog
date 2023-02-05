import React from 'react';
import { useLocation } from 'react-router-dom';

const TechnologyFullView = () => {
    const data = useLocation().state.data;

    return (
        <div className='full-view'>
            <span>{data.title}</span>

            <img src="https://imgs.search.brave.com/cXLnoGkZ3V3A9PK9dOB2Po5LfbtbafUi3b04twavY1w/rs:fit:900:675:1/g:ce/aHR0cDovL2Jsb2cu/YWRkdGhpc2Nkbi5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTQvMTEvYWRkdGhp/cy1yZWFjdC1mbHV4/LWphdmFzY3JpcHQt/c2NhbGluZy5wbmc" alt="empty" className='full-view-img'/>

            <p>{data.description}</p>

            <p>Developer: {data.developer}</p>
        </div>
    )
}

export default TechnologyFullView