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
import TranslateForm from '../components/translateForm'
import SwapLangBtn from '../components/swapLanguagesBtn'

const IndexPage = () => {
  const { setFromLang, setToLang, clearFromLang, clearToLang, speechState: {toLang, fromLang} } = useSpeechContext()

  return (
    <Layout>
      <SEO title="Home" />
      <SpeechRecognition />
      <div className="flex flex-col h-64">
        <div className="flex flex-wrap justify-center w-full">
          <SearchableDropdown action={setFromLang} listName={'Translate from:'} list={isoLangs} currentValue={fromLang.name} clearAction={clearFromLang}/>
          <SearchableDropdown action={setToLang} listName={'Translate to:'} list={isoLangs} currentValue={toLang.name} clearAction={clearToLang}/>
        </div>
        <div className="flex justify-center mb-auto">
          <TranslationResults />
        </div>
        <div className=" sticky bottom-0 pb-4 w-full flex flex-wrap justify-center">
          <TranslateForm />
          <ListenButton />
          <SwapLangBtn />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
