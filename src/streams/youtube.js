/*
    buildApiRequest('GET',
                '/youtube/v3/channels',
                {'id': 'UC_mdnj150u1lfPb6hYc6jsQ',
                 'part': 'snippet,contentDetails,statistics'});

    contentDetails.relatedPlaylists.uploads = playlistId;

    buildApiRequest('GET',
                '/youtube/v3/playlistItems',
                {'maxResults': '25',
                 'part': 'snippet,contentDetails',
                 'playlistId': 'UU_mdnj150u1lfPb6hYc6jsQ'});
    ==> LIST OF CHANNELS VIDEOS IN: items[]

    ID:
        channelID: UC_mdnj150u1lfPb6hYc6jsQ
        uploadPlaylistId: UU_mdnj150u1lfPb6hYc6jsQ
        APIKEY: AIzaSyAoC2HHkcC8EQ242hBb6-1GXIEEbW-CK1M
 */

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
                        if (k.id && k.id.videoId) {
                            that.videoIdList.push(k.id.videoId);
                        }
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