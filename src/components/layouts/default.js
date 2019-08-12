import React, {Component} from 'react';
import {formatDate} from '../../formatDate';
import {Link} from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

class ListDataLayoutDefault extends Component {
    render() {        
        return (
            <div className="header-category">
                <div className="title-category">
                    <span>{this.props.sectionTitle}</span>
                    <button className="view-all">
                        View all
                    </button>
                </div>
                <div className={`list-item ${this.props.layoutClass || 'default'}`}>
                    <ul className="d-flex">
                        {   this.props.data && 
                            this.props.data.map((item, key) => (
                                <li className="item-post" key={key}>
                                    <Link 
                                    to={{
                                        pathname: `/post/${item.slug}`,
                                        state: {
                                        _id: item._id
                                        }
                                    }}>
                                        <LazyLoadImage
                                        alt={item.name}
                                        effect="blur"
                                        src={item.image}/>
                                        <div className="item-post--detail">
                                            {item.tags &&
                                                item.tags.map((item, key) => (
                                                    <span className="tags-category" key={key}>{item.name}</span>
                                                ))
                                            }
                                            <div className="title">
                                                <h3>{item.title}</h3>
                                                <span className="title-post datetime"><i className="icon-calendar"></i> <span>{formatDate(item.createdAt)}</span></span>
                                                <div className="description">
                                                    {item.description}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default ListDataLayoutDefault;