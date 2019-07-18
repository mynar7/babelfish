import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TranslationResults from '../components/translationResults'
import ListenButton from '../components/listenButton'
import SearchableDropdown from '../components/searchableDropdown'
import isoLangs from '../components/isoLangs'
import { useSpeechContext } from '../components/providers/speechProvider'

const IndexPage = () => {
  const { setFromLang, setToLang, clearFromLang, clearToLang, speechState: {toLang, fromLang} } = useSpeechContext()

  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex justify-center w-full">
        <SearchableDropdown action={setFromLang} listName={'To'} list={isoLangs} currentValue={fromLang.name} clearAction={clearFromLang}/>
        <SearchableDropdown action={setToLang} listName={'From'} list={isoLangs} currentValue={toLang.name} clearAction={clearToLang}/>
      </div>
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
