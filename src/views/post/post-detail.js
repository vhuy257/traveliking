import React, {Component} from 'react';
import {connect} from 'react-redux';
import ROUTES from '../../constants/routes';
import BannerQC from '../../components/index/banner-qc';
import ReviewAll from '../../components/index/review-all';
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import {
    getData
} from '../../redux/actions/apiActions';

import {
    resetContent,
    fetchTopicSuccess
} from '../../redux/actions/topicActions';

class PostDetail extends Component {
    componentDidMount() {
        const urlFetch = `${ROUTES.API_BASE_URL}api/post/id/${this.props.location.state._id}`;
        this.props.dispatch(resetContent());
        this.props.dispatch(getData(urlFetch, fetchTopicSuccess));
    }
    
    componentWillReceiveProps(nextProps) {
        if (this.props.topic !== nextProps.topic) {
            document.title = nextProps.topic.titleTopic;
        }
    }

    render() {        
        console.log(this.props);
        return (
            <section className="rows layout-2column-left container">
                <div className="left-column">
                    <img src={this.props.topic.topicImage} alt={this.props.topic.titleTopic} />
                    <h2>{this.props.topic.titleTopic}</h2>
                    <div className="content--post" dangerouslySetInnerHTML={{__html: draftToHtml(convertToRaw(this.props.topic.contentTopic.getCurrentContent()))}}></div>
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

const mapStatetoProps = state => ({
    topic: state.topic,
    loading: state.api.isLoading
});

export default connect(mapStatetoProps)(PostDetail);