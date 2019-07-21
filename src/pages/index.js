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
import ClearResultsBtn from '../components/clearResultsBtn'

const IndexPage = () => {
  const { setFromLang, setToLang, clearFromLang, clearToLang, speechState: {toLang, fromLang, results} } = useSpeechContext()

  return (
    <Layout>
      <SEO title="Home" />
      <SpeechRecognition />
      <div className="flex flex-col h-64">
        <div className="flex flex-wrap flex-col justify-center items-center w-full sm:flex-row sm:items-end">
          <SearchableDropdown action={setFromLang} listName={'Translate from:'} list={isoLangs} currentValue={fromLang.name} clearAction={clearFromLang}/>
          <SwapLangBtn />
          <SearchableDropdown action={setToLang} listName={'Translate to:'} list={isoLangs} currentValue={toLang.name} clearAction={clearToLang}/>
        </div>
        <div className="flex justify-center mb-auto">
          <TranslationResults />
        </div>
        <div className="flex-col flex sticky bottom-0 pb-4  bg-white">
          <div className="w-full flex flex-wrap justify-center">
            <TranslateForm />
            <ListenButton />
            {results.length > 0 && <ClearResultsBtn />}
          </div>
          <footer className="h-14 text-center text-center px-4 my-4 text-gray-700">
            &copy;&nbsp;<a href="https://leewarrick.com" className="underline text-blue-600">Lee Warrick</a>&nbsp;2019, API borrowed 🙏 from Google Translate&trade;
          </footer>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
