import React, {Component} from 'react';
import HightLight from '../../components/index/highlight-sliders';
import LayoutLeftToRight from '../../components/layouts/layout-column--left-to-right';
import  ROUTES from '../../constants/routes';
import {connect} from 'react-redux';
import {
  getData
} from '../../redux/actions/apiActions';
import {
  getListTopicSuccess
} from '../../redux/actions/topicActions';
import WithLoading from '../../loading';

const HightLightWithLoading = WithLoading(HightLight);
const apiURL = `${ROUTES.API_BASE_URL}api/post/listposts/20`;
class HomePage extends Component {
    componentDidMount() {
        this.props.dispatch(getData(apiURL, getListTopicSuccess));
    }

    render() {
        return (
            <>
                <HightLightWithLoading isLoading= {this.props.loading} topic={this.props.topic}/>
                <LayoutLeftToRight topic={this.props.topic}/>
            </>
        )
    }
}

const mapStateToProps = state => ({
    itemPerPage: state.paging.itemPerPage,
    pageCurrent: state.paging.pageCurrent,
    topic: state.topic,
    loading: state.api.isLoading,
});

export default connect(mapStateToProps)(HomePage);