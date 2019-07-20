export default function translate(term, fromLang, toLang) {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${fromLang}&tl=${toLang}&dt=t&q=${term}&dt=rm`;
    return fetch(url)
    .then(res => res.json())
    .then(res => {
        const translation = {
          native: res[0][0][0],
          romanized: res[0][1] ? res[0][1][2] : null,
        }
        return translation.native ? translation : null
    })
    .catch(err => console.log(err));
  }