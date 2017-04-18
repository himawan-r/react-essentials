import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { lookupLists } from '../lookup/meta-lookup'
import * as _ from 'underscore';
import '../css/media-item-toolbar.component.scss';

export class MediaItemToolbarComponent extends Component{

    constructor(props) {
        super(props);
        this.getPropertyType = this.getPropertyType.bind(this);
        this.state =  { propertyName: props.propertyName };
    }

    onChange = (e) => {
         this.setState({propertyName: this.refs.propertyName.value});
    }

     onSubmit = (e) => {
         e.preventDefault();
    }

    getPropertyType() {
        let propertyName = this.refs.propertyName ? this.refs.propertyName.value  : "name";
        let lookup = _.find(lookupLists.mediaItemProperties , function(obj){
            return obj.lookupText === propertyName;
        });
        return lookup.type;
    }

    render() {
        const { propertyName, operator, searchValue } = this.props;

        return (
            <div className="media-item-toolbar">
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="value" id="value" ref="searchValue" defaultValue={searchValue}/>
                    <select name="propertyName" id="propertyName" ref="propertyName" onChange={this.onChange} defaultValue={propertyName}>
                        {lookupLists.mediaItemProperties.map((mediaItemProperty,i) =>
                            <option key={i} value={mediaItemProperty.lookupText}>{mediaItemProperty.lookupText}</option>
                        )}
                    </select>
                    <select name="operator" id="operator" ref="operator" defaultValue={operator}>
                        {lookupLists.operators.map((operator,i) =>
                            {
                                if(operator.type === this.getPropertyType() || operator.type === 'any'){
                                   return  <option key={i} value={operator.lookupText}>{operator.lookupText}</option>
                                }
                            }
                        )}
                    </select>
                    <button type="submit">Filter</button>
                </form>
            </div>
        )
    }
}

MediaItemToolbarComponent.defaultProps = { 
    searchValue : "",
    propertyName : "name",
    operator: "equals"
}
