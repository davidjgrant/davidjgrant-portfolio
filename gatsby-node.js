const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve(`src/templates/project-template.js`)
  const result = await graphql(`
    query {
      allContentfulPortfolio {
        nodes {
          slug
        }
      }
    }
  `)
  result.data.allContentfulPortfolio.nodes.forEach(project => {
    createPage({
      path: `${project.slug}/`,
      component: projectTemplate,
      context: {
        slug: project.slug,
      },
    })
  })
}