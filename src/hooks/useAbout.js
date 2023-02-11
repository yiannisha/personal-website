import { useStaticQuery, graphql } from "gatsby";

const useAbout = () => {
    return useStaticQuery(graphql`
        query {
            allContentfulAbout {
                nodes {
                    caption
                    aboutText {
                    raw
                    }
                    aboutImage {
                        gatsbyImageData(width: 450, height: 350)
                    }
                }
            }
        }
    `).allContentfulAbout.nodes[0];
};

export default useAbout;