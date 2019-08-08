import React, {Component} from 'react';
import Default from '../layouts/default';
import TwoColumn from '../layouts/two-columns';
import TickerLayout from '../layouts/ticker';
import {connect} from 'react-redux';

class SectionLeftCategory extends Component {
    render() {
        switch(this.props.layout) {
            case 'two-columns':
                return (
                    <TwoColumn 
                    data={this.props.topic.listTopic} 
                    sectionTitle={this.props.sectionTitle}
                    layoutClass={this.props.layout}/>
                );
            case 'grid':
                return (
                    <Default 
                    data={this.props.topic.listTopic} 
                    sectionTitle={this.props.sectionTitle}
                    layoutClass={this.props.layout}/>
                );
            case 'ticker':
                return (
                    <TickerLayout
                    data={this.props.topic.listTopic} 
                    sectionTitle={this.props.sectionTitle}
                    layoutClass={this.props.layout}/>
                )
            default:
                return (
                    <Default 
                    data={this.props.topic.listTopic} 
                    sectionTitle={this.props.sectionTitle}/>
                );
        }
    }
}


const mapStateToProps = state => ({
    itemPerPage: state.paging.itemPerPage,
    pageCurrent: state.paging.pageCurrent,
    topic: state.topic,
    loading: state.api.isLoading,
});

export default connect(mapStateToProps)(SectionLeftCategory);