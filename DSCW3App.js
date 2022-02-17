import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menus/>
        <Routes>
          <Route index element={<Landing/>}/>
          <Route path="stopandsearch" element={<StopAndSearch/>}/>
          <Route path="arrests" element={<Arrests/>}/>
          <Route path="quiz" element={<Quiz/>}/>
        </Routes>
      </header>
    </div>
  );
}

function Landing() {
  return (
    <h1>Demystifying Your Rights</h1>
    <p>
    As the <a href="https://bills.parliament.uk/bills/2839">Police, Crime, Sentencing and Courts Bill</a> makes it's way through Parliament it has become more important than ever for the public to understand their rights in regard to both protests and general interaction with police. The police as an instition is not innocent. On 3rd March 2021  <a href="https://www.theguardian.com/uk-news/2021/sep/30/sarah-everard-murder-wayne-couzens-whole-life-sentence">Sarah Everard</a> was murdered by a Wayne Couzens, a police officer who pretended to arrest her for breaking COVID 19 lockdown regulations. In October 2021 <a href="https://www.bbc.co.uk/news/uk-england-nottinghamshire-60118874">Koshka Duff</a>received compensation and an apology for her treatment in police custody during her arrest in 2013 where an officer was recorded saying "treat her like a terrorist". on 10th February 2022 former Metropolitan Police Commisioner <a href="https://www.bbc.co.uk/news/uk-england-60340525">Cressida Dick</a> stepped down amid intense scrutiny into her response to the revalations that COVID lockdown regulations were <a href="https://www.theguardian.com/politics/2022/jan/24/a-full-list-of-alleged-government-covid-rule-busting-parties">broken repeatedly and intentionally</a> by members of the government including the Prime Minister, as well as accusations of misogyny and racism within the force. The takeaway is that the police cannot be trusted to have our best interests in mind, and the responsibility is on ourselves as individuals to educate ourselves on what the police force are allowed to do, and when they are crossing the line. <br/>
    </p>
    <p>This is not intended to be a resource in a real world situation, as when being stopped by the police access to your phone or the internet will almost certainly prohibited. This is an educational tool and learning resource only so that you may familliarise yourself with police procedure, and know when they are getting it wrong.</p>
  )
}

function Arrests() {
  return (
    <h1>Being Arrested</h1>

  )
}

function Menus() {
    return (
      <nav>
        <Link to="/stopandsearch">Stop and Search</Link>|
        <Link to="/arrests">Arrests</Link>
        <Link to="/quiz">Quiz</Link>
      </nav>
    )
}

function StopandSearch() {
  return (
  <div>
    <Title/>
    <Info/>
    <Info/>
    <Filter/>
    <Album/>
    <Album/>
    <Album/>
    <Album/>
    <Album/>
  </div>
 );
}
function Album() {
  return (
    <div className="album">
      <h4>album</h4>
      <h5>artist</h5>
      <ul>
        <li>track 1</li>
        <li>track 2</li>
        <li>track 3</li>
      </ul>
    </div>
  );
}

function Filter(){
  return (
    <div>
      <input type="text"/>
      <button>search</button>
    </div>
  );
}

function Info() {
  return (
    <h5 className="info">label: 2hrs</h5>
  )
}

function Title() {
  return (
    <h3>Better Music Player</h3>
  )
}

function TodaysDate() {
  return (
    <p>
      Hello class, today {new Date().toDateString()}
    </p>
  )

}
function Quiz() {
  return (
    <h1>How well do you understand your rights?</h1>
    <p>Disclaimer: Your answers to this quiz will be recorded to our database in order to further understand our relationship to the police. No personal details will be recorded</p>
    <QuizApp/>
  )
}

export default App;
