import dynamic from 'next/dynamic'
import App from '../App'
import '../App.js'

const DynamicComponentWithNoSSR = dynamic(
() => import('../components/nav/nav'),
{ ssr: false }
)

function Home() {
return (
<div>
  <App/>
</div>
 )
}

export default Home
