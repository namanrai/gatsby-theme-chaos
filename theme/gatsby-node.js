exports.createPages = ({ actions, reporter }) => {
  reporter.warn("make sure to load data from somewhere!")

  // TODO replace this with data from somewhere
  actions.createPage({
    path: "/",
    component: require.resolve("./src/templates/page.js"),
    context: {
      heading: `Aditya Vardhan Singh`,
      content: `
        <p>
        Portfolio gatsby theme.
        </p>

        <p>
         <center>
          <a href="https://www.github.com/hakrsingh" target="_blank" style="color: #494949">github</a>
          <a href="https://www.npmjs.com/package/@hakrsingh/gatsby-theme-chaos" target="_blank" style="color: #494949">npm</a>
         </center>

          
        </p>          

          
          


      `,
    },
  })
}
