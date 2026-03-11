import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader as TableHeaderUI, TableRow } from '../components/ui/table';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Download, Plus, Search } from 'lucide-react';

const studentsList = [
    { id: 'STU-001', name: 'Alex Johnson', email: 'alex.j@example.com', major: 'Computer Science', year: 'Junior', status: 'Active' },
    { id: 'STU-042', name: 'Sam Smith', email: 'sam.s@example.com', major: 'Electrical Eng', year: 'Sophomore', status: 'Active' },
    { id: 'STU-015', name: 'Jordan Lee', email: 'jordan.l@example.com', major: 'Mathematics', year: 'Senior', status: 'Inactive' },
    { id: 'STU-088', name: 'Casey Woods', email: 'casey.w@example.com', major: 'Physics', year: 'Freshman', status: 'Active' },
    { id: 'STU-102', name: 'Emily Chen', email: 'emily.c@example.com', major: 'Computer Science', year: 'Junior', status: 'Active' },
];

import { PageHeader } from '../components/ui/page-header';

// ... (keep static data arrays)

export const StudentsDirectory = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-6 w-full animate-in fade-in duration-500 pb-8">
            <PageHeader
                title="Students Directory"
                description="Manage and view all student administrative records."
                action={
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="hidden md:flex shadow-sm bg-background border-border/50 text-muted-foreground hover:text-foreground"><Download className="mr-2 h-4 w-4" /> Export</Button>
                        <Button size="sm" className="shadow-sm"><Plus className="mr-2 h-4 w-4" /> Add Student</Button>
                    </div>
                }
            />

            <Card className="shadow-sm border-border/50 overflow-hidden">
                <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-muted/10 pb-4 border-b border-border/30">
                    <div>
                        <CardTitle>All Students</CardTitle>
                        <CardDescription>A complete list of students enrolled.</CardDescription>
                    </div>
                    <div className="relative w-full sm:w-72">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input type="search" placeholder="Search by name, ID, or email..." className="pl-9 h-9 bg-background shadow-sm border-border/50" />
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeaderUI className="bg-muted/30">
                            <TableRow className="hover:bg-transparent">
                                <TableHead className="font-semibold text-muted-foreground pl-6">Student ID</TableHead>
                                <TableHead className="font-semibold text-muted-foreground">Name</TableHead>
                                <TableHead className="hidden md:table-cell font-semibold text-muted-foreground">Email</TableHead>
                                <TableHead className="hidden lg:table-cell font-semibold text-muted-foreground">Major</TableHead>
                                <TableHead className="hidden sm:table-cell font-semibold text-muted-foreground">Year</TableHead>
                                <TableHead className="text-right font-semibold text-muted-foreground pr-6">Status</TableHead>
                            </TableRow>
                        </TableHeaderUI>
                        <TableBody>
                            {studentsList.map((student) => (
                                <TableRow
                                    key={student.id}
                                    className="cursor-pointer hover:bg-muted/30 transition-colors group"
                                    onClick={() => navigate(`/students/${student.id}`)}
                                >
                                    <TableCell className="font-mono text-xs text-muted-foreground pl-6">{student.id}</TableCell>
                                    <TableCell className="font-medium">
                                        <div className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-xs border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                                {student.name.substring(0, 2).toUpperCase()}
                                            </div>
                                            <span className="group-hover:text-primary transition-colors">{student.name}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell text-muted-foreground text-sm">{student.email}</TableCell>
                                    <TableCell className="hidden lg:table-cell text-sm">{student.major}</TableCell>
                                    <TableCell className="hidden sm:table-cell text-muted-foreground text-sm">{student.year}</TableCell>
                                    <TableCell className="text-right pr-6">
                                        <Badge variant={student.status === 'Active' ? 'success' : 'secondary'} className="shadow-none font-medium">
                                            {student.status}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <div className="flex items-center justify-between px-6 py-4 border-t border-border/30 bg-muted/10">
                        <p className="text-xs text-muted-foreground">Showing 1-5 of 1,248 students</p>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" disabled className="h-8 shadow-none border-border/50 text-xs bg-background">Previous</Button>
                            <Button variant="outline" size="sm" className="h-8 shadow-none border-border/50 text-xs text-foreground bg-background hover:bg-muted font-medium">Next</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
