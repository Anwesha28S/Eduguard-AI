import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader as TableHeaderUI, TableRow } from '../components/ui/table';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Filter, Search } from 'lucide-react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ZAxis } from 'recharts';

const riskScatterData = [
    { attendance: 65, gpa: 2.1, amount: 200, name: 'Student A' },
    { attendance: 75, gpa: 2.8, amount: 150, name: 'Student B' },
    { attendance: 85, gpa: 3.2, amount: 50, name: 'Student C' },
    { attendance: 95, gpa: 3.8, amount: 10, name: 'Student D' },
    { attendance: 55, gpa: 1.8, amount: 300, name: 'Student E' },
    { attendance: 82, gpa: 2.9, amount: 100, name: 'Student F' },
    { attendance: 90, gpa: 3.5, amount: 40, name: 'Student G' },
];

const studentRiskList = [
    { id: '1', name: 'Alex Johnson', major: 'Computer Science', riskLevel: 'High', factors: ['Low Attendance', 'Failing Grades'] },
    { id: '2', name: 'Sam Smith', major: 'Electrical Eng', riskLevel: 'Medium', factors: ['Missed Assignments'] },
    { id: '3', name: 'Jordan Lee', major: 'Mathematics', riskLevel: 'Low', factors: ['None'] },
    { id: '4', name: 'Casey Woods', major: 'Physics', riskLevel: 'High', factors: ['Low Attendance', 'Behavioral'] },
];

import { PageHeader } from '../components/ui/page-header';

// ... (keep static data arrays)

export const RiskMonitoring = () => {
    return (
        <div className="flex flex-col gap-6 w-full animate-in fade-in duration-500">
            <PageHeader
                title="Risk Monitoring"
                action={<Button variant="outline"><Filter className="mr-2 h-4 w-4" /> Filter By</Button>}
            />

            <Card className="mb-2 border-l-4 border-l-primary">
                <CardHeader>
                    <CardTitle>Attendance vs GPA Correlation</CardTitle>
                    <CardDescription>Predictive visualization of student risk factors</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis type="number" dataKey="attendance" name="Attendance %" unit="%" domain={[50, 100]} />
                            <YAxis type="number" dataKey="gpa" name="GPA" unit="" domain={[1.0, 4.0]} />
                            <ZAxis type="number" dataKey="amount" range={[60, 400]} name="Risk Weight" />
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                            <Scatter name="Students" data={riskScatterData} fill="hsl(var(--destructive))" opacity={0.7} />
                        </ScatterChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle>Intervention Roster</CardTitle>
                        <CardDescription>Comprehensive list of students and detailed risk profiles</CardDescription>
                    </div>
                    <div className="relative w-64">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input type="search" placeholder="Search roster..." className="pl-8" />
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeaderUI>
                            <TableRow>
                                <TableHead>Student Name</TableHead>
                                <TableHead>Major</TableHead>
                                <TableHead>Risk Factors</TableHead>
                                <TableHead className="text-right">Risk Level</TableHead>
                            </TableRow>
                        </TableHeaderUI>
                        <TableBody>
                            {studentRiskList.map((student) => (
                                <TableRow key={student.id} className="cursor-pointer hover:bg-muted/50 transition-colors">
                                    <TableCell className="font-medium">{student.name}</TableCell>
                                    <TableCell>{student.major}</TableCell>
                                    <TableCell>
                                        <div className="flex gap-1 flex-wrap">
                                            {student.factors.map(factor => (
                                                <Badge key={factor} variant="secondary" className="text-xs">{factor}</Badge>
                                            ))}
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Badge variant={student.riskLevel === 'High' ? 'destructive' : student.riskLevel === 'Medium' ? 'warning' : 'success'}>
                                            {student.riskLevel}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
};
