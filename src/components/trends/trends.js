import React from "react";
import News from "../news/news";
import {sourceTrends} from '../../sourceTrends';


class Trends extends React.Component {
    constructor() {
        super();
        this.state = {
            tweets: sourceTrends
        }
    }

    render() {
        
        return (
            <div className="container">   
                <h5>"¿Que esta pasando?" </h5>
                {
                   this.state.tweets.map( tweet => {
                        return (
                            <News
                                profile={tweet.category}
                                content={tweet.title}
                                numberTweets={tweet.noTweets}
                                />
                        )
                    })
                }
                
            </div>
        );
    }
}

export default Trends;