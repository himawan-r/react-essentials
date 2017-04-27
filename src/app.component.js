import { Component } from 'react';
import { HashRouter as Router, Switch , Route, Redirect, Link, match} from 'react-router-dom';
import MediaItemListContainer  from './container/media-item-list.container';
import { MediaItemToolbarComponent } from './component/media-item-toolbar.component';
import MediaItemFormContainer from './container/media-item-form.container';

import { Whoops404 } from './component/whoops404.component';
import './css/app.component.scss';

export class AppComponent extends Component{

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
                            <Route exact path="/" component={MediaItemListContainer}/>
                            <Route path="/list/:medium?" component={MediaItemListContainer}/>
                            <Route path="/form" component={MediaItemFormContainer}/>
                            <Route component={Whoops404} />
                        </Switch>
                    
                    </div>
                </section>
            </div>
            </Router>
        )
    }
}