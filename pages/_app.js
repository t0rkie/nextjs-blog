import '../styles/global.css'

// グローバルレベルCSS
// Appは全てのページで共有されるトップレベルコンポーネント
// グローバルに読み込ませたいCSS(任意の場所・名前 e.g. styles/global.css)はpages/_app.jsで読みこむ

export default function App({
  Component,
  pageProps
}) {
  return <Component {...pageProps} />
}