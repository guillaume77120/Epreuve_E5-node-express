import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Produits = () => {
    const params = useParams();

    useEffect(() => {
        console.log(params);
    }, [params])
    
    return (
        <div className="Produits">
            Produits

        </div>
    )
}

export default Produits;