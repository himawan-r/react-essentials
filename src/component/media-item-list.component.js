import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { MediaItemComponent } from './media-item.component';
import { Link } from 'react-router-dom';

import '../css/media-item-list.component.scss';



export class MediaItemListComponent extends Component{
    constructor(props) {
        super(props);
    };
    
    render() {
        const { medium } = this.props.match && this.props.match.params;

        return (
            <div className="media-item-list" >
                <section>
                {this.props.mediaItems.filter((mediaItem) => { return mediaItem.medium.toLowerCase() === medium || medium === 'all'}).map((mediaItem,i) =>
                        <MediaItemComponent key={i} 
                                            {...mediaItem}/>
                )}
                </section>
                <Link to="/form">
                    <img src={require('../media/01.png')} className="icon"/>
                </Link>
            </div>
        )
    }
}

MediaItemListComponent.propTypes = {
    mediaItems : function(props) {
        if(!Array.isArray(props.mediaItems)){
            return new Error("Media Items list should be an array");
        } else if(!props.mediaItems.length) {
            return new Error("Media Items list must have at least one record");
        } else {
            return null;
        }
    }
}

