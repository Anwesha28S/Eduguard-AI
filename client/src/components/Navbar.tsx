import { Bell, Search, Menu, Moon, Sun } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';

interface NavbarProps {
    onMenuClick?: () => void;
}

export const Navbar = ({ onMenuClick }: NavbarProps) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check initial theme
        const isDark = document.documentElement.classList.contains('dark');
        setIsDarkMode(isDark);
    }, []);

    const toggleTheme = () => {
        const root = document.documentElement;
        if (isDarkMode) {
            root.classList.remove('dark');
            setIsDarkMode(false);
            localStorage.setItem('theme', 'light');
        } else {
            root.classList.add('dark');
            setIsDarkMode(true);
            localStorage.setItem('theme', 'dark');
        }
    };

    return (
        <header className="flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-md px-4 lg:px-6 sticky top-0 z-30">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuClick}>
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
            </Button>

            <div className="w-full flex-1">
                <form>
                    <div className="relative group max-w-md">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <Input
                            type="search"
                            placeholder="Search students, courses, or events..."
                            className="w-full appearance-none bg-muted/50 border-none pl-9 focus-visible:ring-1 focus-visible:bg-background transition-all shadow-none rounded-full h-9"
                        />
                    </div>
                </form>
            </div>

            <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full text-muted-foreground hover:text-foreground">
                    {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    <span className="sr-only">Toggle theme</span>
                </Button>
                <Button variant="ghost" size="icon" className="relative rounded-full text-muted-foreground hover:text-foreground">
                    <Bell className="h-5 w-5" />
                    <span className="absolute right-2 top-2 flex h-2 w-2 rounded-full bg-destructive border-2 border-background"></span>
                    <span className="sr-only">Toggle notifications</span>
                </Button>
                <div className="h-6 w-px bg-border mx-1 hidden sm:block"></div>
                <div className="flex items-center gap-3 ml-1 cursor-pointer hover:bg-muted/50 p-1.5 px-2 rounded-full transition-colors">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold shadow-sm border border-primary/20">
                        <span className="text-sm font-medium">JD</span>
                    </div>
                    <div className="hidden flex-col md:flex items-start">
                        <span className="text-sm font-semibold leading-none">John Doe</span>
                        <span className="text-xs text-muted-foreground mt-1">Admin</span>
                    </div>
                </div>
            </div>
        </header>
    );
};
