import React, {Component} from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

class HightLight extends Component {
    render() {
        return (
        <section className="container post-random">
          <div className="column">
            <div className="slider-wrapper--main">
              <Slider {...settings}>
                <div className="item">
                  <div className="wrapper-title">
                    <img src="https://billbalo.com/wp-content/uploads/2017/10/du-l%E1%BB%8Bch-busan-800x445.jpg" alt=""/>
                    <span className="title-post tags-category">Hàn Quốc</span>
                    <h3 className="title-post">Lịch trình du lịch tự túc Hàn Quốc 8 ngày 3 thành phố: Seoul, Busan, Jeju</h3>
                    <span className="title-post datetime"><i className="icon-calendar"></i> <span>September 18, 2016</span></span>
                  </div>
                </div>
                <div className="item">
                  <div className="wrapper-title">
                    <img src="https://billbalo.com/wp-content/uploads/2017/10/du-l%E1%BB%8Bch-busan-800x445.jpg" alt=""/>
                    <span className="title-post tags-category">Hàn Quốc</span>
                    <h3 className="title-post">Lịch trình du lịch tự túc Hàn Quốc 8 ngày 3 thành phố: Seoul, Busan, Jeju</h3>
                    <span className="title-post datetime"><i className="icon-calendar"></i> <span>September 18, 2016</span></span>
                  </div>
                </div>
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
export default HightLight;