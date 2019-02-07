var root = document.getElementById("header");

var content = (
    <div class="container">
      <div class="header clearfix">
        <nav>
          <ul class="nav nav-pills float-right">
            <li class="nav-item">
              <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a src="form.html" class="nav-link" href="form.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <h3 class="text-muted">Pissawz</h3>
      </div>

      <div class="jumbotron">
        <h1 class="display-3" contenteditable="true" spellcheckker="false">Pissawz</h1>
        <p class="lead">RIGHT PRICE<div>RIGHT PIZZA</div></p>
        <p><a class="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>
      </div>
      
      <div>
        <p>Zipcode</p>
        <input type ="textbox"></input>
      </div>

    <div class="row heading">
        <h2 class="sub-heading">YOUR CHOICES</h2>
    </div>

    <div class="container-fluid" id="inventory">
        <div class="row">
            <div class="col-md-3">
                <div class="card">
                    <img class="img-fluid" src="img/cheese.jpg" alt="Card image cap" size = "180rem" ></img>
                    <button  class="button">CHEESE</button>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card">
                    <img class="img-fluid" src="img/pep.jpg" alt="Card image cap" size = "180rem"></img>
                    <button class="button">PEPPERONI</button>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card">
                    <img class="img-fluid" src="img/supreme.jpg" alt="Card image cap" size = "180rem"></img>
                    <button class="button">SUPREME</button>
                </div>
            </div>
        </div>
    </div>

    <div class="form-group">
      <label class="col-md-4 control-label" for="singlebutton">Ready?</label>
        <div class="col-md-4">
          <button id="singlebutton" name="singlebutton" class="btn btn-primary"><a src="form.html" class="nav-link" href="form.html">Submit</a></button>
        </div>
    </div>
</div>


)


ReactDOM.render(
    content, root
);
