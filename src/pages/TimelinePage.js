import React, { Component } from 'react';
import Timeline from '../components/Timeline';

class TimelinePage extends Component {
    render() {
        var { match } = this.props;
        var name = match.params.slug;
        return (
            <div>
                <Timeline />
            </div>
        );
    }
}

export default TimelinePage;
