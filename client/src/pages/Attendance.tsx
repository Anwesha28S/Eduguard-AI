import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { QrCode, FileText } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader as TableHeaderUI, TableRow } from '../components/ui/table';
import { Badge } from '../components/ui/badge';
import { PageHeader } from '../components/ui/page-header';

const recentAttendance = [
    { id: '1', date: '2023-11-15', course: 'CS101', student: 'Alex Johnson', status: 'Present' },
    { id: '2', date: '2023-11-15', course: 'CS101', student: 'Sam Smith', status: 'Absent' },
    { id: '3', date: '2023-11-15', course: 'CS202', student: 'Jordan Lee', status: 'Present' },
    { id: '4', date: '2023-11-14', course: 'CS305', student: 'Emily Chen', status: 'Late' },
];

export const Attendance = () => {
    return (
        <div className="flex flex-col gap-6 w-full animate-in fade-in duration-500 pb-8">
            <PageHeader
                title="Attendance Management"
                description="Scan student QR codes or manage manual attendance entries."
                action={
                    <Button variant="outline" className="gap-2 bg-background shadow-sm border-border/50">
                        <FileText className="h-4 w-4" /> Export Report
                    </Button>
                }
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <Card className="col-span-1 xl:col-span-1 border-primary/20 bg-gradient-to-b from-primary/5 to-transparent relative overflow-hidden shadow-sm">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-10 -mt-10 blur-3xl"></div>
                    <CardHeader className="relative z-10 pb-4">
                        <CardTitle className="flex items-center gap-2 text-primary"><QrCode className="h-5 w-5" /> QR Scanner</CardTitle>
                        <CardDescription>Activate camera to scan student IDs</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center pt-2 pb-6 relative z-10">
                        <div className="h-48 w-48 border-2 border-dashed border-primary/40 rounded-2xl flex items-center justify-center bg-background/50 backdrop-blur-sm mb-6 shadow-sm relative overflow-hidden group hover:border-primary/60 transition-colors">
                            <QrCode className="h-16 w-16 text-primary/80 group-hover:text-primary transition-colors" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-full w-full animate-[scan_2s_ease-in-out_infinite]"></div>
                        </div>
                        <Button className="w-full font-semibold shadow-sm">Start Scanning Session</Button>
                    </CardContent>
                </Card>

                <Card className="col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-3 shadow-sm border-border/50">
                    <CardHeader>
                        <CardTitle>Recent Records</CardTitle>
                        <CardDescription>Latest attendance logs across all classes</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="rounded-md border border-border/50 overflow-hidden">
                            <Table>
                                <TableHeaderUI className="bg-muted/40 h-10">
                                    <TableRow className="hover:bg-transparent">
                                        <TableHead className="font-semibold text-muted-foreground w-[120px]">Date</TableHead>
                                        <TableHead className="font-semibold text-muted-foreground">Course</TableHead>
                                        <TableHead className="font-semibold text-muted-foreground">Student</TableHead>
                                        <TableHead className="text-right font-semibold text-muted-foreground">Status</TableHead>
                                    </TableRow>
                                </TableHeaderUI>
                                <TableBody>
                                    {recentAttendance.map((record) => (
                                        <TableRow key={record.id} className="hover:bg-muted/20 transition-colors">
                                            <TableCell className="text-muted-foreground text-sm font-medium">{record.date}</TableCell>
                                            <TableCell className="font-medium">{record.course}</TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-[10px]">
                                                        {record.student.substring(0, 2).toUpperCase()}
                                                    </div>
                                                    <span className="font-medium text-sm">{record.student}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <Badge
                                                    variant={
                                                        record.status === 'Present' ? 'success' :
                                                            record.status === 'Absent' ? 'destructive' : 'warning'
                                                    }
                                                    className="shadow-none border-transparent font-medium"
                                                >
                                                    {record.status}
                                                </Badge>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
