import React, {Component} from 'react';

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
                            <li className="item-post d-flex">
                                <img src="https://billbalo.com/wp-content/uploads/2017/07/gi%E1%BA%A5y-t%E1%BB%9D-xin-visa-nh%E1%BA%ADt-390x205.png" width="130" alt=""/>
                                <div className="item-post--detail">
                                    <div className="title">
                                        <h3>Hướng dẫn chuẩn bị giấy tờ xin Visa Nhật Bản tự túc mới nhất</h3>
                                        <span className="title-post datetime"><i className="icon-calendar"></i> <span>September 18, 2016</span></span>
                                    </div>
                                </div>
                            </li>
                            <li className="item-post d-flex">
                                <img src="https://billbalo.com/wp-content/uploads/2017/07/gi%E1%BA%A5y-t%E1%BB%9D-xin-visa-nh%E1%BA%ADt-390x205.png" width="130" alt=""/>
                                <div className="item-post--detail">
                                    <div className="title">
                                        <h3>Hướng dẫn chuẩn bị giấy tờ xin Visa Nhật Bản tự túc mới nhất</h3>
                                        <span className="title-post datetime"><i className="icon-calendar"></i> <span>September 18, 2016</span></span>
                                    </div>
                                </div>
                            </li>
                            <li className="item-post d-flex">
                                <img src="https://billbalo.com/wp-content/uploads/2017/07/gi%E1%BA%A5y-t%E1%BB%9D-xin-visa-nh%E1%BA%ADt-390x205.png" width="130" alt=""/>
                                <div className="item-post--detail">
                                    <div className="title">
                                        <h3>Hướng dẫn chuẩn bị giấy tờ xin Visa Nhật Bản tự túc mới nhất</h3>
                                        <span className="title-post datetime"><i className="icon-calendar"></i> <span>September 18, 2016</span></span>
                                    </div>
                                </div>
                            </li>
                            <li className="item-post d-flex">
                                <img src="https://billbalo.com/wp-content/uploads/2017/07/gi%E1%BA%A5y-t%E1%BB%9D-xin-visa-nh%E1%BA%ADt-390x205.png" width="130" alt=""/>
                                <div className="item-post--detail">
                                    <div className="title">
                                        <h3>Hướng dẫn chuẩn bị giấy tờ xin Visa Nhật Bản tự túc mới nhất</h3>
                                        <span className="title-post datetime"><i className="icon-calendar"></i> <span>September 18, 2016</span></span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
        )
    }
}

export default ReviewAll;