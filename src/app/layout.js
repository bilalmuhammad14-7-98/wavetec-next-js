'use client';

import './globals.css';
import dynamic from 'next/dynamic';
import Providers from './providers/Providers';

// ✅ Lazy load heavy components
const Navbar = dynamic(() => import('../components/shared/Navbar/Navbar'), {
  ssr: false,
  loading: () => <div style={{ height: '60px' }}></div>,
});

const Footer = dynamic(() => import('../components/shared/Footer/Footer'), {
  ssr: false,
});

const Container = dynamic(() => import('../components/shared/Container/Container'), { ssr: false });

// export const metadata = {
//   title: 'Demo - React Query + Redux',
//   description: 'Demo of TanStack Query + Redux Toolkit integration',
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="bg-white dark:bg-[#0C0E12] min-h-screen flex flex-col">
            {/* ✅ Navbar Lazy Load */}
            <div className="sticky top-0 z-50 bg-white dark:bg-[#0C0E12]">
              <Container>
                <Navbar />
              </Container>
            </div>

            {/* ✅ Main Content */}
            <main className="flex-1">{children}</main>

            {/* ✅ Footer Lazy Load */}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
