import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TranslationResults from '../components/translationResults'
import ListenButton from '../components/listenButton'
import SearchableDropdown from '../components/searchableDropdown'
import isoLangs from '../components/isoLangs'
import { useSpeechContext } from '../components/providers/speechProvider'
import SpeechRecognition from '../components/speechRecognition'

const IndexPage = () => {
  const { setFromLang, setToLang, clearFromLang, clearToLang, speechState: {toLang, fromLang} } = useSpeechContext()

  return (
    <Layout>
      <SEO title="Home" />
      <SpeechRecognition />
      <div className="flex flex-wrap justify-center w-full">
        <SearchableDropdown action={setFromLang} listName={'Translate from:'} list={isoLangs} currentValue={fromLang.name} clearAction={clearFromLang}/>
        <SearchableDropdown action={setToLang} listName={'Translate to:'} list={isoLangs} currentValue={toLang.name} clearAction={clearToLang}/>
      </div>
      <div className="flex justify-center">
        <div className="max-w-6x1 lg:w-1/2 xs:w-64 m-auto">
          <TranslationResults />
        </div>
      </div>
      <div className="fixed bottom-0 mb-4 w-full flex justify-center">
        <ListenButton/>
      </div>
    </Layout>
  )
}

export default IndexPage
