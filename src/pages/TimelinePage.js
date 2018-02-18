import React, { Component } from 'react';
import Timeline from '../components/Timeline';

class TimelinePage extends Component {
    render() {
        var { match } = this.props;
        var name = match.params.slug;
        return (
            <div>
                <div class="container">
                    <div class="timeline">
                        <div class="timeline-event">
                            <div class="card timeline-content">
                                <div class="card-image waves-effect waves-block waves-light">
                                    <img class="activator" src="http://img11.hostingpics.net/pics/681702481.jpg" />
                                </div>
                                <div class="card-content">
                                    <span class="card-title activator grey-text text-darken-4">Tile<i class="material-icons right">more_vert</i></span>
                                    <p>Content <a href="#">This is a link</a></p>
                                </div>
                                <div class="card-reveal">
                                    <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                </div>
                            </div>
                            <div class="timeline-badge blue white-text"><i class="material-icons">language</i></div>
                        </div>
                        <div class="timeline-event">
                            <div class="card timeline-content">
                                <div class="card-image waves-effect waves-block waves-light">
                                    <img class="activator" src="http://img11.hostingpics.net/pics/949190532.jpg" />
                                </div>
                                <div class="card-content">
                                    <span class="card-title activator grey-text text-darken-4">Tile<i class="material-icons right">more_vert</i></span>
                                    <p>Content <a href="#">This is a link</a></p>
                                </div>
                                <div class="card-reveal">
                                    <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                </div>
                            </div>
                            <div class="timeline-badge red white-text"><i class="material-icons">work</i></div>
                        </div>
                        <div class="timeline-event">
                            <div class="card timeline-content">
                                <div class="card-image waves-effect waves-block waves-light">
                                    <img class="activator" src="http://img11.hostingpics.net/pics/512562623.jpg" />
                                </div>
                                <div class="card-content">
                                    <span class="card-title activator grey-text text-darken-4">Tile<i class="material-icons right">more_vert</i></span>
                                    <p>Content <a href="#">This is a link</a></p>
                                </div>
                                <div class="card-reveal">
                                    <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                </div>
                            </div>
                            <div class="timeline-badge green white-text"><i class="material-icons">person</i></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TimelinePage;
