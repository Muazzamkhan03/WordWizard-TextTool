import React from 'react';

export default function Alert({mode}) {
    return (
        mode && <div className={`alert alert-${mode.mode} alert-dismissible fade show`} role="alert"> 
            <strong>{mode.message}</strong> 
        </div>
    );
}
