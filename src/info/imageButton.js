import React from 'react';
import './info.scss';

class ImageButton extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
            <div className="image-button">
                <a href={this.props.path}>
                    <div className="button-img">
                        <img src={this.props.image}/>
                    </div>
                    <div className="image-button-text">
                        <p>{this.props.text}</p>
                    </div>
                </a>
            </div>
		);
	}
}

export default ImageButton;