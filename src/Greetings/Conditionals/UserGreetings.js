import React from 'react';

function UserGreetings(props) {
    const isLoggedIn = props.isLoggedIn;
    return(
        <div>
            {isLoggedIn?<h1>Welcome back!</h1>:<h1>Please sign up.</h1>}
        </div>
    )

}

export default UserGreetings;