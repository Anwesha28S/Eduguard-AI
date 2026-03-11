import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, UserCheck, Activity, User, LogOut, GraduationCap, QrCode } from 'lucide-react';
import { cn } from '../lib/utils';
import { useAuth } from '../store/AuthContext';

interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    to: string;
}

const NavItem = ({ icon, label, to }: NavItemProps) => {
    const location = useLocation();
    const isActive = location.pathname.startsWith(to) && to !== '/' || (to === '/' && location.pathname === '/');

    return (
        <NavLink
            to={to}
            className={cn(
                "group flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-all mb-1",
                isActive
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
            )}
        >
            <div className="flex items-center gap-3">
                {React.cloneElement(icon as React.ReactElement<any>, {
                    className: cn("h-4 w-4 transition-colors", isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground")
                })}
                {label}
            </div>
            {isActive && <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-sm" />}
        </NavLink>
    );
};

export interface SidebarProps {
    className?: string;
    onNavigate?: () => void;
}

export const Sidebar = ({ className, onNavigate }: SidebarProps) => {
    const { role, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const handleNavigation = () => {
        if (onNavigate) {
            onNavigate();
        }
    };

    return (
        <aside className={cn("hidden w-64 flex-col border-r bg-sidebar md:flex", className)}>
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <NavLink to="/" onClick={handleNavigation} className="flex items-center gap-2 font-semibold">
                    <div className="flex h-7 w-7 items-center justify-center rounded bg-primary text-primary-foreground">
                        <GraduationCap className="h-4 w-4" />
                    </div>
                    <span className="text-base tracking-tight">EduGuard AI</span>
                </NavLink>
            </div>

            <div className="flex-1 overflow-auto py-4">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                    <div className="px-3 py-2 text-[11px] font-semibold uppercase text-muted-foreground/70 tracking-wider">Overview</div>
                    <div onClick={handleNavigation}><NavItem to="/" icon={<LayoutDashboard />} label="Dashboard" /></div>

                    <div className="px-3 py-2 mt-4 text-[11px] font-semibold uppercase text-muted-foreground/70 tracking-wider">Features</div>
                    {role === 'student' && <div onClick={handleNavigation}><NavItem to="/check-in" icon={<QrCode />} label="Class Check-in" /></div>}
                    {role !== 'student' && <div onClick={handleNavigation}><NavItem to="/attendance" icon={<UserCheck />} label="Attendance" /></div>}
                    {role !== 'student' && <div onClick={handleNavigation}><NavItem to="/risk-monitoring" icon={<Activity />} label="Risk Analysis" /></div>}
                    {role !== 'student' && <div onClick={handleNavigation}><NavItem to="/students" icon={<Users />} label="Directory" /></div>}
                </nav>
            </div>

            <div className="mt-auto border-t p-4">
                <nav className="grid items-start space-y-1">
                    <div onClick={handleNavigation}><NavItem to="/profile" icon={<User />} label="Profile" /></div>
                    <button
                        onClick={handleLogout}
                        className="group flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all"
                    >
                        <LogOut className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                        Logout
                    </button>
                </nav>
            </div>
        </aside>
    );
};
