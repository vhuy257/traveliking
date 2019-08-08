import React, {Component} from 'react';
import {formatDate} from '../../formatDate';
class TwoColumns extends Component {
    render() {
        return (
            <div className="header-category">
                <div className="title-category">
                    <span>{this.props.sectionTitle}</span>
                    <button className="view-all">
                        View all
                    </button>
                </div>
                <div className={`list-item ${this.props.layoutClass}`}>
                    {
                        this.props.data &&
                        (
                            <>
                                <div className="first-item">
                                    {this.props.data[0] && (
                                        <>
                                        <img src={this.props.data[0].image} alt=""/>
                                        <div className="item-post--detail">
                                            <span className="tags-category">Nhật Bản</span>
                                            <div className="title">
                                                <h3>{this.props.data[0].title}</h3>
                                                <span className="title-post datetime"><i className="icon-calendar"></i> <span>{formatDate(this.props.data[0].createdAt)}</span></span>
                                                <div className="description">
                                                    {this.props.data[0].description}
                                                </div>
                                            </div>
                                        </div>
                                        </>
                                    )}
                                </div>
                                <ul className="d-flex">
                                    {   
                                        this.props.data.filter((item) => {return this.props.data.indexOf(item) !== 0})
                                        .map((item, key) => (
                                            <li className="item-post" key={key}>
                                                <img src={item.image} alt=""/>
                                                <div className="item-post--detail">                                                    
                                                    <div className="title">
                                                        <h3>{item.title}</h3>
                                                        <span className="title-post datetime"><i className="icon-calendar"></i> <span>{formatDate(item.createdAt)}</span></span>
                                                    </div>
                                                </div>
                                            </li> 
                                        ))
                                    }
                                </ul>
                            </>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default TwoColumns;
