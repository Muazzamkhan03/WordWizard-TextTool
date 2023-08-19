import React from 'react';

export default function Alert(mode, message) {
    return (
        <div className={`alert alert-${mode} alert-dismissible fade show`} role="alert">
            <strong>{message}</strong> 
        </div>
    );
}
