import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYoutube from '../lib/searchYouTube.js';

class App extends React.Component {

  constructor(props) {
    super();
    this.state = {
      videoData: [],
      currentVideo: {}
    };
    props.searchYoutube('', this.callbackFunctionOnSuccess);
  }
  // props.searchYouTube: searchYouTube() {returns data}

  callbackFunctionOnSuccess(data) {
    this.setState({
      videoData: data,
      currentVideo: data[0]
    });
  }

  // API.GET().then((videos) => useState(videos)) into video
  // searchYoutube(query = '', (data) => {
  //   this.setState({
  //     videoData: data,
  //     currentVideo: data[0]
  //   });
  // });  // sending get to the api server
  //useEffect will gather data then run function with data
  //Searchyoutube takes in a query('', callback)
   //^Callback is setState of videoData
  //


  onClickVideoListEntry(video) {
    //event.target.name

    this.setState({
      currentVideo: video
    });
  }



  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em> view goes here</h5></div>
            <VideoPlayer video={this.state.currentVideo}/>

          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em> view goes here</h5></div>
            <VideoList videos={this.state.videoData} handleClick = {this.onClickVideoListEntry.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

//videoList
//videos (variable that is now a property of props)
//videos: exampleVideoData
//handClick (variable that is now a property of props)
//handleClick: (function)

//props.videos and props.handleClick

// var App = () =>
//   (
//     <div>
//       <nav className="navbar">
//         <div className="col-md-6 offset-md-3">
//           <div><h5><em>search</em> view goes here</h5></div>
//         </div>
//       </nav>
//       <div className="row">
//         <div className="col-md-7">
//           <div><h5><em>videoPlayer</em> view goes here</h5></div>
//           <VideoPlayer videos={exampleVideoData}/>

//         </div>
//         <div className="col-md-5">
//           <div><h5><em>videoList</em> view goes here</h5></div>
//           <VideoList videos={exampleVideoData} />
//         </div>
//       </div>
//     </div>
//   );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;