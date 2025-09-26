import Providers from './providers/Providers';
import './globals.css';
import Navbar from '../components/shared/Navbar/Navbar';
import Footer from '../components/shared/Footer/Footer';
import Container from '../components/shared/Container/Container';

export const metadata = {
  title: 'Demo - React Query + Redux',
  description: 'Demo of TanStack Query + Redux Toolkit integration',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className=" bg-white dark:bg-[#0C0E12] min-h-screen flex flex-col">
            <div className="sticky top-0 z-50 bg-white dark:bg-[#0C0E12]">
              <Container>
                <Navbar />
              </Container>
            </div>
            <main className="flex-1 ">{children}</main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
