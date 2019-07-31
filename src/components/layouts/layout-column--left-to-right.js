import React, {Component} from 'react';
import SectionLeftCategory from '../index/section-category';
import BannerQC from '../index/banner-qc';

class LayoutLeftToRight extends Component {
    render() {
        return (
            <section className="rows layout-2column-left container">
                <div className="left-column">
                    <SectionLeftCategory/>
                </div>
                <div className="right-column">
                    <BannerQC/>
                </div>
            </section>
        )
    }
}

export default LayoutLeftToRight;