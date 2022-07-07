import React from 'react';
import { Navbar, Home, Brands, Features, Packages, Testimonials, Serve} from './containers';

const App = () => {
  return (
    <div>
        <header className='xl:px-[112px] md:px-[80px] px-[40px]'>
            <Navbar />
            <Home />
        </header>
        <main className='xl:px-[112px] md:px-[80px] px-[40px]'>  
            <Brands />
            <Features />
            <Packages />
            <Testimonials />
            <Serve />
        </main>
    </div>
  )
}

export default App