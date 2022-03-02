import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Panier = () => {
    const params = useParams();

    useEffect(() => {
        console.log(params);
    }, [params])
    
    return (
        <div className="Panier">
            Panier
        </div>
    )
}

export default Panier;