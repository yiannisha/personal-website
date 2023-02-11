import { useStaticQuery, graphql } from "gatsby";

const useProjects = () => {
    return useStaticQuery(graphql`
    query {
        allContentfulPersonalProject {
          nodes {
            wip
            name
            description {
              raw
            }
            technicalSkills
            caption1
            caption2
            image1 {
              gatsbyImageData(width: 200)
            }
            image2 {
              gatsbyImageData(width: 200)
            }
            externalLink
          }
        }
      }
    `).allContentfulPersonalProject.nodes;
}

export default useProjects;