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
                    jobTitle
                    name
                    technicalSkills
                    workPeriod
                    externalLinkObject {
                        links {
                          name
                          url
                        }
                    }
                }
            }
        }
    `).allContentfulWork.nodes;
};

export default useWork;