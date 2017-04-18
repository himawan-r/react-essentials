import { Component } from 'react';
import { PropTypes } from 'prop-types';

import { lookupLists } from '../lookup/meta-lookup'
import '../css/media-item-list.component.scss';

export class MediaItemFormComponent extends Component{
    render() {
        return (
            <div className="media-item-form" >
                <header>
                <h2>Add Media to Watch</h2>
                </header>
                <form onSubmit={this.onSubmit}>
                    <ul>
                        <li>
                            <label htmlFor="medium">Medium</label>
                            <select name="medium" id="medium" >
                                { lookupLists.mediums.map((medium, i) =>
                                    <option key={i} value="{medium.lookupText}">{medium.lookupText}</option>
                                )}
                            </select>
                        </li>
                        <li>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name"/>
                        </li>
                        <li>
                        <label htmlFor="category">Category</label>
                            <select name="category" id="category" >
                                <option value="Action">Action</option>
                                <option value="Science Fiction">Science Fiction</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Drama">Drama</option>
                                <option value="Horror">Horror</option>
                                <option value="Romance">Romance</option>
                            </select>
                        </li>
                    </ul>
                    <button type="submit" >Save</button>
                </form>
            </div>
        )
    }
}