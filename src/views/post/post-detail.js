import React, {Component} from 'react';
import {connect} from 'react-redux';
import ROUTES from '../../constants/routes';
import BannerQC from '../../components/index/banner-qc';
import ReviewAll from '../../components/index/review-all';
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import axios from 'axios';
import {formatDate} from '../../formatDate';
import {
    getData
} from '../../redux/actions/apiActions';
import {
    resetContent,
    fetchTopicSuccess
} from '../../redux/actions/topicActions';
import WithLoading from '../../loading';

const apiURL = `${ROUTES.API_BASE_URL}api/post/tag/`

const HtmlBinding = (props) => {
    return (
        <>
            <img src={props.topic.topicImage} alt={props.topic.titleTopic} />
            <h2>{props.topic.titleTopic}</h2>
            {
                props.topic.createdAt && 
                (
                    <div className="date"><i className="icon-calendar"></i>{formatDate(props.topic.createdAt)}</div>
                )
            }
            <div className="content--post" dangerouslySetInnerHTML={{__html: draftToHtml(convertToRaw(props.topic.contentTopic.getCurrentContent()))}}></div>
        </>
    )
}

const HtmlWithLoading = WithLoading(HtmlBinding);

class PostDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AmThuc: [],
            Review: [],
        }
    }

    getDataByTag(tagname) {
        axios.get(`${apiURL}${tagname}`)
            .then(data => {                
                if(data) {
                    switch (tagname) {
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
        const urlFetch = `${ROUTES.API_BASE_URL}api/post/id/${this.props.location.state._id}`;
        this.props.dispatch(resetContent());
        this.props.dispatch(getData(urlFetch, fetchTopicSuccess));
        this.getDataByTag('Review');
        this.getDataByTag('Ẩm Thực');
    }
    
    componentWillReceiveProps(nextProps) {
        if (this.props.topic !== nextProps.topic) {
            document.title = nextProps.topic.titleTopic;
        }
    }

    render() {        
        return (
            <section className="rows layout-2column-left container">
                <div className="left-column">
                    <HtmlWithLoading isLoading={this.props.loading} topic={this.props.topic}/>
                </div>
                <div className="right-column">
                    <BannerQC src="https://billbalo.com/wp-content/uploads/2017/07/Button-message.png"/>
                    <ReviewAll title="Review" data={this.state.Review}/>
                    <BannerQC src="https://billbalo.com/wp-content/uploads/2019/04/BANNER-QC_SANVE99K_600x500.jpg"/>
                    <BannerQC src="https://s.adroll.com/a/4HE/URC/4HEURCJCCZGLLCQ27HHHPZ.jpg"/>
                    <ReviewAll layout="am-thuc" title="Ẩm Thực" data={this.state.AmThuc}/>
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