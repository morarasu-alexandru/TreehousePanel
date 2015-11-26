var React = require('react');
var Api = require('./api');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			profileData: []
		}
	},
	componentWillMount: function() {
		Api.get()
		.then(function(data){
			this.setState({
				profileData: data
			})
		}.bind(this));
	},
	render:function() {
		return <div className="profile">
				<h2>
				Profile
					{this.renderProfileData()}
				</h2>
			</div>
	},
	renderProfileData: function() {
		return this.state.profileData.map(function(info){
			return <li>
				{info}
			</li>
		})
	}
});
