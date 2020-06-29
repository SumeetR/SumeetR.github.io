import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ImageGrid from './components/ImageGrid';

interface State {
  tag?: string;
}

class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      tag: undefined
    };
  }

  setTag = (tag?: string) => {
    this.setState({tag});
  };
  
  render() {
    const {tag} = this.state;
    return (
      <div>
        <NavBar tag={tag} setTag={this.setTag}/>
        <ImageGrid tag={tag} setTag={this.setTag}/>
      </div>
    );
  }
}

export default App;
