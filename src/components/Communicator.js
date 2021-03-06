import {Component} from 'react';

export default class Communicator extends Component {

    sendData(data, callback) {
        fetch('https://voice.mozilla.cz:4878/api/submit', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => response.json()).then((response) => {
            if (response.status === 'written') {
                callback('success');
            } else {
                callback('error');
            }
        }).catch(() => {
            callback('error');
        });
    }
}