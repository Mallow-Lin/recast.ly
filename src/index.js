// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import searchYoutube from './lib/searchYouTube.js';

ReactDOM.render(<App searchYoutube={searchYoutube}/>, document.getElementById('app'));