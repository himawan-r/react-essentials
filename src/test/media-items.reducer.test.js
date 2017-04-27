import { addMediaItem, editMediaItem, deleteMediaItem } from '../action/media-item.action';
import { mediaItemsReducer } from '../reducer/media-items.reducer';
import deepFreeze from 'deep-freeze';
import expect from 'expect';

const testAdd = () => {
  const stateBefore = [];
  const action = addMediaItem({
      id: 1,
      name: "Firebug",
      medium: "Series",
      category: "Science Fiction",
      year: 2010,
      rating: 2,
      watchedOn: 1294166565384,
      isFavorite: false
  });

  const stateAfter = [
    {
      id: 1,
      name: "Firebug",
      medium: "Series",
      category: "Science Fiction",
      year: 2010,
      rating: 2,
      watchedOn: 1294166565384,
      isFavorite: false
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    mediaItemsReducer(stateBefore,action)
  ).toEqual(stateAfter);
}

const testEdit = () => {
  const stateBefore = [
    {
      id: 1,
      name: "Firebug",
      medium: "Series",
      category: "Science Fiction",
      year: 2010,
      rating: 2,
      watchedOn: 1294166565384,
      isFavorite: false
    },
    {
      id: 2,
      name: "The Small Tall",
      medium: "Movies",
      category: "Comedy",
      year: 2015,
      rating: 3.5,
      watchedOn: null,
      isFavorite: true
    }
  ];
  const action = editMediaItem({
      id: 1,
      name: "WaterBug",
      medium: "Movies",
      category: "Horror",
      year: 2012,
      rating: 5,
      watchedOn: 1294166565384,
      isFavorite: true
  });
  const stateAfter = [{
      id: 1,
      name: "WaterBug",
      medium: "Movies",
      category: "Horror",
      year: 2012,
      rating: 5,
      watchedOn: 1294166565384,
      isFavorite: true
  },{
      id: 2,
      name: "The Small Tall",
      medium: "Movies",
      category: "Comedy",
      year: 2015,
      rating: 3.5,
      watchedOn: null,
      isFavorite: true
  }];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    mediaItemsReducer(stateBefore,action)
  ).toEqual(stateAfter);
}

const testDelete = () => {
  const stateBefore = [
    {
      id: 1,
      name: "Firebug",
      medium: "Series",
      category: "Science Fiction",
      year: 2010,
      rating: 2,
      watchedOn: 1294166565384,
      isFavorite: false
    },
    {
      id: 2,
      name: "The Small Tall",
      medium: "Movies",
      category: "Comedy",
      year: 2015,
      rating: 3.5,
      watchedOn: null,
      isFavorite: true
    }
  ];
  const action = deleteMediaItem({
      id: 1,
      name: "Firebug",
      medium: "Series",
      category: "Science Fiction",
      year: 2010,
      rating: 2,
      watchedOn: 1294166565384,
      isFavorite: false
  });
  const stateAfter = [{
      id: 2,
      name: "The Small Tall",
      medium: "Movies",
      category: "Comedy",
      year: 2015,
      rating: 3.5,
      watchedOn: null,
      isFavorite: true
  }];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    mediaItemsReducer(stateBefore,action)
  ).toEqual(stateAfter);
}

export const runAllMediaItemTest = () => {
    testAdd();
    testDelete();
    console.log('All tests passed');
}