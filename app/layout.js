import localFont from "next/font/local";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container } from 'react-bootstrap';

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} todo-app d-flex flex-column align-items-center text-light bg-dark vh-100`}>
        <header className="bg-black w-100 py-4">
        <div className="todo-header text-center my-4">
        <h1 className="text-primary fw-bold">🚀 <span className="primary-text">Todo </span><span className="sec-text">App</span></h1>
        </div>
        </header>
        <Container>
        {children}
        </Container>
  
      </body>
    </html>
  );
}