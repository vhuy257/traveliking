import React, {Component} from 'react';
import  {Link} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            scrollTop: 0
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
     }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        this.setState({
            scrollTop: document.documentElement.scrollTop
        });
    }

    render() {
        return (
        <>
            <header>
            <div className="container d-flex">
                <div className="logo">
                <h2 className="logo-text"><Link to="/">TraveliKing</Link></h2>
                <h4>Tour Du lịch , Trải nghiệm,  Khám phá</h4>
                </div>
                <div className="banner">
                728 x 85
                </div>
            </div>
            </header>
            <section className={this.state.scrollTop > 126 ? 'navigation fixed' : 'navigation'}>
            <div className="container">
                <ul>
                    <li className="actived"><Link to="/">Home</Link></li>
                </ul>
            </div>
            </section>
        </>
        )
    }
}

export default Header;