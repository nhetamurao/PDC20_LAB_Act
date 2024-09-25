import React from 'react';

function AuthError(){
    return(
        <div>
            <h1>Aithentication Error</h1>
            <p>You have exceed the maximum number of login attemps</p>
        </div>
    );
}

export default AuthError;