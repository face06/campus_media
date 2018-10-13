import axios from 'axios';
import React from "react";

class YoutubeList {

    constructor() {
        this.videoIdList = [];
        this.apiKey = "AIzaSyAoC2HHkcC8EQ242hBb6-1GXIEEbW-CK1M";
        this.channelId = "UC_mdnj150u1lfPb6hYc6jsQ";
        //this.channelId = "UCrQjCrWOS63rBxO15TA5CfQ";

        this.client = axios.create({
            baseURL: "https://www.googleapis.com/youtube/v3/search",
            timeout: 10000,
            validateStatus: (status) => status < 500,
        });
    }

    requestPromise() {
        return new Promise((resolve, reject) => {
            this.client({
                method: 'GET',
                url: "?key=" + this.apiKey + "&channelId=" + this.channelId + "&part=snippet,id&order=date&maxResults=50"
            })
                .then(result => resolve(result.data))
                .catch(err => {
                    console.error(err);
                    return reject(err);
                });
        });
    }

    fillVideoIdList() {
        let that = this;

        return new Promise(function (resolve, reject) {
            that.requestPromise().then(
                function (result) {
                    result.items.forEach(function (k, index) {
                        let obj = { key: index };

                        if (k.id && k.id.videoId)
                            obj.id = k.id.videoId;
                        else
                            return;
                        if (k.snippet && k.snippet.title)
                            obj.title = k.snippet.title;
                        if (k.snippet && k.snippet.thumbnails && k.snippet.thumbnails.high
                            && k.snippet.thumbnails.high.url)
                            obj.thumbnail = k.snippet.thumbnails.high.url;
                        that.videoIdList.push(obj);
                    });
                    console.log(that.videoIdList);
                    return resolve();
                }
            ).catch(
                function (err) {
                    return reject(err);
                }
            );
        });
    }

}

export default YoutubeList;