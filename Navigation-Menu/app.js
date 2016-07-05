var Menu = React.createClass({

	getInitialState : function(){
		// console.log(this);
		return{ focused : 0};

	},

	clicked : function(self,index){
		return function(){
			var x = index;
			self.setState({focused: index});
		}
		 // this.setState({focused: index});
		 // console.log(this);
	},

	render: function(){

		var self = this;

		// console.log(self);
		return(
			<div>
				<ul>{ this.props.items.map(function(m, index){
					var style= '';
					// console.log(m);
					if(self.state.focused == index){
						style = 'focused';
					}

					return <li className={style} onClick={self.clicked(self,index)}>{m}</li>
				})}
				</ul>

				<p>Selected : {this.props.items[this.state.focused]}</p>

			</div>
		);
	}
});

ReactDOM.render(
	<Menu items={['Angular', 'React', 'Meteor', 'Vue']}/>,
	document.getElementById('mydiv')
);