export const mediaItemReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_MEDIA_ITEM':
            return {
                id: action.id,
                medium: action.medium,
                name: action.name,
                category: action.category,
                year: action.year,
                rating: action.rating,
                watchedOn: action.watchedOn,
                isFavorite: action.isFavorite
            }
        default : 
            return state
    }
}