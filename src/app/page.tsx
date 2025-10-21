
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
        <div className="container flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DATGenie. All Rights Reserved. Designed and Developed by Christian Baccay
          </p>
           <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <span>Built with</span>
                <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-semibold hover:underline">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 327 409" className="h-[20px] w-auto mt-1" fill="currentColor">
                      <g clipPath="url(#clip0_60_3832)">
                        <path d="M122.838 267.267C134.271 271.869 146.676 274.6 159.7 275.054C177.327 275.67 194.088 272.026 209.073 265.103C191.104 258.043 174.83 247.719 160.941 234.883C151.937 249.298 138.621 260.684 122.838 267.267Z" fill="#FF9100"/>
                        <path d="M160.938 234.887C129.233 205.564 110 163.124 111.625 116.574C111.678 115.062 111.758 113.551 111.851 112.041C106.173 110.572 100.245 109.676 94.1443 109.463C85.4119 109.158 76.9555 110.241 68.9718 112.49C60.5083 127.315 55.4009 144.325 54.7647 162.546C53.1226 209.568 81.5788 250.655 122.835 267.271C138.619 260.688 151.934 249.315 160.938 234.887Z" fill="#FFC400"/>
                        <path d="M160.94 234.886C168.311 223.089 172.78 209.259 173.3 194.359C174.669 155.165 148.32 121.448 111.853 112.04C111.759 113.55 111.68 115.061 111.627 116.572C110.001 163.122 129.235 205.563 160.94 234.886Z" fill="#FF9100"/>
                        <path d="M169.222 1.86735C148.452 18.5064 132.051 40.4465 122.128 65.7209C116.447 80.1978 112.877 95.7483 111.835 112.049C148.303 121.458 174.652 155.174 173.283 194.368C172.763 209.269 168.28 223.085 160.922 234.895C174.811 247.745 191.085 258.056 209.055 265.116C245.122 248.443 270.712 212.568 272.194 170.134C273.154 142.641 262.591 118.138 247.665 97.4553C231.903 75.5811 169.222 1.86735 169.222 1.86735Z" fill="#DD2C00"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_60_3832">
                          <rect width="327" height="409" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                   <span className="font-semibold">Firebase</span>
                </a>
                <span>&</span>
                <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-semibold hover:underline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      className="h-4 w-4"
                      fill="currentColor"
                    >
                      <path d="M16 8.016A8.522 8.522 0 008.016 16h-.032A8.521 8.521 0 000 8.016v-.032A8.521 8.521 0 007.984 0h.032A8.522 8.522 0 0016 7.984v.032z" fill="url(#gemini-gradient-welcome)"></path>
                      <defs>
                        <radialGradient id="gemini-gradient-welcome" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(16.1326 5.4553 -43.70045 129.2322 1.588 6.503)">
                          <stop offset=".067" stopColor="#9168C0"></stop>
                          <stop offset=".343" stopColor="#5684D1"></stop>
                          <stop offset=".672" stopColor="#1BA1E3"></stop>
                        </radialGradient>
                      </defs>
                    </svg>
                    <span className="font-semibold">Gemini</span>
                </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

    