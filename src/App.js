import './App.css';
import React from 'react';

import E from './components/E';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      datos: []
    };

    this.leer = this.leer.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.emptyDatos = this.emptyDatos.bind(this);
    this.init = this.init.bind(this);
  }

  leer(){
    console.log("leer");
  }

  init(){
    let arr = [
      {
        id: 1,
        name: "name1",
        description: "fdsa"
      },
      {
        id: 2,
        name: "name2",
        description: "fdstta"
      },
      {
        id: 3,
        name: "name3",
        description: "fdsjklka"
      }
    ];
    this.setState({ datos: arr});
  }

  renderItem({ id, name, description, leer }){
    return <E leer={leer} />;
  }

  emptyDatos(){
    let size = this.state.datos.length;
    return size == 0;
  }

  render(){

    let proc = [];

    if( !this.emptyDatos() ){
      proc = this.state.datos.map(function(element){
        return <E key={element.id} leer={this.leer.bind(this)} />;
      },this);
    }
    
    return (
      <div className="App">
        {proc}
        <button onClick={this.init}>Init</button>
      </div>
    );
  }
}

export default App;
