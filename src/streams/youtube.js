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
 */

import axios from 'axios';
import React from "react";

export default class youtubeStream {
    constructor() {
        this.videoIdList = [];
        this.Client = axios.create({
            baseURL: "https://www.googleapis.com/youtube/v3/playlistItems",
            timeout: 10000,
            validateStatus: (status) => status < 500,
        });
    }

    requestPromise() {
        return new Promise(function (resolve, reject) {
            this.Client({
                method: 'GET',
                url: "?playlistId=UC_mdnj150u1lfPb6hYc6jsQ&maxResults=500&part='snippet,contentDetails'"
            }).then(
                function (result) {
                    return resolve(result.data);
                }
            ).catch(
                function (err) {
                    return reject(err);
                }
            );
        });
    }

    fillVideoIdList() {
        return new Promise(function (resolve, reject) {
            this.requestPromise().then(
                function (result) {
                    result.items.forEach(function (k) {
                        this.videoIdList.push(result[k].contentDetails.videoId);
                    });
                    return resolve(this.videoIdList);
                }
            ).catch(
                function (err) {
                    return reject(err);
                }
            );
        });
    }
};