import { mediaItemReducer } from './media-item.reducer'
const initialState = [
    {
      id: 1,
      name: "Firebug",
      medium: "Series",
      category: "Science Fiction",
      year: 2014,
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
      year: 2015,
      rating: 2.7,
      watchedOn: null,
      isFavorite: true,
      imgSrc : null
    }, {
      id: 5,
      name: "Happy Joe: Cheery Road",
      medium: "Movies",
      category: "Action",
      year: 2017,
      rating: 2.7,
      watchedOn: 1457166565384,
      isFavorite: false,
      imgSrc : null
    }
];
export const mediaItemsReducer = (state=initialState, action) => {
  let index;
  switch (action.type) {
    case 'ADD_MEDIA_ITEM' :
      return [
        ...state,
        mediaItemReducer(undefined, action)
      ]
    case 'EDIT_MEDIA_ITEM' :
      if(action.id === null || typeof action.id === "undefined"){
        return state;
      }
      index = state.findIndex((obj) =>  obj.id === action.id);
      return [
        ...state.slice(0,index),
        mediaItemReducer(undefined, action),
        ...state.slice(index+1)
      ];

    case 'DELETE_MEDIA_ITEM' :
      if(action.id === null || typeof action.id === "undefined"){
        return state;
      }
      index = state.findIndex((obj) =>  obj.id === action.id);
      if(index === null || typeof action.id === "undefined"){
        return state;
      }
      return [
              ...state.slice(0,index),
              ...state.slice(index+1)
             ];
    default : 
      return state
  }
}