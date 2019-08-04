import React, {Component} from 'react';

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
                        {
                            this.props.data.map((item, key) => (
                                <li className="item-post" key={key}>
                                    <img src={item.image} alt=""/>
                                    <div className="item-post--detail">
                                        <span className="tags-category">Nhật Bản</span>
                                        <div className="title">
                                            <h3>{item.title}</h3>
                                            <span className="title-post datetime"><i className="icon-calendar"></i> <span>{item.time}</span></span>
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
            </div>
        )
    }
}

export default ListDataLayoutDefault;