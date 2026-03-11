import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Role, User } from '../types';

interface AuthContextType {
    user: User | null;
    role: Role | null;
    login: (role: Role) => void;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [role, setRole] = useState<Role | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check local storage on mount (mocking persistence)
        const storedRole = localStorage.getItem('role') as Role | null;
        if (storedRole) {
            setRole(storedRole);
            // Mock user generation based on role
            setUser({
                id: 'usr-mocked',
                name: storedRole === 'admin' ? 'System Admin' :
                    storedRole === 'faculty' ? 'Dr. Smith' :
                        storedRole === 'student' ? 'Alex Johnson' : 'Counselor Jane',
                email: `${storedRole}@eduguard.ai`,
                role: storedRole
            });
        }
        setIsLoading(false);
    }, []);

    const login = (selectedRole: Role) => {
        localStorage.setItem('role', selectedRole);
        setRole(selectedRole);
        setUser({
            id: `usr-${Date.now()}`,
            name: `Mock ${selectedRole}`,
            email: `${selectedRole}@eduguard.ai`,
            role: selectedRole
        });
    };

    const logout = () => {
        localStorage.removeItem('role');
        setRole(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, role, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
