import { Component } from 'react';
import { PropTypes } from 'prop-types';

import { lookupLists } from '../lookup/meta-lookup'
import '../css/media-item-list.component.scss';

export class MediaItemFormComponent extends Component{
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.newMediaItem = props.newMediaItem.bind(this);
    }

    onSubmit (e) {
        e.preventDefault();
        this.newMediaItem({
            medium: this.refs.medium.value,
            name: this.refs.name.value,
            category: this.refs.category.value,
            year: this.refs.year.value
        });
        
        this.refs.medium.value = "Series";
        this.refs.name.value = "";
        this.refs.category.value = "Drama";
        this.refs.year.value = "2017";
    }

    render() {
        const { medium, name, category, year } = this.props;

        return (
            <div className="media-item-form" >
                <header>
                <h2>Add Media to Watch</h2>
                </header>
                <form onSubmit={this.onSubmit}>
                    <ul>
                        <li>
                            <label htmlFor="medium">Medium</label>
                            <select name="medium" id="medium" defaultValue={medium} ref="medium">
                                { lookupLists.mediums.map((medium, i) => 
                                    <option key={i} value={medium}>{medium}</option>
                                )}
                            </select>
                        </li>
                        <li>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" defaultValue={name} ref="name"/>
                        </li>
                        <li>
                        <label htmlFor="category">Category</label>
                            <select name="category" id="category" defaultValue={category} ref="category">
                                <option value="Action">Action</option>
                                <option value="Science Fiction">Science Fiction</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Drama">Drama</option>
                                <option value="Horror">Horror</option>
                                <option value="Romance">Romance</option>
                            </select>
                        </li>
                        <li>
                            <label htmlFor="year">Year</label>
                            <input type="text" name="year" id="year" maxLength="4" defaultValue={year} ref="year"/>
                        </li>
                    </ul>
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}

MediaItemFormComponent.defaultProps = { 
    medium : 'Series',
    name : '',
    category : 'Drama',
    year : '2017'
}