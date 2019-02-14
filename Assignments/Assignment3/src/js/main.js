var root = document.getElementById('root');

var thingy = 

React.createElement('div', {class: 'form-group'}, 
    React.createElement('label', {for: 'textinput'}, "ZipCode",
        React.createElement('input', {id: 'textinput'}, {name:'textinput'}, {type:'text'}, {placeholder='77777'}
        )
    )
);

React.createElement('div', {class: 'form-group'}, 
    React.createElement('label', {for: 'textinput'}, "Pizza Type",
        React.createElement('input', {id: 'textinput'}, {name:'textinput'}, {type:'text'}, {placeholder='pepperoni'}
        )
    )
);

React.createElement('div', {class: 'form-group'}, 
    React.createElement('button', {id: 'form-group'}, "submit"
    )
);

ReactDOM.render(thingy, root);
/*

<!-- Text input-->
<div class="form-group">
  <label for="textinput">Zip Code</label>  
  <input id="textinput" name="textinput" type="text" placeholder="77777">
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label for="textinput">Pizza Type</label>  
  <input id="textinput" name="textinput" type="text" placeholder="pepperoni">
  </div>
</div>

<!-- Button -->
<div class="form-group">
   <button id="button" name="button">Submit</button>
  </div>
</div>
*/
