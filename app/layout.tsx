import { ReactNode } from 'react';
import TanStackProvider from '../components/TanStackProvider/TanStackProvider';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './globals.css';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'NoteHub',
  description: 'NoteHub - Personal notes management',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </TanStackProvider>
      </body>
    </html>
  );
}
