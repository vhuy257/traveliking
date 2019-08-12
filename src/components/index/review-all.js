import React, {Component} from 'react';
import {formatDate} from '../../formatDate';
import {Link} from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
class ReviewAll extends Component {
    render() {
        return (
            <div className="header-category review-all">
                    <div className="title-category">
                        <span>{this.props.title}</span>
                        <button className="view-all">
                            View all
                        </button>
                    </div>
                    <div className="list-item">
                        <ul>
                            {this.props.data.map(((item, key) => (
                                <li className="item-post d-flex" key={key}>
                                    <Link 
                                    to={{
                                        pathname: `/post/${item.slug}`,
                                        state: {
                                        _id: item._id
                                        }
                                    }}>
                                        <LazyLoadImage 
                                        effect="blur"
                                        src={item.image} 
                                        width="130" 
                                        alt={item.title}/>
                                        <div className="item-post--detail">
                                            <div className="title">
                                                <h3>{item.title}</h3>
                                                <span className="title-post datetime"><i className="icon-calendar"></i> <span>{formatDate(item.createdAt)}</span></span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            )))}
                        </ul>
                    </div>
                </div>
        )
    }
}

export default ReviewAll;