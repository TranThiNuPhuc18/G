import Image from 'next/image'
import React from 'react';
import '../styles/app.css'

export default function Page()
{
  // return <h1>Hello</h1>
  return (
        // <header class="masthead text-center text-white">
            
    <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div class="container px-5">
            <a class="navbar-brand" href="#page-top">GARA TRUNG HẬU</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="service.html">DỊCH VỤ</a></li>
                    <li class="nav-item"><a class="nav-link" href="#!">LIÊN HỆ</a></li>
                </ul>
            </div>
        </div>
    </nav>
            // <div >
            //     <div>
            //         <h1> One Page Wonder</h1>
            //         <h2>Will Rock Your Socks Off</h2>
            //     </div>
            // </div>
  );
} 