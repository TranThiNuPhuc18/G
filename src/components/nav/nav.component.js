import Image from 'next/image'
import React from 'react';
// import '../nav/';
import '../nav/nav.component.css';


export function NavComponent()
{
  return (
    <>        
    <head>       
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>One Page Wonder - Start Bootstrap Template</title> 
    </head>
    <body id="page-top">
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
        {/* Bootstrap core JS */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      
        {/* Core theme JS */}
        <script src="js/scripts.js"></script>
        </body>
        </>
  );
} 
  
  export default NavComponent;