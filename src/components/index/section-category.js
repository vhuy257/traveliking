import React, {Component} from 'react';
import Default from '../layouts/default';
import TwoColumn from '../layouts/two-columns';

class SectionLeftCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    image: 'https://billbalo.com/wp-content/uploads/2017/07/gi%E1%BA%A5y-t%E1%BB%9D-xin-visa-nh%E1%BA%ADt-390x205.png',
                    title: 'Hướng dẫn chuẩn bị giấy tờ xin Visa Nhật Bản tự túc mới nhất',
                    time : 'September 18, 2016',
                    description: 'Chào các bạn, hôm nay thì Bill sẽ quay trở lại với một chuyên mục mới, là VISA, viết riêng'
                }, {
                    image: 'https://billbalo.com/wp-content/uploads/2017/07/gi%E1%BA%A5y-t%E1%BB%9D-xin-visa-nh%E1%BA%ADt-390x205.png',
                    title: 'Hướng dẫn chuẩn bị giấy tờ xin Visa Nhật Bản tự túc mới nhất',
                    time : 'September 18, 2016',
                    description: 'Chào các bạn, hôm nay thì Bill sẽ quay trở lại với một chuyên mục mới, là VISA, viết riêng'
                }, {
                    image: 'https://billbalo.com/wp-content/uploads/2017/07/gi%E1%BA%A5y-t%E1%BB%9D-xin-visa-nh%E1%BA%ADt-390x205.png',
                    title: 'Hướng dẫn chuẩn bị giấy tờ xin Visa Nhật Bản tự túc mới nhất',
                    time : 'September 18, 2016',
                    description: 'Chào các bạn, hôm nay thì Bill sẽ quay trở lại với một chuyên mục mới, là VISA, viết riêng'
                }, {
                    image: 'https://billbalo.com/wp-content/uploads/2017/07/gi%E1%BA%A5y-t%E1%BB%9D-xin-visa-nh%E1%BA%ADt-390x205.png',
                    title: 'Hướng dẫn chuẩn bị giấy tờ xin Visa Nhật Bản tự túc mới nhất',
                    time : 'September 18, 2016',
                    description: 'Chào các bạn, hôm nay thì Bill sẽ quay trở lại với một chuyên mục mới, là VISA, viết riêng'
                }, {
                    image: 'https://billbalo.com/wp-content/uploads/2017/07/gi%E1%BA%A5y-t%E1%BB%9D-xin-visa-nh%E1%BA%ADt-390x205.png',
                    title: 'Hướng dẫn chuẩn bị giấy tờ xin Visa Nhật Bản tự túc mới nhất',
                    time : 'September 18, 2016',
                    description: 'Chào các bạn, hôm nay thì Bill sẽ quay trở lại với một chuyên mục mới, là VISA, viết riêng'
                }, {
                    image: 'https://billbalo.com/wp-content/uploads/2017/07/gi%E1%BA%A5y-t%E1%BB%9D-xin-visa-nh%E1%BA%ADt-390x205.png',
                    title: 'Hướng dẫn chuẩn bị giấy tờ xin Visa Nhật Bản tự túc mới nhất',
                    time : 'September 18, 2016',
                    description: 'Chào các bạn, hôm nay thì Bill sẽ quay trở lại với một chuyên mục mới, là VISA, viết riêng'
                },
            ]
        }
    }
    render() {
        switch(this.props.layout) {
            case 'two-columns':
                return (
                    <TwoColumn 
                    data={this.state.data} 
                    sectionTitle="Miền Trung" 
                    layoutClass={this.props.layout}/>
                );
            default:
                return (
                    <Default 
                    data={this.state.data} 
                    sectionTitle="Miền Bắc"/>
                );
        }
    }
}
export default SectionLeftCategory;