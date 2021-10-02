import React from "react"
import ReactPlayer from "react-player/youtube"

class Player extends React.Component {
    constructor(p) { super(p)
        this.state = {
            playing: true,
            volume: 0.10,
            muted: false
        }

        // Binding
        this.setMaster = this.setMaster.bind(this)
        this.setVolume = this.setVolume.bind(this)
        this.setMuted = this.setMuted.bind(this)
    }

    setMaster() {
        this.setState({
            playing: !this.state.playing
        })
    }

    setMuted() {
        this.setState({
            muted: !this.state.muted
        })
    }

    setVolume(e) {
        this.setState({
            volume: e.target.valueAsNumber
        })
    }

    makePlayerPannel() {
        const code = <div id="player-pannel">
            <div id="player-master" onClick={this.setMaster}>
                {
                    this.state.playing ? <i className="far fa-pause-circle"/> : <i className="far fa-play-circle"/>
                }
            </div>
            <div id="player-volume">
                <div id="player-volume-value">
                    {Math.floor(this.state.volume * 100)}
                </div>
                <input type="range" min="0" max="1" step="any"
                    value={this.state.volume}
                    onChange={this.setVolume}
                />
            </div>
            <div id="player-mute" className={
                this.state.muted ? "muted" : "not-muted"
            } onClick={this.setMuted}>
                <i className="fas fa-volume-mute"></i>
            </div>
        </div>

        return code
    }

    render() {
        return (
            <div id="player">
                <ReactPlayer url={"https://www.youtube.com/watch?v=" + this.props.playId}
                    playing={this.state.playing}
                    volume={this.state.volume}
                    muted={this.state.muted}
                    loop={true}
                    height="0"
                    width="0"
                    config={{
                        youtube: {
                            playerVars: {
                                autoplay: 1
                            }
                        }
                    }}
                />
                {this.makePlayerPannel()}
            </div>
        )
    }
}

export default Player