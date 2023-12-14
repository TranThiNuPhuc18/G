import Image from 'next/image'
import React from 'react';
import '../styles/app.css'

export default function Page()
{
  // return <h1>Hello</h1>
  return (
        // <header class="masthead text-center text-white">
        <>        
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container px-5">
                <a className="navbar-brand" href="#page-top">GARA TRUNG HẬU</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="service.html">DỊCH VỤ</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">LIÊN HỆ</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <header className="masthead text-center text-white">
            <div className="masthead-content">
                <div className="container px-5">
                    <h1 className="masthead-heading mb-0">One Page Wonder</h1>
                    <h2 className="masthead-subheading mb-0">Will Rock Your Socks Off</h2>
                </div>
            </div>
            <div className="bg-circle-1 bg-circle"></div>
            <div className="bg-circle-2 bg-circle"></div>
            <div className="bg-circle-3 bg-circle"></div>
            <div className="bg-circle-4 bg-circle"></div>
        </header>

        </>

     
     
     // <div >
            //     <div>
            //         <h1> One Page Wonder</h1>
            //         <h2>Will Rock Your Socks Off</h2>
            //     </div>
            // </div>
  );
} 