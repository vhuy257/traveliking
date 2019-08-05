import React, {Component} from 'react';
import SectionLeftCategory from '../index/section-category';
import BannerQC from '../index/banner-qc';
import ReviewAll from '../index/review-all';

class LayoutLeftToRight extends Component {
    render() {
        return (
            <section className="rows layout-2column-left container">
                <div className="left-column">
                    <SectionLeftCategory sectionTitle="Miền Nam"/>
                    <SectionLeftCategory sectionTitle="Miền Bắc"   layout="two-columns"/>
                    <SectionLeftCategory sectionTitle="Miền Trung" layout="grid"/>
                    <SectionLeftCategory sectionTitle="Châu Á" layout="ticker"/>
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