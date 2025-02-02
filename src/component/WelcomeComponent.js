import React from 'react';
import {useAuth} from "../context/AuthContext";

/**
 * Welcome component.
 *
 * @returns {JSX.Element}
 */
export const WelcomeComponent = () => {
    const {name, organization} = useAuth();

    return (
        <div>
            <h3>Welcome {name} to the {organization} Organization !!</h3>
        </div>
    );
}
