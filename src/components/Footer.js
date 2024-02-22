import React from 'react';

function Footer() {
  return (
    <footer class="text-center text-white">

  <div class="container pt-4">

    <section class="mb-4">

      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.linkedin.com/in/divineede/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fa-brands fa-linkedin-in"></i></a>
      
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://github.com/divine2192"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fa-brands fa-github"></i></a>
    </section>

  </div>



  <div class="text-center text-dark p-3">
    © 2024 Copyright 
    <a class="text-dark" href="https://mdbootstrap.com/"> DivineEdeDesign.com</a>
  </div>

</footer>
  );
}

export default Footer;