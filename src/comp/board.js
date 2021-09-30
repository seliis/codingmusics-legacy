import React from "react"

class Board extends React.Component {
    constructor(p) { super(p)
        this.state = {
            pass: false,
            data: null,
            err: null
        }
    }

    async getMap(arr) {
        let data = []
        for (let i=0; i<arr.length; i++) {
            const id = arr[i]
            await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyAzkR1t9cJSLJNSJ55Du-3IVMYPnyJdVtw&part=snippet`).then(
                resp => resp.json()
            ).then(
                (resp) => {
                    const map = resp.items[0].snippet
                    data.push(
                        {
                            name: map.title,
                            chan: map.channelTitle
                        }
                    )
                }
            )
        }
        return data
    }

    componentDidMount() {
        fetch("./test.json").then(
            resp => resp.json()
        ).then(
            async (resp) => {
                this.setState({
                    pass: true,
                    data: await this.getMap(resp["0"])
                })
            },
            (err) => {
                this.setState({
                    pass: true,
                    err: err
                })
                console.log(err)
            }
        )
    }

    makeBoard() {
        let code = []
        const data = this.state.data
        for (let i=0; i<data.length; i++) {
            const name = data[i].name
            const chan = data[i].chan
            code.push(
                <div className="item" key={`music-${i}`}>
                    <h1>{name}</h1>
                    <h2>{chan}</h2>
                </div>
            )
        }
        return code
    }

    render() {
        const { pass, err } = this.state
        if (err) {
            return <div>
                {err.message}
            </div>
        } else if (!pass) {
            return <div>
                Loading...
            </div>
        } else {
            return (
                <div id="board">
                    {this.makeBoard()}
                </div>
            )
        }
    }
}

export default Board