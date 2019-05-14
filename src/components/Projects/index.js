import React from "react"
import Paper from "@material-ui/core/Paper"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Projects = ({ classes }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allFile(
            filter: {
              extension: { regex: "/(jpg)|(jpeg)|(png)/" }
              relativeDirectory: { eq: "images/projects" }
            }
          ) {
            edges {
              node {
                name
                childImageSharp {
                  fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <Paper>
            <h2>
              <i className="fas fa-code" /> Projects
            </h2>
            <div className="icon-container">
              {data.allFile.edges.map((img, i) => (
                <a
                  href={
                    img.node.name === "snake"
                      ? "https://nrin3141.github.io/Snake-2.0/"
                      : img.node.name === "tictactoe"
                      ? "https://tic-tac-toe.ricotrebeljahr.de"
                      : img.node.name === "chess"
                      ? "https://chess.ricotrebeljahr.de"
                      : "https://photodyssee.com"
                  }
                  target="blank"
                  className="imgContainer"
                >
                  <Img
                    key={i}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    fluid={img.node.childImageSharp.fluid}
                  />
                  <div className="absolute shadow" />
                  <div className="absolute">
                    <h2 className="banner">
                      {
                        [
                          "Curious?",
                          "View Me!",
                          "Check me out!",
                          "Take a look",
                        ][i]
                      }
                    </h2>
                  </div>
                </a>
              ))}
            </div>

            <style jsx>{`
              .imgContainer {
                position: relative;
                background: black;
                width: 100%;
                height: 100%;
                margin: 1vw;
              }
              .banner {
                width: 100%;
                background: rgb(51, 51, 51);
                padding: 3vh 0;
                color: white;
              }
              .imgContainer:hover > .absolute {
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .imgContainer:hover > .shadow {
                background: black;
                opacity: 0.3;
              }
              h2 {
                text-align: center;
              }
              .icon-container {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
              }
              .absolute {
                display: none;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 200;
                text-align: center;
              }
              .large {
                width: 80vw;
                height: 80vw;
              }
              .imgContainer:hover > .large {
                width: 80vw;
                height: 80vw;
                opacity: 0.7;
              }
              @media only screen and (min-width: 400px) {
                .imgContainer {
                  height: 34vw;
                  width: 34vw;
                }
                .large {
                  width: 32vw;
                  height: 32vw;
                }
                .imgContainer:hover > .large {
                  width: 34vw;
                  height: 34vw;
                }
              }
              @media only screen and (min-width: 1000px) {
                .large {
                  width: 15vw;
                  height: 15vw;
                }
                .imgContainer {
                  height: 16vw;
                  width: 16vw;
                }
                .imgContainer:hover > .large {
                  width: 16vw;
                  height: 16vw;
                }
              }
            `}</style>
          </Paper>
        )
      }}
    />
  )
}

export default Projects
