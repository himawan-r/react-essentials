import { connect } from 'react-redux';
import { addMediaItem } from '../action/media-item.action';
import { MediaItemFormComponent } from '../component/media-item-form.component';


const mapDispatchToProps = {
  newMediaItem: addMediaItem
}

const MediaItemFormContainer = connect(
  null, mapDispatchToProps, null, { withRef: true }
)(MediaItemFormComponent)

export default MediaItemFormContainer