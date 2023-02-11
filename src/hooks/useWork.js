import { useStaticQuery, graphql } from "gatsby";

const useWork = () => {
    return useStaticQuery(graphql`
        query {
            allContentfulWork {
            nodes {
                companyName
                description {
                raw
                }
                externalLink
                jobTitle
                name
                technicalSkills
                workPeriod
            }
            }
        }
    `).allContentfulWork.nodes;
};

export default useWork;