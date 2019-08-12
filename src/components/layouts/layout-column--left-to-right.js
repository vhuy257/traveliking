import React, {Component} from 'react';
import BannerQC from '../index/banner-qc';
import ReviewAll from '../index/review-all';
import Default from '../layouts/default';
import TwoColumn from '../layouts/two-columns';
import TickerLayout from '../layouts/ticker';
import axios from 'axios';
import ROUTES from '../../constants/routes';
const apiURL = `${ROUTES.API_BASE_URL}api/post/tag/`
class LayoutLeftToRight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ThaiLan: [],
            NhatBan: [],
            HanQuoc: [],
            ChauA: [],
            AmThuc: [],
            Review: [],
        }
    }

    getDataByTag(tagname) {
        axios.get(`${apiURL}${tagname}`)
            .then(data => {                
                if(data) {
                    switch (tagname) {
                        case 'Thái Lan':
                            return this.setState({
                                ThaiLan: data.data.data
                            });
                        case 'Nhật Bản':
                            return this.setState({
                                NhatBan: data.data.data
                            });
                        case 'Hàn Quốc':
                            return this.setState({
                                HanQuoc: data.data.data
                            });
                        case 'Review':
                            return this.setState({
                                Review: data.data.data
                            });
                        case 'Ẩm Thực':
                            return this.setState({
                                AmThuc: data.data.data
                            });
                        default:
                            return;
                    }
                }
            });
    }

    componentDidMount() {
        this.getDataByTag('Thái Lan');
        this.getDataByTag('Nhật Bản');
        this.getDataByTag('Hàn Quốc');      
        this.getDataByTag('Review');
        this.getDataByTag('Ẩm Thực');
    }

    render() {        
        return (
            <section className="rows layout-2column-left container">
                <div className="left-column">
                    <Default 
                    data={this.state.ThaiLan} 
                    sectionTitle="Thái Lan"/>
                    <TwoColumn 
                    data={this.state.NhatBan} 
                    sectionTitle="Nhật Bản"/>                    
                    <Default 
                    data={this.state.HanQuoc} 
                    sectionTitle="Hàn Quốc" layoutClass="grid"/>
                    <TickerLayout
                    data={this.props.topic.listTopic}
                    sectionTitle="Châu Á"
                    layoutClass="ticker"/>
                </div>
                <div className="right-column">
                    <BannerQC src="https://billbalo.com/wp-content/uploads/2017/07/Button-message.png"/>
                    <ReviewAll title="Review" data={this.state.Review}/>
                    <BannerQC src="https://billbalo.com/wp-content/uploads/2019/04/BANNER-QC_SANVE99K_600x500.jpg"/>
                    <BannerQC src="https://s.adroll.com/a/4HE/URC/4HEURCJCCZGLLCQ27HHHPZ.jpg"/>
                    <ReviewAll layout="am-thuc" title="Ẩm Thực" data={this.state.AmThuc} layoutClass='am--thuc'/>
                </div>
            </section>
        )
    }
}

export default LayoutLeftToRight;