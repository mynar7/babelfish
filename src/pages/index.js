import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TranslationResults from '../components/translationResults'
import ListenButton from '../components/listenButton'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex justify-center">
        <div className="w-1/2">
          <TranslationResults />
        </div>
        <div>
          <ListenButton/>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
