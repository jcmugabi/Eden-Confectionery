import React from 'react';
import { Link } from 'react-router-dom';

export function MenuBtn() {
    return (
        <div>
            <Link to="/cakes">
                <button type="button" className="btn btn-success btn-lg">Our Cakes</button>
            </Link>
        </div>
    )
}