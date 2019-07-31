import React, {Component} from 'react';
import  {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
        <>
            <header>
            <div className="container d-flex">
                <div className="logo">
                <h2 className="logo-text">TraveliKing</h2>
                <h4>Du lịch , Trải nghiệm,  Khám phá</h4>
                </div>
                <div className="banner">
                728 x 85
                </div>
            </div>
            </header>
            <section className="navigation">
            <div className="container">
                <ul>
                <li className="actived"><Link to="/">Home</Link></li>
                <li><Link to="/">Miền Bắc</Link></li>
                </ul>
            </div>
            </section>
        </>
        )
    }
}

export default Header;