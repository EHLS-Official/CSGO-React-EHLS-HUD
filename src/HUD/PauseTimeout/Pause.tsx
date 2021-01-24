import React from "react";
import { PhaseRaw } from "csgogsi-socket";
import "./pause-timeout.scss";

interface IProps {
    phase: PhaseRaw | null
}

export default class Pause extends React.Component<IProps> {
    render() {
        const { phase } = this.props;
        return (
            <div id={`pause`} className={phase && phase.phase === "paused" ? 'show' : ''}>
                TEHNIČKA PAUZA
            </div>
        );
    }
}
