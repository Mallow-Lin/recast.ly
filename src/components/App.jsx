import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';


//this.videoData = exampleVideoData
//this.currentVideo = exampleVideoData[0]
//this.currentVideo = event.target.name <

class App extends React.Component {

  constructor(props) {
    super();
    this.state = {
      videoData: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }

  videoPlayerState(video) {
    this.setState({
      currentVideo: video
    });
  }

  onClickVideoListEntry(video) {
    //event.target.name

    this.setState({
      currentVideo: video
    });
    console.log('video is ', video);
    console.log('clicked');
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