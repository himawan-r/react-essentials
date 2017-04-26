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

MediaItemListComponent.defaultProps = { 
    mediaItems : [
        {
            id: 1,
            name: "Firebug",
            medium: "Series",
            category: "Science Fiction",
            year: 2010,
            rating: 2,
            watchedOn: 1294166565384,
            isFavorite: false,
            posters: [
                {imgSrc: './media/firebug1.png', selected: true, isAvailableFullSize : true},
                {imgSrc: './media/firebug2.png', selected: false, isAvailableFullSize : false}
            ]
        },
        {
            id: 2,
            name: "The Small Tall",
            medium: "Movies",
            category: "Comedy",
            year: 2015,
            rating: 3.5,
            watchedOn: null,
            isFavorite: true,
            posters: [
                {imgSrc: './media/smalltall1.png', selected: true, isAvailableFullSize : true},
                {imgSrc: './media/smalltall2.png', selected: false, isAvailableFullSize : true}
            ]
        }, {
            id: 3,
            name: "The Redemption",
            medium: "Movies",
            category: "Action",
            year: 2016,
            rating: 4.7,
            watchedOn: null,
            isFavorite: false,
            imgSrc : null
        }, {
            id: 4,
            name: "Hoopers",
            medium: "Series",
            category: "Drama",
            year: null,
            rating: 3.2,
            watchedOn: null,
            isFavorite: true,
            imgSrc : null
        }, {
            id: 5,
            name: "Happy Joe: Cheery Road",
            medium: "Movies",
            category: "Action",
            year: 2015,
            rating: 2.7,
            watchedOn: 1457166565384,
            isFavorite: false,
            imgSrc : null
        }
    ]
}