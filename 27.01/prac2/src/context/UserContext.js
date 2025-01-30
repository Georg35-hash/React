import { createContext } from 'react';

const UserContext = createContext(null)
export default function UserContextProvider(){
    return(
        <UserContextProvider> 
            {children}
        </UserContextProvider>
    )
}