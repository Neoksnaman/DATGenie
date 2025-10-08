
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { FileUp, FileText, History, ArrowRight, FileSpreadsheet, Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <Card className="text-center hover:shadow-lg transition-shadow duration-300">
    <CardHeader className="items-center">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const vatReliefReports = [
    "Summary of Sales (SLS)",
    "Summary of Purchases (SLP)",
    "Summary of Importations (SLI)",
];

const alphalistReports = [
    "QAP – 1601EQ & 1601FQ",
    "SAWT – Summary Alphalist of Withholding Tax",
    "Annual – 1604C, 1604E & 1604F",
];

const supportedPdfs = [
    "BIR Form 2307 (Creditable Tax Withheld at Source)",
    "BIR Form 2306 (Final Tax Withheld at Source)",
    "BIR Form 2316 (Compensation Payment/Tax Withheld)",
];

export default function WelcomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center h-16">
          <div className="flex items-center space-x-2">
             <Logo className="w-8 h-8" />
             <span className="font-bold">DATGenie</span>
          </div>
          <div className="flex items-center justify-end flex-1 space-x-2">
            <Button asChild variant="ghost">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="container grid items-center gap-6 pt-12 pb-16 md:py-24">
          <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
            <div className="relative mb-4 sparkle-text">
                <Logo className="w-24 h-24 animate-float-in" />
                <span className="sparkle"></span><span className="sparkle"></span><span className="sparkle"></span><span className="sparkle"></span><span className="sparkle"></span>
            </div>
            <div className="relative mb-2 text-lg font-semibold tracking-tight text-primary sparkle-text">
                Welcome to DATGenie
                <span className="sparkle"></span><span className="sparkle"></span><span className="sparkle"></span><span className="sparkle"></span><span className="sparkle"></span>
            </div>
            <h1 className="relative text-4xl font-extrabold tracking-tighter md:text-5xl lg:text-6xl font-headline sparkle-text">
              Simplify Your BIR Compliance
              <span className="sparkle"></span><span className="sparkle"></span><span className="sparkle"></span><span className="sparkle"></span><span className="sparkle"></span>
            </h1>
            <p className="relative max-w-2xl mt-4 text-lg text-muted-foreground sparkle-text">
              DATGenie magically transforms your Excel files into BIR-ready .DAT and PDF certificates — making tax compliance less taxing.
              <span className="sparkle"></span><span className="sparkle"></span><span className="sparkle"></span><span className="sparkle"></span><span className="sparkle"></span>
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/login">
                  Get Started for Free
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/30 md:py-24">
          <div className="container px-8">
                <div className="max-w-2xl mx-auto mb-12 text-center">
                    <h2 className="text-3xl font-bold md:text-4xl font-headline">Powerful Features, Simplified</h2>
                    <p className="mt-4 text-muted-foreground">
                        Everything you need to manage your tax data efficiently.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <FeatureCard
                        icon={<FileUp className="w-6 h-6" />}
                        title="DAT File Generation"
                        description="Quickly and accurately convert your formatted Excel templates into BIR-compliant .DAT files, ready for e-submission."
                    />
                    <FeatureCard
                        icon={<FileText className="w-6 h-6" />}
                        title="PDF Certificate Generation"
                        description="Generate professional BIR Forms 2307, 2306, and 2316 from your Excel data, complete with signatory details."
                    />
                     <FeatureCard
                        icon={<FileSpreadsheet className="w-6 h-6" />}
                        title="Excel Report Generation"
                        description="Consolidate multiple monthly or quarterly DAT files into a single, easy-to-read Excel report for analysis."
                    />
                    <FeatureCard
                        icon={<History className="w-6 h-6" />}
                        title="File Management"
                        description="Securely store, preview, and download your generated .DAT files anytime from your personal dashboard."
                    />
                </div>
            </div>
        </section>

        <section className="py-16 md:py-24">
            <div className="container px-8">
                <div className="max-w-3xl mx-auto mb-12 text-center">
                    <h2 className="text-3xl font-bold md:text-4xl font-headline">Complete BIR Report & Certificate Support</h2>
                    <p className="mt-4 text-muted-foreground">
                        Generate essential BIR reports and certificates — all from one platform.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle>DAT File Generation</CardTitle>
                            <CardDescription>Generate BIR-compliant DAT files for VAT Relief and Alphalist submissions.</CardDescription>
                        </CardHeader>
                        <CardContent>
                             <ul className="space-y-2 text-sm">
                                <li>
                                    <span className="font-semibold text-sm">VAT Relief Reports</span>
                                    <ul className="pl-5 mt-1 space-y-1">
                                        {vatReliefReports.map((item, index) => (
                                            <li key={`vat-${index}`} className="flex items-start">
                                                <Check className="w-4 h-4 mr-3 text-primary flex-shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li className="pt-2">
                                     <span className="font-semibold text-sm">Alphalist Reports</span>
                                    <ul className="pl-5 mt-1 space-y-1">
                                        {alphalistReports.map((item, index) => (
                                            <li key={`alpha-${index}`} className="flex items-start">
                                                <Check className="w-4 h-4 mr-3 text-primary flex-shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle>PDF Certificate Generation</CardTitle>
                            <CardDescription>Create official BIR certificates.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm">
                                {supportedPdfs.map((item, index) => (
                                    <li key={`pdf-${index}`} className="flex items-start">
                                        <Check className="w-4 h-4 mr-3 text-primary flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
        
        <section className="pt-0 pb-16 text-center">
            <div className="container">
                <Button asChild size="lg">
                    <Link href="/login">
                      Start Generating Now
                      <ArrowRight className="ml-2" />
                    </Link>
                </Button>
            </div>
        </section>
      </main>

      <footer className="py-6 border-t md:py-8 bg-background">
        <div className="container flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DATGenie. All Rights Reserved. Designed and Developed by Christian Baccay
          </p>
        </div>
      </footer>
    </div>
  );
}
