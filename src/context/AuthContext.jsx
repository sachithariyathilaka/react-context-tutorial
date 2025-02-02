import {createContext, useContext} from "react";

const AuthContext = createContext(undefined);

/**
 * Auth provider function
 *
 * @returns {JSX.Element}
 */
export function AuthProvider({ children }) {
    const authData = {
       name: 'Sachith Ariyathilaka',
       token: 'JWT123',
       organization: 'Medium'
    };

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
}

/**
 * Auth consumer function
 *
 * @returns {JSX.Element}
 */
export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined)
        throw new Error('useAuth must be used within the AuthProvider');

    return context;
}