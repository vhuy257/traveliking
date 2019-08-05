import React, {Component} from 'react';
import Slider from "react-slick";
import {connect} from 'react-redux';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  ROUTES from '../../constants/routes';
import {formatDate} from '../../formatDate';
import {
  getData
} from '../../redux/actions/apiActions';

import {
  getListTopicSuccess
} from '../../redux/actions/topicActions';

var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
};

const apiURL = `${ROUTES.API_BASE_URL}api/post/listposts/20`;

class HightLight extends Component {
    componentDidMount() {
      this.props.dispatch(getData(apiURL, getListTopicSuccess))
    }

    render() {
        return (
        <section className="container post-random">
          <div className="column">
            <div className="slider-wrapper--main">
              <Slider {...settings}>
                {
                  this.props.topic &&
                  this.props.topic.listTopic.map((item, key) => (
                    <div className="item" key={key}>
                      <div className="wrapper-title">
                        <img src={item.image} alt=""/>
                        <span className="title-post tags-category">{item.category}</span>
                        <h3 className="title-post">{item.title}</h3>
                        <span className="title-post datetime"><i className="icon-calendar"></i> <span>{formatDate(item.createdAt)}</span></span>
                      </div>
                    </div>
                  ))
                }
              </Slider>
            </div>
            <div className="post-grid--layout">
                <section className="layout-wrapper">
                  <figure className="highlights-featured-image">
                    <img src="https://billbalo.com/wp-content/uploads/2015/05/may-bay.-jpg-392x272.jpg" alt=""/>
                    <div className="title-post-detail">
                      <h4 className="title-post">Hà Giang – hành trình của GIÓ (Bài dự thi Here We Go 2018)</h4>
                      <span className="title-post datetime"><i className="icon-calendar"></i> <span>September 18, 2016</span></span>
                    </div>
                  </figure>
                  <figure className="highlights-featured-image">
                    <img src="https://billbalo.com/wp-content/uploads/2014/01/IMG_6010-copy-392x272.jpg" alt=""/>
                    <div className="title-post-detail">
                      <h4 className="title-post">Hà Giang – hành trình của GIÓ (Bài dự thi Here We Go 2018)</h4>
                      <span className="title-post datetime"><i className="icon-calendar"></i> <span>September 18, 2016</span></span>
                    </div>
                  </figure>
                  <figure className="highlights-featured-image">
                    <img src="https://billbalo.com/wp-content/uploads/2015/05/may-bay.-jpg-392x272.jpg" alt=""/>
                    <div className="title-post-detail">
                      <h4 className="title-post">Hà Giang – hành trình của GIÓ (Bài dự thi Here We Go 2018)</h4>
                      <span className="title-post datetime"><i className="icon-calendar"></i> <span>September 18, 2016</span></span>
                    </div>
                  </figure>
                  <figure className="highlights-featured-image">
                    <img src="https://billbalo.com/wp-content/uploads/2014/01/IMG_6010-copy-392x272.jpg" alt=""/>
                    <div className="title-post-detail">
                      <h4 className="title-post">Hà Giang – hành trình của GIÓ (Bài dự thi Here We Go 2018)</h4>
                      <span className="title-post datetime"><i className="icon-calendar"></i> <span>September 18, 2016</span></span>
                    </div>
                  </figure>
                </section>
            </div>
          </div>
        </section>
        )
    }
}

const mapStateToProps = state => ({
  itemPerPage: state.paging.itemPerPage,
  pageCurrent: state.paging.pageCurrent,
  topic: state.topic,
  loading: state.api.isLoading,
});

export default connect(mapStateToProps)(HightLight);