import { Component } from 'react';
import { PropTypes } from 'prop-types';
import '../css/media-item.component.scss';

export class MediaItemComponent extends Component{

    onDelete = (e) => {
        console.log("deleted");
    }

     onPreview = (e) => {
        console.log("preview");
    }

    render() {
        return (
            <div className="media-item">
                <h2> { this.props.name } </h2>
                <div>Watched on { this.props.watchedOn } </div>
                <div>{ this.props.category }</div>
                <div>{ this.props.year }</div>
                <div className="tools">
                <svg
                    className="favorite" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z"
                    />
                </svg>
                <a className="delete" onClick={this.onDelete}>
                    remove
                </a>
                <a className="details">
                    watch
                </a>
                <a className="preview" onClick={this.onPreview}>
                    preview
                </a>
                </div>
            </div>
        )
    }
}

MediaItemComponent.propTypes = {
    name: PropTypes.string.isRequired,
    watchedOn: PropTypes.number,
    category: PropTypes.string,
    year: PropTypes.number
}

MediaItemComponent.defaultProps = { 
    name: "Default Name",
    watchedOn: "Default watchedOn",
    category: "Default category",
    year: 2010
}