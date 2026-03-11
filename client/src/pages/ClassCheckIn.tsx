import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { CheckCircle2, QrCode, Loader2 } from 'lucide-react';
import { PageHeader } from '../components/ui/page-header';
import { Button } from '../components/ui/button';

export const ClassCheckIn = () => {
    const [isScanning, setIsScanning] = useState(false);
    const [scanSuccess, setScanSuccess] = useState(false);

    const handleScan = () => {
        setIsScanning(true);
        setScanSuccess(false);

        // Mock scan delay
        setTimeout(() => {
            setIsScanning(false);
            setScanSuccess(true);

            // Reset success message after 5 seconds
            setTimeout(() => {
                setScanSuccess(false);
            }, 5000);
        }, 2000);
    };

    return (
        <div className="flex flex-col gap-6 w-full animate-in fade-in duration-500 pb-8">
            <PageHeader
                title="Class Check-in"
                description="Scan the QR code displayed by your faculty to register your attendance."
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* QR Scanner Widget */}
                <Card className="col-span-1 lg:col-span-2 shadow-sm border-primary/20 bg-gradient-to-b from-primary/5 to-transparent relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-primary">
                            <QrCode className="h-5 w-5" /> Code Scanner
                        </CardTitle>
                        <CardDescription>Activate your camera to scan the code</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center py-12 relative z-10">
                        {scanSuccess ? (
                            <div className="flex flex-col items-center justify-center py-6 animate-in zoom-in duration-300">
                                <div className="h-24 w-24 rounded-full bg-success/20 flex items-center justify-center mb-6">
                                    <CheckCircle2 className="h-12 w-12 text-success" />
                                </div>
                                <h3 className="text-2xl font-bold text-success">Check-in Successful!</h3>
                                <p className="text-muted-foreground text-center mt-2">
                                    Attendance recorded at {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </p>
                            </div>
                        ) : (
                            <>
                                <div className={`h-64 w-64 border-2 rounded-3xl flex items-center justify-center mb-8 relative overflow-hidden transition-all duration-300 ${isScanning ? 'border-primary border-solid shadow-[0_0_20px_rgba(var(--primary),0.3)] bg-primary/5' : 'border-primary/40 border-dashed bg-background/50 backdrop-blur-sm'}`}>
                                    {isScanning ? (
                                        <>
                                            <QrCode className="h-20 w-20 text-primary opacity-50" />
                                            {/* Scanning Animation Line */}
                                            <div className="absolute top-0 left-0 w-full h-1 bg-primary shadow-[0_0_12px_hsl(var(--primary))] animate-[scan_1.5s_ease-in-out_infinite]" />
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-full w-full animate-[scan_1.5s_ease-in-out_infinite]"></div>
                                        </>
                                    ) : (
                                        <QrCode className="h-20 w-20 text-primary/60" />
                                    )}
                                </div>
                                <Button
                                    onClick={handleScan}
                                    disabled={isScanning}
                                    className="w-64 font-semibold transition-all shadow-sm"
                                    size="lg"
                                >
                                    {isScanning ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                            Scanning code...
                                        </>
                                    ) : (
                                        "Open Camera to Scan"
                                    )}
                                </Button>
                            </>
                        )}
                    </CardContent>
                </Card>

                {/* Info Card */}
                <Card className="col-span-1 shadow-sm border-border/50">
                    <CardHeader>
                        <CardTitle className="text-lg">Instructions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm text-muted-foreground">
                        <p>1. Ensure you have granted camera permissions to the browser.</p>
                        <p>2. Point your camera at the QR code displayed on the projector or by your instructor.</p>
                        <p>3. Wait for the green confirmation screen.</p>
                        <div className="p-4 bg-muted rounded-lg mt-6 border border-border/50">
                            <p className="font-semibold text-foreground mb-1">Having trouble?</p>
                            <p>If you cannot scan the code, please ask your instructor for a manual attendance override.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
