import React from 'react';
import { cn } from '../../lib/utils';
import { Button } from './button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PageHeaderProps {
    title: string;
    description?: string;
    action?: React.ReactNode;
    backButton?: boolean;
    className?: string;
    badge?: React.ReactNode;
}

export const PageHeader = ({ title, description, action, backButton, className, badge }: PageHeaderProps) => {
    const navigate = useNavigate();

    return (
        <div className={cn("flex flex-col gap-4 sm:flex-row sm:items-center justify-between pb-6", className)}>
            <div className="flex items-center gap-4">
                {backButton && (
                    <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="rounded-full h-8 w-8">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                )}
                <div>
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h1>
                        {badge}
                    </div>
                    {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
                </div>
            </div>
            {action && <div className="flex items-center gap-2">{action}</div>}
        </div>
    );
};
