import React from "react"
import { Helmet } from "react-helmet"
import { Styled } from "theme-ui"
import Layout from "../components/layout"
import ProfileImage from "../assets/profile.jpeg"
const PageTemplate = ({ pageContext }) => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="Gatsby theme chaos"
        content="Gatsby portfolio theme for theme jam made by Aditya Vardhan Singh"
      />
      <title>Gatsby Theme Chaos</title>
    </Helmet>
    <div style={{ textAlign: "center" }}>
      <img src={ProfileImage} height="200px" />
      <Styled.h1>{pageContext.heading}</Styled.h1>
    </div>
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </Layout>
)

export default PageTemplate
