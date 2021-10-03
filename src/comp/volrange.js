import React from "react"

class VolumeRange extends React.Component {
    getActiveWidth() {
        return {
            width: `${this.props.amount * 100}%`
        }
    }

    getHandlePos() {
        return {
            left: `${this.props.amount * 100}%`
        }
    }

    compensateThumb() {
        const ratio = (75 * this.props.amount) - 37.5
        return {
            transform: `translate(${ratio}px)`
        }
    }

    render () {
        return (
            <div id="volume-range">
                <input type="range"
                    min="0"
                    max="1"
                    step="any"
                    value={this.props.amount}
                    onChange={this.props.setVolume}
                    style={this.compensateThumb()}
                />
                <span id="volume-range-runway"/>
                <span id="volume-range-active"
                    style={this.getActiveWidth()}
                />
                <span id="volume-range-handle"
                    style={this.getHandlePos()}
                >
                    <div id="volume-range-amount">
                        {Math.floor(this.props.amount * 100)}
                    </div>
                </span>
                <span id="volume-range-corona"
                    style={this.getHandlePos()}
                />
            </div>
        )
    }
}

export default VolumeRange