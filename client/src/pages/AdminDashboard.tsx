import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Users, AlertTriangle, UserCheck, TrendingUp } from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, Legend } from 'recharts';
import { Badge } from '../components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader as TableHeaderUI, TableRow } from '../components/ui/table';
import { PageHeader } from '../components/ui/page-header';

const riskData = [
    { name: 'Low Risk', value: 75, color: '#22c55e' },
    { name: 'Medium Risk', value: 15, color: '#f59e0b' },
    { name: 'High Risk', value: 10, color: '#ef4444' },
];

const attendanceData = [
    { name: 'Mon', percentage: 92 },
    { name: 'Tue', percentage: 88 },
    { name: 'Wed', percentage: 95 },
    { name: 'Thu', percentage: 85 },
    { name: 'Fri', percentage: 90 },
];

const performanceData = [
    { name: 'Math', score: 85 },
    { name: 'Physics', score: 78 },
    { name: 'CS', score: 92 },
    { name: 'English', score: 88 },
];

const highRiskStudents = [
    { id: '1', name: 'Alex Johnson', id_number: 'STU-001', riskScore: 88, attendance: 65, status: 'Critical' },
    { id: '2', name: 'Sam Smith', id_number: 'STU-042', riskScore: 75, attendance: 72, status: 'At Risk' },
    { id: '3', name: 'Jordan Lee', id_number: 'STU-015', riskScore: 82, attendance: 68, status: 'Critical' },
    { id: '4', name: 'Casey Woods', id_number: 'STU-088', riskScore: 71, attendance: 75, status: 'At Risk' },
];

export const AdminDashboard = () => {
    return (
        <div className="flex flex-col gap-6 w-full animate-in fade-in duration-500 pb-8">
            <PageHeader
                title="Admin Dashboard"
                description="Institution-wide overview of student metrics and risk factors."
                badge={<Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20 shadow-none">Academic Year 2023-2024</Badge>}
            />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="shadow-sm border-border/50 bg-gradient-to-br from-background to-muted/20">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Students</CardTitle>
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <Users className="h-4 w-4 text-primary" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,248</div>
                        <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                            <span className="text-success font-medium">+12%</span> from last semester
                        </p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-border/50 bg-gradient-to-br from-background to-muted/20">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium text-muted-foreground">At-Risk Students</CardTitle>
                        <div className="h-8 w-8 rounded-full bg-destructive/10 flex items-center justify-center">
                            <AlertTriangle className="h-4 w-4 text-destructive" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-destructive">124</div>
                        <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                            <span className="text-destructive font-medium">10%</span> of total population
                        </p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-border/50 bg-gradient-to-br from-background to-muted/20">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Average Attendance</CardTitle>
                        <div className="h-8 w-8 rounded-full bg-success/10 flex items-center justify-center">
                            <UserCheck className="h-4 w-4 text-success" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">92.4%</div>
                        <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                            <span className="text-success font-medium">+2.1%</span> from last week
                        </p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-border/50 bg-gradient-to-br from-background to-muted/20">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Performance Avg</CardTitle>
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <TrendingUp className="h-4 w-4 text-primary" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">84.2</div>
                        <p className="text-xs text-muted-foreground mt-1">Overall GPA 3.4</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-1 lg:col-span-4 shadow-sm border-border/50">
                    <CardHeader>
                        <CardTitle>Attendance Trends</CardTitle>
                        <CardDescription>Weekly campus-wide attendance percentage</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={attendanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.5} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} domain={[0, 100]} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: '1px solid hsl(var(--border))', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    cursor={{ stroke: 'hsl(var(--muted))', strokeWidth: 2 }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="percentage"
                                    stroke="hsl(var(--primary))"
                                    strokeWidth={3}
                                    dot={{ r: 4, strokeWidth: 2, fill: 'hsl(var(--background))' }}
                                    activeDot={{ r: 6, strokeWidth: 0, fill: 'hsl(var(--primary))' }}
                                    animationDuration={1500}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
                <Card className="col-span-1 lg:col-span-3 shadow-sm border-border/50">
                    <CardHeader>
                        <CardTitle>Risk Distribution</CardTitle>
                        <CardDescription>Student population by risk level</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px] flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={riskData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={70}
                                    outerRadius={90}
                                    paddingAngle={5}
                                    dataKey="value"
                                    stroke="none"
                                >
                                    {riskData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: '1px solid hsl(var(--border))', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Legend
                                    verticalAlign="bottom"
                                    height={36}
                                    iconType="circle"
                                    formatter={(value) => <span className="text-sm font-medium text-muted-foreground ml-1">{value}</span>}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-1 lg:col-span-3 shadow-sm border-border/50">
                    <CardHeader>
                        <CardTitle>Performance Analytics</CardTitle>
                        <CardDescription>Average scores across departments</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={performanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.5} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} domain={[0, 100]} />
                                <Tooltip
                                    cursor={{ fill: 'hsl(var(--muted))', opacity: 0.4 }}
                                    contentStyle={{ borderRadius: '8px', border: '1px solid hsl(var(--border))', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Bar dataKey="score" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} barSize={40} animationDuration={1500} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card className="col-span-1 lg:col-span-4 shadow-sm border-border/50 overflow-hidden">
                    <CardHeader>
                        <CardTitle>High-Risk Students</CardTitle>
                        <CardDescription>Students requiring immediate attention</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                        <Table>
                            <TableHeaderUI className="bg-muted/30">
                                <TableRow className="hover:bg-transparent">
                                    <TableHead className="font-semibold text-muted-foreground pl-6">Student</TableHead>
                                    <TableHead className="font-semibold text-muted-foreground">ID</TableHead>
                                    <TableHead className="font-semibold text-muted-foreground">Attendance</TableHead>
                                    <TableHead className="font-semibold text-muted-foreground">Risk Score</TableHead>
                                    <TableHead className="text-right font-semibold text-muted-foreground pr-6">Status</TableHead>
                                </TableRow>
                            </TableHeaderUI>
                            <TableBody>
                                {highRiskStudents.map((student) => (
                                    <TableRow key={student.id} className="hover:bg-muted/30 transition-colors">
                                        <TableCell className="font-medium pl-6">
                                            <div className="flex items-center gap-3">
                                                <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-[10px] border border-primary/20">
                                                    {student.name.substring(0, 2).toUpperCase()}
                                                </div>
                                                {student.name}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-muted-foreground text-xs font-mono">{student.id_number}</TableCell>
                                        <TableCell>
                                            <span className={student.attendance < 75 ? "text-destructive font-semibold flex items-center gap-1" : "flex items-center gap-1 text-muted-foreground"}>
                                                {student.attendance < 75 && <AlertTriangle className="h-3 w-3" />}
                                                {student.attendance}%
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <div className="w-16 h-2 rounded-full bg-muted overflow-hidden">
                                                    <div
                                                        className="h-full bg-destructive rounded-full"
                                                        style={{ width: `${student.riskScore}%` }}
                                                    />
                                                </div>
                                                <span className="text-xs font-medium">{student.riskScore}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right pr-6">
                                            <Badge variant={student.status === 'Critical' ? 'destructive' : 'warning'} className="shadow-none font-medium">
                                                {student.status}
                                            </Badge>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
