const specialHeader = document.querySelector('.header');
specialHeader.innerHTML = `
<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light mynav">
<div class="container-fluid">
  <a class="navbar-brand" href="#"><h2 id="logo"><span>Algo</span>Expert</h2></a>
  
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link " aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item dropdown active">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Algorithms
        </a>
        <ul class="dropdown-menu mydropdown" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="index.html">Disk Scheduling</a></li>
          <li><a class="dropdown-item" href="sorting.html">Sorting</a></li>
          <li><a class="dropdown-item" href="search.html">Searching</a></li>
        </ul>
      </li>
      
    </ul>
    <form class="d-flex">
      <input class="form-control me-1 search" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success " type="submit">Search</button>
    </form>
  </div>
</div>
</nav>
`
// specialHeader.innerHTML ="hello";

const specialFooter = document.querySelector(".footer");
specialFooter.innerHTML = `
<footer class="text-center text-white" style="background-color: #f1f1f1;">
<!-- Grid container -->
<div class="container pt-4">
  <!-- Section: Social media -->
  <section class="mb-4">
    <!-- Facebook -->
    <a
      class="btn btn-link btn-floating btn-lg text-dark m-1"
      href="#!"
      role="button"
      data-mdb-ripple-color="dark"
      ><i class="fab fa-facebook-f"></i
    ></a>

    <!-- Twitter -->
    <a
      class="btn btn-link btn-floating btn-lg text-dark m-1"
      href="#!"
      role="button"
      data-mdb-ripple-color="dark"
      ><i class="fab fa-twitter"></i
    ></a>

    <!-- Google -->
    <a
      class="btn btn-link btn-floating btn-lg text-dark m-1"
      href="#!"
      role="button"
      data-mdb-ripple-color="dark"
      ><i class="fab fa-google"></i
    ></a>

    <!-- Instagram -->
    <a
      class="btn btn-link btn-floating btn-lg text-dark m-1"
      href="#!"
      role="button"
      data-mdb-ripple-color="dark"
      ><i class="fab fa-instagram"></i
    ></a>

    <!-- Linkedin -->
    <a
      class="btn btn-link btn-floating btn-lg text-dark m-1"
      href="#!"
      role="button"
      data-mdb-ripple-color="dark"
      ><i class="fab fa-linkedin"></i
    ></a>
    <!-- Github -->
    <a
      class="btn btn-link btn-floating btn-lg text-dark m-1"
      href="#!"
      role="button"
      data-mdb-ripple-color="dark"
      ><i class="fab fa-github"></i
    ></a>
  </section>
  <!-- Section: Social media -->
</div>
<!-- Grid container -->

<!-- Copyright -->
<div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
  © 2024 Copyright:
  <a class="text-dark" href="">AlgoExpert.com</a>
</div>
<!-- Copyright -->
</footer>

`

