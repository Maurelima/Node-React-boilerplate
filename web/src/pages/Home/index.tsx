import React, { useContext } from 'react';

import { useAuth } from '../../hooks/AuthContext';

const Home: React.FC = () => {
    const { handleLogout } = useAuth();
    return (
        <>
            <div style={{ backgroundColor: 'green' }}>
                <button type="button" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </>
    );
};
export default Home;
