import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Badge } from '../components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader as TableHeaderUI, TableRow } from '../components/ui/table';
import { Button } from '../components/ui/button';
import { Users, UserCheck, AlertOctagon, TrendingUp, Search, ChevronRight } from 'lucide-react';
import { Input } from '../components/ui/input';
import { PageHeader } from '../components/ui/page-header';

const attendanceTrend = [
    { name: 'Week 1', attendance: 96 },
    { name: 'Week 2', attendance: 95 },
    { name: 'Week 3', attendance: 91 },
    { name: 'Week 4', attendance: 92 },
    { name: 'Week 5', attendance: 88 },
];

const riskDistribution = [
    { name: 'Low Risk', value: 145, color: 'hsl(var(--success))' },
    { name: 'Medium Risk', value: 35, color: 'hsl(var(--warning))' },
    { name: 'High Risk', value: 12, color: 'hsl(var(--destructive))' },
];

const studentsList = [
    { id: '1', name: 'Alex Johnson', attendance: 65, score: 58, risk: 'High', course: 'CS202' },
    { id: '2', name: 'Sam Smith', attendance: 92, score: 88, risk: 'Low', course: 'CS101' },
    { id: '3', name: 'Jordan Lee', attendance: 78, score: 72, risk: 'Medium', course: 'CS412' },
    { id: '4', name: 'Taylor Swift', attendance: 45, score: 60, risk: 'High', course: 'CS305' },
    { id: '5', name: 'Morgan Davis', attendance: 88, score: 76, risk: 'Medium', course: 'CS101' },
];

export const FacultyDashboard = () => {
    return (
        <div className="flex flex-col gap-6 w-full animate-in fade-in duration-500 pb-8">
            <PageHeader
                title="Faculty Dashboard"
                description="Monitor class performance and identify at-risk students."
                badge={<Badge variant="secondary" className="px-3 py-1 font-medium bg-secondary text-secondary-foreground border border-border">CS Department</Badge>}
            />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="border-border/50 shadow-sm relative overflow-hidden">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                            <Users className="h-4 w-4 text-primary" /> Total Students
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-foreground">192</div>
                        <p className="text-xs text-muted-foreground mt-1">Across 4 courses</p>
                    </CardContent>
                </Card>

                <Card className="border-border/50 shadow-sm">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                            <UserCheck className="h-4 w-4 text-success" /> Avg Attendance
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-foreground">92.4%</div>
                        <p className="text-xs text-destructive mt-1 float-start">-1.2% from last week</p>
                    </CardContent>
                </Card>

                <Card className="border-border/50 shadow-sm">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-primary" /> Class Performance
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-foreground">84.2<span className="text-lg text-muted-foreground font-normal">/100</span></div>
                        <p className="text-xs text-muted-foreground mt-1">Overall average score</p>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-destructive shadow-sm">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                            <AlertOctagon className="h-4 w-4 text-destructive" /> At-Risk Students
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-destructive">12</div>
                        <p className="text-xs text-muted-foreground mt-1">Require immediate intervention</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <Card className="col-span-1 shadow-sm border-border/50">
                    <CardHeader>
                        <CardTitle>Risk Distribution</CardTitle>
                        <CardDescription>Current student risk levels</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[280px] flex items-center justify-center pt-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={riskDistribution}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={70}
                                    outerRadius={90}
                                    paddingAngle={5}
                                    dataKey="value"
                                    stroke="none"
                                >
                                    {riskDistribution.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', backgroundColor: 'hsl(var(--card))', color: 'hsl(var(--foreground))' }}
                                    itemStyle={{ fontWeight: 600 }}
                                />
                                <Legend verticalAlign="bottom" height={36} iconType="circle" />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card className="col-span-1 md:col-span-2 shadow-sm border-border/50">
                    <CardHeader>
                        <CardTitle>Attendance Trend</CardTitle>
                        <CardDescription>Weekly average attendance across all courses</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[280px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={attendanceTrend} margin={{ top: 5, right: 30, left: -20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} domain={['auto', 100]} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', backgroundColor: 'hsl(var(--card))', color: 'hsl(var(--card-foreground))' }}
                                    cursor={{ stroke: 'hsl(var(--muted-foreground))', strokeWidth: 1, strokeDasharray: '4 4' }}
                                />
                                <Line type="monotone" dataKey="attendance" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ strokeWidth: 2, r: 4, fill: 'hsl(var(--background))' }} activeDot={{ r: 6, fill: 'hsl(var(--primary))' }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card className="col-span-1 md:col-span-3 shadow-sm border-border/50">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <div>
                            <CardTitle>Student Risk Monitoring</CardTitle>
                            <CardDescription>Detailed overview of student performance metrics</CardDescription>
                        </div>
                        <div className="relative w-64 hidden sm:block">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search student name..."
                                className="pl-8 bg-muted/40 border-none shadow-none h-9 rounded-md"
                            />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="rounded-md border border-border/50 overflow-hidden">
                            <Table>
                                <TableHeaderUI className="bg-muted/40 h-10">
                                    <TableRow className="hover:bg-transparent">
                                        <TableHead className="w-[250px] font-semibold text-muted-foreground">Student</TableHead>
                                        <TableHead className="font-semibold text-muted-foreground">Course</TableHead>
                                        <TableHead className="font-semibold text-muted-foreground">Attendance</TableHead>
                                        <TableHead className="font-semibold text-muted-foreground">Score</TableHead>
                                        <TableHead className="font-semibold text-muted-foreground">Risk Level</TableHead>
                                        <TableHead className="text-right font-semibold text-muted-foreground"></TableHead>
                                    </TableRow>
                                </TableHeaderUI>
                                <TableBody>
                                    {studentsList.map((student) => (
                                        <TableRow key={student.id} className="group hover:bg-muted/20 transition-colors cursor-pointer">
                                            <TableCell className="font-medium">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-xs border border-primary/20">
                                                        {student.name.substring(0, 2).toUpperCase()}
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{student.name}</div>
                                                        <div className="text-xs text-muted-foreground">ID: 2024{student.id}91</div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-muted-foreground font-medium text-sm">{student.course}</TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <span className={`font-medium ${student.attendance < 75 ? 'text-destructive' : 'text-foreground'}`}>{student.attendance}%</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <span className={`font-medium ${student.score < 60 ? 'text-destructive' : 'text-foreground'}`}>{student.score}</span>
                                            </TableCell>
                                            <TableCell>
                                                {student.risk === 'High' && <Badge variant="destructive" className="bg-destructive/15 text-destructive hover:bg-destructive/25 border-transparent shadow-none">High Risk</Badge>}
                                                {student.risk === 'Medium' && <Badge variant="warning" className="bg-warning/20 text-warning-foreground hover:bg-warning/30 border-transparent shadow-none">Medium</Badge>}
                                                {student.risk === 'Low' && <Badge variant="success" className="bg-success/15 text-success hover:bg-success/25 border-transparent shadow-none">Low Risk</Badge>}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-muted-foreground group-hover:bg-background group-hover:shadow-sm">
                                                    <span className="sr-only">Open menu</span>
                                                    <ChevronRight className="h-4 w-4" />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                        <div className="flex items-center justify-between px-2 pt-4">
                            <p className="text-xs text-muted-foreground">Showing 1-5 of 192 students</p>
                            <div className="flex gap-1">
                                <Button variant="outline" size="sm" disabled className="h-8 shadow-none border-border/50 text-xs">Previous</Button>
                                <Button variant="outline" size="sm" className="h-8 shadow-none border-border/50 text-xs text-foreground bg-background hover:bg-muted font-medium">Next</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
