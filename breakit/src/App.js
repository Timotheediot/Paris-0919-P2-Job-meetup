import React from 'react';
import Footer from './components/Footer';
import ListFilter from './components/ListFilter';
import './App.css';
import Filter from './components/Filter';
import MenuBurger from './components/MenuBurger';
import SimpleExample from './components/SimpleExample'
import Parameters from './components/Parameters'
class App extends React.Component {
  state = {
    isDisplayed: false,
    activeparameters: false,
  }

  footerClick = () => {
    this.setState({ isDisplayed: !this.state.isDisplayed })
  }

  toggleClassParameters = () => {
    const currentState = this.state.activeparameters;
    this.setState({
      activeparameters: !currentState
    })
  }

  render() {
    return (
      <div>
        <MenuBurger toggleClassParameters={this.toggleClassParameters} activeparameters={this.state.activeparameters} className="menuburger" />
        <SimpleExample className="simpleexample" state={this.state} />
        {this.state.isDisplayed ? <Filter className="filter" /> : null}
        {this.state.isDisplayed ? <ListFilter className="listfilter" /> : null}
        <Footer className="footer" state={this.state} footerClick={this.footerClick} />
        <Parameters toggleClassParameters={this.toggleClassParameters} activeparameters={this.state.activeparameters} />
      </div>
    );
  }
}

export default App;
