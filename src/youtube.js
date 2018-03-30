import React, {Component} from 'react';

const API = 'AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA';
const channelID = 'UCXgGY0wkgOzynnHvSEVmE3A';
const results = 5;
let finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${results}`;

// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10

class YouTube extends Component {

    constructor(props){
        super(props);

        this.state = {
            resultYT: []
        };
    }

    clicked(){
      return fetch(finalURL)
        .then((response) => response.json())
        .then((responseJson) => {
            const resultYT = responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
            this.setState({resultYT});
        })
        .catch((error) => {
          console.error(error);
        });
    }    

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.clicked.bind(this)}>Get Youtube Videos</button>
                    </div>
                    {
                        this.state.resultYT.map((link, i) => {
                        let frame = <div className="YouTube"><iframe key={i} width="200" height="150" src={link} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe></div>
                            return frame;            
                        })
                    }
                        {this.frame}
            </div>
        );
    }
}

export default YouTube;