import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { CheckCircle2, AlertCircle, Bell, Beaker, Calendar, BookOpen, GraduationCap, Target } from 'lucide-react';
import { PageHeader } from '../components/ui/page-header';
import { AttendanceChart } from '../components/features/AttendanceChart';
import { SubjectProgressList } from '../components/features/SubjectProgressList';

const performanceData = [
    { name: 'Week 1', score: 85 },
    { name: 'Week 2', score: 82 },
    { name: 'Week 3', score: 88 },
    { name: 'Week 4', score: 92 },
    { name: 'Week 5', score: 89 },
];

const subjectProgress = [
    { subject: 'CS101', progress: 95 },
    { subject: 'MTH201', progress: 82 },
    { subject: 'PHY105', progress: 78 },
    { subject: 'ENG101', progress: 88 },
];

export const StudentDashboard = () => {
    return (
        <div className="flex flex-col gap-6 w-full animate-in fade-in duration-500 pb-8">
            <PageHeader
                title="Welcome back, Emily"
                description="Here is your academic overview for the semester."
                badge={<Badge variant="success" className="text-sm px-3 py-1 flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4" /> Low Risk Status</Badge>}
            />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/20 shadow-sm relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 p-4 opacity-10 transform rotate-12">
                        <GraduationCap className="h-24 w-24 text-primary" />
                    </div>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                            <Target className="h-4 w-4" /> Current GPA
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-foreground">3.8<span className="text-lg text-muted-foreground font-normal">/4.0</span></div>
                        <p className="text-xs text-primary mt-2 font-medium bg-primary/10 inline-block px-2 py-1 rounded-md">+0.2 from last term</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                            <Calendar className="h-4 w-4" /> Attendance Rate
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">96%</div>
                        <div className="w-full bg-muted rounded-full h-2 mt-3 overflow-hidden">
                            <div className="bg-success h-2 rounded-full" style={{ width: '96%' }}></div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">Classes attended: 42/44</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                            <BookOpen className="h-4 w-4" /> Assignments
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">24<span className="text-lg text-muted-foreground font-normal">/26</span></div>
                        <p className="text-sm text-muted-foreground mt-2">2 remaining this week</p>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-success relative overflow-hidden">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-success" /> Risk Status
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-success mb-1">Low Risk</div>
                        <p className="text-xs text-muted-foreground leading-snug">Excellent attendance and consistent performance.</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <AttendanceChart data={performanceData} />

                <Card className="col-span-1 flex flex-col shadow-sm border-border/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Bell className="h-5 w-5 text-primary" /> Recent Alerts
                        </CardTitle>
                        <CardDescription>Important updates and messages</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <div className="space-y-4">
                            <div className="flex gap-3 bg-muted/40 p-3 rounded-xl border border-border/50 transition-colors hover:bg-muted/60">
                                <AlertCircle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
                                <div>
                                    <div className="text-sm font-semibold text-card-foreground">CS305 Assignment Due</div>
                                    <div className="text-xs text-muted-foreground mt-0.5">Tomorrow, 11:59 PM</div>
                                </div>
                            </div>
                            <div className="flex gap-3 bg-muted/40 p-3 rounded-xl border border-border/50 transition-colors hover:bg-muted/60">
                                <Beaker className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <div>
                                    <div className="text-sm font-semibold text-card-foreground">Physics Lab Rescheduled</div>
                                    <div className="text-xs text-muted-foreground mt-0.5">Friday, 2:00 PM - Room 4B</div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <SubjectProgressList data={subjectProgress} />
            </div>
        </div>
    );
};
