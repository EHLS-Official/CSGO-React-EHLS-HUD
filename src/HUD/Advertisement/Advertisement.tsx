import React from 'react';
import ad_img from "../../advertisement/reklama.jpg";

export default class Advertisement{

    render() {
        return (
            <div className="advertisement" style={{ backgroundImage: `url('${ad_img}.jpg')` }}>

            </div>
        );
    }
}