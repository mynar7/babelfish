/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { SpeechProvider } from './providers/speechProvider'
import SpeechRecognition from './speechRecognition'
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <SpeechProvider>
      <SpeechRecognition />
      <div className="font-serif">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="container mx-auto">
          <main>{children}</main>
        </div>
      </div>
    </SpeechProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
