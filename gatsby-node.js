const { create } = require("domain");
const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const projectTemplate = path.resolve(`src/templates/project.js`);

    return graphql(`
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
    `)
    .then( result => {
        if (result.errors) {
            throw result.errors;
        }

        result.data.allContentfulPersonalProject.nodes.forEach(node => {
            createPage({
                path: `/projects/${node.name.toLowerCase()}/`,
                component: projectTemplate,
                context: {
                    ...node
                },
            });
        });
    });
}