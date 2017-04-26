import { Component } from 'react';
import { HashRouter as Router, Switch , Route, Redirect, Link, match} from 'react-router-dom';
import { MediaItemListComponent } from './component/media-item-list.component';
import { MediaItemToolbarComponent } from './component/media-item-toolbar.component';
import { MediaItemFormComponent } from './component/media-item-form.component';

import { Whoops404 } from './component/whoops404.component';
import './css/app.component.scss';

export class AppComponent extends Component{

    mediaItems = [
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
      year: 2019,
      rating: 2.7,
      watchedOn: 1457166565384,
      isFavorite: false,
      imgSrc : null
    }
  ];

  newMediaItem(mediaItem) {
      this.mediaItems.push(mediaItem);
  }
    
    render() {
        return (
            <Router>
            <div id="app-id"> 
                <nav>
                    <Link to='/list/all'>
                        <img src={require('./media/04.png')} className="icon" />
                    </Link>
                    <Link to='/list/movies'>  
                        <img src={require('./media/03.png')} className="icon" />
                    </Link>
                    <Link to='/list/series'>
                        <img src={require('./media/02.png')} className="icon" />
                    </Link> 
                </nav>
                <section>
                    <header>
                        <h1>Media Watch List</h1>
                        <p className="description">Keeping track of the media I want to watch.</p>
                    </header>
                    <div className="MainStyle">
                    
                        <Switch>
                            <Route exact path="/" component={MediaItemListComponent}/>
                            <Route path="/list/:medium?" render={props => <MediaItemListComponent mediaItems={this.mediaItems} {...props}/>}/>
                            <Route path="/form" render={props => <MediaItemFormComponent newMediaItem={this.newMediaItem.bind(this)} {...props} />}/>
                            <Route component={Whoops404} />
                        </Switch>
                    
                    </div>
                </section>
            </div>
            </Router>
        )
    }
}