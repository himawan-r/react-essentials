let mediaItemId = 0
export const addMediaItem = (mediaItem) => ({
  type: 'ADD_MEDIA_ITEM',
  id: mediaItemId++,
  medium: mediaItem.medium,
  name: mediaItem.name,
  category: mediaItem.category,
  year: mediaItem.year,
  rating: mediaItem.rating,
  watchedOn: mediaItem.watchedOn,
  isFavorite: mediaItem.isFavorite,
})

export const editMediaItem = (mediaItem) => ({
  type: 'UPDATE_MEDIA_ITEM',
  id: mediaItem.id,
  medium: mediaItem.medium,
  name: mediaItem.name,
  category: mediaItem.category,
  year: mediaItem.year,
  rating: mediaItem.rating,
  watchedOn: mediaItem.watchedOn,
  isFavorite: mediaItem.isFavorite,
})

