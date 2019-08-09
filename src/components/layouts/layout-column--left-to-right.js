import React, {Component} from 'react';
import BannerQC from '../index/banner-qc';
import ReviewAll from '../index/review-all';
import Default from '../layouts/default';
import TwoColumn from '../layouts/two-columns';
import TickerLayout from '../layouts/ticker';

class LayoutLeftToRight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataMienTrung: [],
            dataMienBac: [],
            dataMienNam: []
        }
        this.filterPostByTitle = this.filterPostByTitle.bind(this);
    }
    
    filterPostByTitle(arr, type) {
        let tempt = [];
        arr.map(function(item) {
            return item.tags.map(function(tag){
                if(tag.name === type) {
                tempt.push(item);
                }
            return tempt;
            })
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.topic.listTopic.length !== nextProps.topic.listTopic.length) {
            if(this.filterPostByTitle !== undefined) {
                this.filterPostByTitle(nextProps.topic.listTopic, 'Thái Lan');
            }
        }
    }

    render() {
        return (
            <section className="rows layout-2column-left container">
                <div className="left-column">
                    <Default 
                    data={this.props.topic.listTopic} 
                    sectionTitle="Miền Trung"/>

                    <TwoColumn 
                    data={this.props.topic.listTopic} 
                    sectionTitle="Miền Nam"/>                    
                    
                    <Default 
                    data={this.props.topic.listTopic} 
                    sectionTitle="Miền Trung" layoutClass="grid"/>

                    <TickerLayout
                    data={this.props.topic.listTopic}
                    sectionTitle="Châu Á"
                    layoutClass="ticker"/>
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