import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom'
//import Card from './components/shared/Card'
import './index.css'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import AboutIconLink from './components/AboutIconLink'
// import Post from './components/Post'

// import Card from './components/shared/Card'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path='/about' element={<AboutPage />} />
            {/* <Route path='/post/*' element={<Post />} /> */}
            {/* <Route path='/post/:id/:name' element={<Post />} /> */}
          </Routes>
          {/*  Training for NavLink */}
          {/*         
        <Card>
          <NavLink to='/' activeClassName='active'>
            Home
          </NavLink>
          <NavLink to='/about' activeClassName='active'>
            About
          </NavLink>
        </Card> */}
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
