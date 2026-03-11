import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { X } from 'lucide-react';
import { Button } from '../components/ui/button';

export const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="grid min-h-screen w-full md:grid-cols-[256px_1fr]">
            {/* Desktop Sidebar */}
            <Sidebar className="hidden md:flex bg-sidebar border-r" />

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden animate-in fade-in"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Mobile Sidebar Drawer */}
            <div className={cn(
                "fixed inset-y-0 left-0 z-50 w-72 bg-sidebar border-r shadow-lg transform transition-transform duration-300 ease-in-out md:hidden flex flex-col",
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="absolute right-4 top-4 z-50">
                    <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(false)} className="h-8 w-8 rounded-full bg-background/50 backdrop-blur-sm shadow-sm border border-border/50">
                        <X className="h-4 w-4" />
                    </Button>
                </div>
                {/* We need an extra wrapper to ensure the absolute positioned button doesn't get cut off or clash with the inner Sidebar content if it overflows */}
                <div className="flex-1 w-full bg-sidebar relative h-full flex flex-col pt-2">
                    <Sidebar className="flex flex-1 w-full border-r-0 md:hidden bg-transparent" onNavigate={() => setIsSidebarOpen(false)} />
                </div>
            </div>

            <div className="flex flex-col w-full overflow-hidden">
                <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-muted/20 overflow-x-hidden">
                    <div className="mx-auto w-full max-w-7xl">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};
