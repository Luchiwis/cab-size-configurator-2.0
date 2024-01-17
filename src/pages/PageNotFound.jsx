// hooks
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function PageNotFound(){
    const Navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            Navigate('/');
        }, 3000);
    }, []);
    
    return (
        <main>
            <div className="container text-center">
                <div className="row">
                    <h1 className="display-4">This page does not exist</h1>
                </div>
            </div>
        </main>
    )
}