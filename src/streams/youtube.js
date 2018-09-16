import axios from 'axios';
import React from "react";

export class youtubeStream {
    constructor() {
        this.videoIdList = [];
        this.apiKey = "AIzaSyAoC2HHkcC8EQ242hBb6-1GXIEEbW-CK1M";
        //this.channelId = "UC_mdnj150u1lfPb6hYc6jsQ";
        this.channelId = "UCrQjCrWOS63rBxO15TA5CfQ";
        this.Client = axios.create({
            baseURL: "https://www.googleapis.com/youtube/v3/search",
            timeout: 10000,
            validateStatus: (status) => status < 500,
        });
    }

    requestPromise() {
        let that = this;

        return new Promise(function (resolve, reject) {
            that.Client({
                method: 'GET',
                url: "?key=" + that.apiKey + "&channelId=" + that.channelId + "&part=snippet,id&order=date&maxResults=50"
            }).then(
                function (result) {
                    return resolve(result.data);
                }
            ).catch(
                function (err) {
                    console.err(err);
                    return reject(err);
                }
            );
        });
    }

    fillVideoIdList() {
        let that = this;

        return new Promise(function (resolve, reject) {
            that.requestPromise().then(
                function (result) {
                    result.items.forEach(function (k) {
                        let obj = {};

                        if (k.id && k.id.videoId)
                            obj.id = k.id.videoId;
                        if (k.snippet && k.snippet.title)
                            obj.title = k.snippet.title;
                        if (k.snippet && k.snippet.thumbnails && k.snippet.thumbnails.high
                            && k.snippet.thumbnails.high.url)
                            obj.thumbnail = k.snippet.thumbnails.high.url;
                        that.videoIdList.push(obj);
                    });
                    return resolve();
                }
            ).catch(
                function (err) {
                    return reject(err);
                }
            );
        });
    }
};