import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Mail, Phone, MapPin, Calendar, Clock, Smile } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const academicHistory = [
    { term: 'Fall 2022', gpa: 3.4 },
    { term: 'Spring 2023', gpa: 3.6 },
    { term: 'Fall 2023', gpa: 3.2 },
    { term: 'Spring 2024', gpa: 3.8 },
];

import { PageHeader } from '../components/ui/page-header';

// ... (keep static data arrays)

export const StudentProfile = () => {
    const { id } = useParams();

    return (
        <div className="flex flex-col gap-6 w-full animate-in fade-in duration-500">
            <PageHeader
                title="Student Profile"
                description={`ID: ${id || 'STU-001'}`}
                backButton
                badge={
                    <div className="flex gap-2">
                        <Badge variant="success" className="px-3 py-1 bg-success/20 text-success">Active Current Student</Badge>
                        <Badge variant="warning" className="px-3 py-1 bg-warning/20 text-warning-foreground">Medium Risk</Badge>
                    </div>
                }
            />

            <div className="grid gap-6 md:grid-cols-3">
                {/* Sidebar Info */}
                <Card className="md:col-span-1">
                    <CardHeader className="text-center pb-2">
                        <div className="mx-auto h-24 w-24 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                            <span className="text-4xl text-primary font-bold">AJ</span>
                        </div>
                        <CardTitle className="text-2xl">Alex Johnson</CardTitle>
                        <CardDescription className="text-base">Computer Science, Junior</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 pt-4">
                        <div className="flex items-center gap-3 text-sm">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span>alex.j@example.com</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>Dormitory Building 4, Room 210</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>Enrolled: Fall 2022</span>
                        </div>

                        <div className="border-t pt-4 mt-4">
                            <h4 className="font-semibold mb-2">Academic Advisor</h4>
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-xs">Dr. S</div>
                                <div className="text-sm">
                                    <div className="font-medium">Dr. Sarah Connor</div>
                                    <div className="text-xs text-muted-foreground">schonnor@eduguard.ai</div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Main Content */}
                <div className="md:col-span-2 flex flex-col gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Academic Progress</CardTitle>
                            <CardDescription>Historical GPA over enrolled terms</CardDescription>
                        </CardHeader>
                        <CardContent className="h-[250px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={academicHistory}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="term" axisLine={false} tickLine={false} />
                                    <YAxis axisLine={false} tickLine={false} domain={[0, 4.0]} />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="gpa" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ r: 6 }} activeDot={{ r: 8 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    <div className="grid gap-4 md:grid-cols-2">
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-md flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-muted-foreground" /> Attendance
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">82%</div>
                                <p className="text-sm text-muted-foreground mt-1">Below departmental average (92%)</p>
                                <div className="w-full bg-secondary h-2 rounded-full mt-4 overflow-hidden">
                                    <div className="bg-warning h-full" style={{ width: '82%' }}></div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-md flex items-center gap-2">
                                    <Smile className="h-4 w-4 text-muted-foreground" /> Sentiment Analysis
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold text-success">Positive</div>
                                <p className="text-sm text-muted-foreground mt-1">Based on counselor notes and interactions</p>
                                <div className="mt-4 flex gap-2">
                                    <Badge variant="outline" className="text-xs">Engaged</Badge>
                                    <Badge variant="outline" className="text-xs">Stressed</Badge>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};
