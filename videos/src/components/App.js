import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "../components/VideoList";
import VideoDetail from "../components/VideoDetail";

class App extends React.Component {
  state = { videos: [], clickedItem: null };

  componentDidMount() {
    this.onTermSubmit("buildings");
  }

  onItemClicked = video => {
    console.log(video);
    this.setState({ clickedItem: video });
  };

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      clickedItem: response.data.items[0]
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.clickedItem} />
            </div>
            <div className="five wide column">
              <VideoList
                onItemClicked={this.onItemClicked}
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
