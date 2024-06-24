import { ReactNode } from 'react'
import '../../../styles/globals.css';

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-indigo-600 text-white p-4">
        <nav className="container mx-auto">
          <h1 className="text-3xl font-bold">My Microblog</h1>
        </nav>
      </header>
      {children}
      <footer className="bg-indigo-600 text-white p-4 mt-auto">
        <div className="container mx-auto">
          <p>&copy; 2024 My Microblog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout
