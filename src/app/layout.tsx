import type { Metadata } from 'next';
import { Montserrat as FontMontserrat } from 'next/font/google';
import { cn } from '@/common/lib/utils';
import '@/common/styles/globals.css';
import { Toaster } from 'react-hot-toast';
import ActiveSectionContextProvider from '@/common/stores/active-section';
import { ThemeProvider } from '@/common/theme/theme-provider';
import Header from '@/common/components/shared/header';
import Footer from '@/common/components/shared/footer';
import { ModeToggle } from '@/common/theme/mode-toggler';

export const metadata: Metadata = {
  title: 'Aditya Pratap Singh | Full Stack Developer & Software Engineer',
  description:
    'Aditya Pratap Singh - Full Stack Developer specializing in Python, TypeScript, Next.js, React, FastAPI, Django, and AI/ML. Computer Science Engineering student at RCOEM Nagpur with expertise in web development, cloud technologies (AWS, Docker), and scalable software solutions.',
  keywords: [
    'Aditya Pratap Singh',
    'Aditya Singh',
    'Full Stack Developer',
    'Software Engineer',
    'Web Developer',
    'Python Developer',
    'TypeScript Developer',
    'Next.js Developer',
    'React Developer',
    'FastAPI',
    'Django',
    'AI ML Engineer',
    'RCOEM Nagpur',
    'Shri Ramdeobaba College',
    'Computer Science Engineering',
    'AWS Developer',
    'Docker',
    'Software Development Intern',
    'Oorjaa',
    'Vruksh Ecosystem Foundation',
    'Portfolio',
  ],
  authors: [{ name: 'Aditya Pratap Singh' }],
  creator: 'Aditya Pratap Singh',
  publisher: 'Aditya Pratap Singh',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aditya.techii.in',
    title: 'Aditya Pratap Singh | Full Stack Developer & Software Engineer',
    description:
      'Full Stack Developer specializing in Python, TypeScript, Next.js, React, FastAPI, Django, and AI/ML. Passionate about building scalable web applications and innovative software solutions.',
    siteName: 'Aditya Pratap Singh Portfolio',
    images: [
      {
        url: '/images/photo.jpg',
        width: 1200,
        height: 630,
        alt: 'Aditya Pratap Singh - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aditya Pratap Singh | Full Stack Developer & Software Engineer',
    description:
      'Full Stack Developer specializing in Python, TypeScript, Next.js, React, FastAPI, Django, and AI/ML.',
    images: ['/images/photo.jpg'],
    creator: '@adityapratapsingh',
  },
  alternates: {
    canonical: 'https://aditya.techii.in',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  metadataBase: new URL('https://aditya.techii.in'),
};

const fontMontserrat = FontMontserrat({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aditya Pratap Singh',
    alternateName: 'Aditya Singh',
    url: 'https://aditya.techii.in',
    image: 'https://aditya.techii.in/images/photo.jpg',
    jobTitle: 'Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Oorjaa',
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Shri Ramdeobaba College of Engineering and Management',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Nagpur',
          addressCountry: 'India',
        },
      },
    ],
    knowsAbout: [
      'Python',
      'TypeScript',
      'JavaScript',
      'Next.js',
      'React',
      'FastAPI',
      'Django',
      'Flask',
      'Docker',
      'AWS',
      'Machine Learning',
      'Artificial Intelligence',
      'Web Development',
      'Software Engineering',
    ],
    sameAs: [
      'https://www.linkedin.com/in/aditya-pratap-singh-980ab9269/',
      'https://github.com/adi-tyasingh',
    ],
    description:
      'Full Stack Developer specializing in Python, TypeScript, Next.js, React, FastAPI, Django, and AI/ML. Computer Science Engineering student with expertise in building scalable web applications.',
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
      <meta name="google-site-verification" content="cZooBYtnmRvhM8Bwt-X3RAnoqPJ6-h51cU6DJKjU1-s" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          'relative flex items-center justify-center',
          fontMontserrat.className,
        )}
      >
        <div className="flex min-h-screen w-full flex-col">
          <ActiveSectionContextProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
              <Footer />
              <div className="fixed left-1 right-auto top-1 z-[99] sm:bottom-6 sm:left-6 sm:top-auto">
                <ModeToggle />
              </div>
              <Toaster position="top-right" />
            </ThemeProvider>
          </ActiveSectionContextProvider>
        </div>
      </body>
    </html>
  );
}
