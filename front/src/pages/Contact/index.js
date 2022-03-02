import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Contact = () => {
    const params = useParams();

    useEffect(() => {
        console.log(params);
    }, [params])
    
    return (
        <div className="Contact">
            Contact
        </div>
    )
}

export default Contact;