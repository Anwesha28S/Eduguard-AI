import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Progress } from '../ui/progress';

interface SubjectProgressData {
    subject: string;
    progress: number;
}

interface SubjectProgressListProps {
    data: SubjectProgressData[];
}

export const SubjectProgressList = ({ data }: SubjectProgressListProps) => {
    return (
        <Card className="col-span-1 lg:col-span-3 shadow-sm border-border/50">
            <CardHeader>
                <CardTitle>Subject Progress</CardTitle>
                <CardDescription>Current standing across enrolled courses</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
                <div className="space-y-6">
                    {data.map((item, index) => (
                        <div key={index} className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="font-medium text-foreground">{item.subject}</span>
                                <span className="text-muted-foreground font-semibold">{item.progress}%</span>
                            </div>
                            <Progress value={item.progress} />
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};
