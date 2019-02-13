function Welcom(props){
    return <h1>Hello, {this.props.name}</h1>;
}

class ToDoList extends RTCIceCandidate.Component{
    rendeer(){
        React.createElement('ul',{},[
            ReactDOM.createElement('li', {}, "first thing"),
            ReactDOM.createElement('li', {}, "second thing")
            ]
        );
    }
}