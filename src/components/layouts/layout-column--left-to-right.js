import React, {Component} from 'react';
import BannerQC from '../index/banner-qc';
import ReviewAll from '../index/review-all';
import Default from '../layouts/default';
import TwoColumn from '../layouts/two-columns';
import TickerLayout from '../layouts/ticker';

class LayoutLeftToRight extends Component {
    render() {        
        return (
            <section className="rows layout-2column-left container">
                <div className="left-column">
                    <Default 
                    data={this.props.topic.listTopicThaiLan} 
                    sectionTitle="Thái Lan"/>
                    <TwoColumn 
                    data={this.props.topic.listTopicNhatBan} 
                    sectionTitle="Nhật Bản"/>                    
                    <Default 
                    data={this.props.topic.listTopicHanQuoc} 
                    sectionTitle="Hàn Quốc" layoutClass="grid"/>
                    <TickerLayout
                    data={this.props.topic.listTopic}
                    sectionTitle="Châu Á"
                    layoutClass="ticker"/>
                </div>
                <div className="right-column">
                    <BannerQC src="https://billbalo.com/wp-content/uploads/2017/07/Button-message.png"/>
                    <ReviewAll title="Review" data={this.props.topic.listTopicReview}/>
                    <BannerQC src="https://billbalo.com/wp-content/uploads/2019/04/BANNER-QC_SANVE99K_600x500.jpg"/>
                    <BannerQC src="https://s.adroll.com/a/4HE/URC/4HEURCJCCZGLLCQ27HHHPZ.jpg"/>
                    <ReviewAll layout="am-thuc" title="Ẩm Thực" data={this.props.topic.listTopicAmThuc} layoutClass='am--thuc'/>
                </div>
            </section>
        )
    }
}

export default LayoutLeftToRight;