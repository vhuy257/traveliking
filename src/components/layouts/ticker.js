import React, {Component} from 'react';
import Ticker from 'react-ticker'
import {formatDate} from '../../formatDate';
class TickerLayout extends Component {
    render() {
        console.log(this.props.data);
        
        return (
            <div className="header-category">
                <div className="title-category">
                    <span>{this.props.sectionTitle}</span>
                    <button className="view-all">
                        View all
                    </button>
                </div>
                {   (this.props.data.length !== 0) &&
                    <Ticker mode="smooth" offset="0">
                        {() => (
                            <div className={`list-item ${this.props.layoutClass || 'default'}`}>
                                <ul className="d-flex">
                                    {
                                        this.props.data.map((item, key) => (
                                            <li className="item-post" key={key}>
                                                <img src={item.image} alt=""/>
                                                <div className="item-post--detail">
                                                    <span className="tags-category">Nhật Bản</span>
                                                    <div className="title">
                                                        <h3>{item.title}</h3>
                                                        <span className="title-post datetime"><i className="icon-calendar"></i> <span>{formatDate(item.createdAt)}</span></span>
                                                        <div className="description">
                                                            {item.description}
                                                        </div>
                                                    </div>
                                                </div>
                                            </li> 
                                        ))
                                    }
                                </ul>
                            </div>
                        )}    
                    </Ticker>
                }
            </div>
        )
    }
}

export default TickerLayout;