import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Compte = () => {
    const params = useParams();

    useEffect(() => {
        console.log(params);
    }, [params])
    
    return (
        <div className="Compte">
            Compte
        </div>
    )
}

export default Compte;