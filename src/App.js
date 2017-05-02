import React from 'react';
import './App.css';
import ReactCSSTranitionGroup from 'react-addons-css-transition-group';
import ImagePreview from './components/ImagePreviewArea/ImagePreview';
import Checkout from './components/CheckoutArea/Checkout';


var Overlay = React.createClass({
  render: function() {
    return (
      <div className="Overlay" style={{'backgroundImage':'url(' + this.props.image + ')'}}>
        Something
      </div>
    );
  }
});
var Container = React.createClass({
    render: function() {
    return (
      <div className="Container">
        {this.props.children}
      </div>
    )
  }
});

var Header = React.createClass({

  render: function(){
    return (
      <header>
        <input onChange={this.props.onChange}
          type="range"
          max="100"
          min="1"
          step="1"
          />
      </header>
    );
  }
});

var App = React.createClass({
  getInitial: function(){
    return({
      mounted: false,
      people: 1,
      price: 320.00,
      tax: 15,
      duration: 5,
      discount: 5,
    });
  },

  componentDidMount: function() {
    this.setState({ mounted: true });
  },

  handleSubmit: function(e) {
    console.log('handle ajax submission here');
    e.preventDefault();
  },

  handleChange: function(e) {
    this.setState({ duration: e.target.value });
  },

  render: function() {

    var overlay, container;
    if(this.state.mounted) {
      overlay = (
        <Overlay image="https://a0.muscache.com/airbnb/static/engagement/overlay_panel7-58b03c50e1eac957ec12f6ced3bf7872.jpg" />
      );

      container = (
        <Container>
          <ImagePreview price={this.state.price}
            duration={this.state.duration}
            people={this.state.people}
            image="https://a0.muscache.com/airbnb/static/engagement/overlay_panel7-58b03c50e1eac957ec12f6ced3bf7872.jpg" />
          <Checkout duration={this.state.duration}
            discount={this.state.discount}
            tax={this.state.tax}
            price={this.state.price}
            onSubmit={this.handleSubmit} />
        </Container>
      );
    }
    return (
      <div className="App">
      <ReactCSSTranitionGroup transitionName="overlay"
        transitionEnterTimeout={500}
        tranistionLeaveTimeout={300}>
        {overlay}
      </ReactCSSTranitionGroup>
        <ReactCSSTranitionGroup transitionName="container"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {container}
        </ReactCSSTranitionGroup>
        <Header onChange={this.handleChange} />
      </div>
    );
  }
});

export default App;
