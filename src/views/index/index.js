import React, {Component} from 'react';

import HightLight from '../../components/index/highlight-sliders';
import LayoutLeftToRight from '../../components/layouts/layout-column--left-to-right';

class HomePage extends Component {
    render() {
        return (
            <>
                <HightLight/>
                <LayoutLeftToRight/>
            </>
        )
    }
}

export default HomePage;