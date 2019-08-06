import React, {Component} from "react";
import {Link} from "react-router-dom";
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
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    speed: 1000,
};

const apiURL = `${ROUTES.API_BASE_URL}api/post/listposts/20`;

class HightLight extends Component {
    constructor(props) {
      super(props);
      this.state = {
        Arr4Item: []
      }
    }

    componentDidMount() {
      this.props.dispatch(getData(apiURL, getListTopicSuccess));
    }

    componentWillReceiveProps(nexProps) {
      if (this.props.topic.listTopic !== nexProps.topic.listTopic) {
        var temptArr = [];
        for( var i = temptArr.length; i < 4 ; i++) {
          var item = nexProps.topic.listTopic[Math.floor(Math.random()*nexProps.topic.listTopic.length)];
          if(!temptArr.includes(item)) {
            temptArr.push(item);
          }
        }
        this.setState({
          Arr4Item: temptArr
        });
      }
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
                        <Link 
                          to={{
                            pathname: `/post/${item._id}`,
                            state: {
                              _id: item._id
                            }
                          }}                          
                        >
                          <img src={item.image} alt=""/>
                          <div className="content-post--wrapper">
                            {
                              item.category &&
                              <span className="title-post tags-category">{item.category}</span>  
                            }
                            <h3 className="title-post">{item.title}</h3>
                            <span className="title-post datetime"><i className="icon-calendar"></i> <span>{formatDate(item.createdAt)}</span></span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))
                }
              </Slider>
            </div>
            <div className="post-grid--layout">
                <section className="layout-wrapper">
                  {
                    this.state.Arr4Item.map((item, key) => (
                      <figure className="highlights-featured-image" key={key}>
                        <Link 
                          to={{
                            pathname: `/post/${item._id}`,
                            state: {
                              _id: item._id
                            }
                          }}                          
                        >
                          <img src={item.image} alt=""/>
                          <div className="title-post-detail">
                            <h4 className="title-post">{item.title}</h4>
                            <span className="title-post datetime"><i className="icon-calendar"></i> <span>{formatDate(item.createdAt)}</span></span>
                          </div>
                        </Link>
                      </figure>
                    ))
                  }
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