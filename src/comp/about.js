import React from "react"

class About extends React.Component {
    getAct() {
        const arr = [
            "Interested in BlockChain and Artificial Intelligence",
            "Prepare to Bachelor Degree in Computer Science",
            "Aerodynamic and AirWarfare Study Group Senior",
            "Have Career in Aviation Over Last 10 Years",
            "Quantum Computation Programming Member",
            "Progressive Web Developing as a Hobby",
            "Searching DevOps Position to Oversea",
            "Looking Forward then Aim High"
        ]
        const code = []; for (let i=0; i<arr.length; i++) {
            code.push(
                <div id={`about-info-act-${i}`} className="about-info-act-item">
                    {arr[i]}
                </div>
            )
        }
        return code
    }

    render () {
        return (
            <div id="about">
                <div id="about-me">
                    <img src="about.jpg"/>
                </div>
                <div id="about-info">
                    <div id="about-info-name">
                        {"in valerie sun"}
                    </div>
                    <div id="about-info-job">
                        {"aviation engineer & programmer"}
                    </div>
                    <div id="about-info-act">
                        {this.getAct()}
                    </div>
                    <div id="about-info-app">
                        {"This Application Built with ReactJS and Go-Fiber."}
                    </div>
                </div>
            </div>
        )
    }
}

export default About