import React, {Component} from 'react';

class BannerQC extends Component {
    render() {
        return (
            <p>
               <img src={this.props.src} alt=""/>
            </p>
        )
    }
}
export default BannerQC;