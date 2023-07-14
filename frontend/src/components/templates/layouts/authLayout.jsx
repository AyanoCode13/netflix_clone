import { Suspense, lazy } from 'react';

const AuthNavbar = lazy(() => import('../Navbar'));
export default function AuthLayout({children}){
    return (
        <div className="Layout">
      <header>
        <Suspense>
            <AuthNavbar/>
        </Suspense>
      </header>

      <main >
        <div
          style={{
            paddingTop: 80,
            width:"100%"
          }}
        >
         {children}
        </div>
      </main>
    </div>
    )
}