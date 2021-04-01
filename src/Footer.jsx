import React from 'react';
import ReactDOM from 'react-dom';


function Footer() {
   const d=new Date();

   return(
   <footer>
   <p>CopyRight @{d.getFullYear()}</p>
   </footer>
   );
}

export default Footer;