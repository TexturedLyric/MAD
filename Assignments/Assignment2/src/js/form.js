var root = document.getElementById("body");

var content = (


  <body>
    <form class="form-horizontal">
      <div class="container">
        <div class="header clearfix">
          <nav>
            <ul class="nav nav-pills float-right">
              <li class="nav-item">
                <a src="PizzaPage.html" class="nav-link" href="PizzaPage.html">Home <span class="sr-only">current</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <h3 class="text-muted">Pissawz</h3>
        </div>
      </div>
    </form>

    <h1>YOUR PIZZA IS ON ITS WAY!</h1>
  </body>
)



ReactDOM.render(
    content, root
);