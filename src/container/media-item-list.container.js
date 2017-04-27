import { connect } from 'react-redux';
import { addMediaItem } from '../action/media-item.action';
import { MediaItemListComponent } from '../component/media-item-list.component';

const mapStateToProps = (state) => ( {
    mediaItems: state.mediaItems
})

const mapDispatchToProps = {
    
}

const MediaItemListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(MediaItemListComponent)

export default MediaItemListContainer