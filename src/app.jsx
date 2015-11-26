var React = require('react');
var Api = require('./api');
var Profile = require('./profile');

var Hello = React.createClass({
  render: function() {
    return <div>
	    <h1 className="red">
		    Hello!
	    </h1>
	    {this.content()}
	    </div>
  },
	content: function() {
		if(this.props.children) {
			return this.props.children
		} else {
			return <Profile />
		}
	}
});

var element = React.createElement(Hello, {});
React.render(element, document.querySelector('.container'));
