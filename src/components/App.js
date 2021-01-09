import react from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoDetails from "./VideoDetails";
import VideoList from "./VideoList";

class App extends react.Component {
   state = { videos: [], selectedVideo: null };

   onTermSubmit = async (term) => {
      const Response = await youtube.get("/search", {
         params: {
            q: term,
         },
      });

      this.setState({
         videos: Response.data.items,
         selectedVideo: Response.data.items[0], //^ picking up the 1st video for the VideoDetails
      });
   };

   componentDidMount() {
      this.onTermSubmit("iron man songs"); //^ so that our screen does not stays empty when nothing is searched
   }

   onVideoSelect = (video) => {
      this.setState({ selectedVideo: video });
   };

   render() {
      return (
         <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <div className="ui grid">
               <div className="ui row">
                  <div className="eleven wide column">
                     <VideoDetails video={this.state.selectedVideo} />
                  </div>

                  <div className="five wide column">
                     <VideoList
                        onVideoSelect={this.onVideoSelect}
                        videos={this.state.videos}
                     />
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default App;
