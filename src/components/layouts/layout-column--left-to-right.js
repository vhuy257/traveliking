import React, {Component} from 'react';
import SectionLeftCategory from '../index/section-category';
import BannerQC from '../index/banner-qc';
import ReviewAll from '../index/review-all';

class LayoutLeftToRight extends Component {
    constructor(props) {
        super(props);
        this.filterPostByTitle = this.filterPostByTitle.bind(this);
    }

    filterPostByTitle(type) {
      let tempt = [];
      this.props.topic.listTopic.map(function(item){
         return item.tags.map(function(tag){
          if(tag._id === type) {
            tempt.push(item);
          }
          console.log(tempt);
          return tempt;
        })
      });
    }

    render() {
        return (
            <section className="rows layout-2column-left container">
                <div className="left-column">
                    <SectionLeftCategory sectionTitle="Miền Trung" topic={this.filterPostByTitle('5d4bcf0e624d983f4cb8d19f')}/>
                    <SectionLeftCategory sectionTitle="Miền Nam"   topic={this.props.topic} layout="two-columns"/>
                    <SectionLeftCategory sectionTitle="Miền Trung" topic={this.props.topic} layout="grid"/>
                    <SectionLeftCategory sectionTitle="Châu Á"     topic={this.props.topic} layout="ticker"/>
                </div>
                <div className="right-column">
                    <BannerQC src="https://billbalo.com/wp-content/uploads/2017/07/Button-message.png"/>
                    <ReviewAll title="Review"/>
                    <BannerQC src="https://billbalo.com/wp-content/uploads/2019/04/BANNER-QC_SANVE99K_600x500.jpg"/>
                    <BannerQC src="https://s.adroll.com/a/4HE/URC/4HEURCJCCZGLLCQ27HHHPZ.jpg"/>
                    <ReviewAll layout="am-thuc" title="Ẩm Thực"/>
                </div>
            </section>
        )
    }
}

export default LayoutLeftToRight;