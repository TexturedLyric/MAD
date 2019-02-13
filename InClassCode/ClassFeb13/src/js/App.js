
var root = document.getElementById('root');

var thingy = React.createElement('div', null,
    React.createElement('ToDoList', null));

ReactDOM.render(thingy, root);