import './App.css';
import config from './config';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
const keys = Object.keys(config);
const initialState = keys.reduce((acc, curr) => (acc[curr] = null, acc), {});
function getLabel(id, name, required) {
  if (!required) {
    required = true
  }
  return <a><label for={`${id}-input`}>{name}{required ? <sup><a style={{ color: 'red' }}>*</a></sup> : null}</label><br /></a>
}
function getYear() {
  const d = new Date();
  return d.getFullYear()
}
function getInput(type, name, subtitle, id, required, props, options) {
  // switch helper
  switch (type) {
    case 'string':
      return <div>
        {getLabel(id, name, required)}
        <input type="text" id={id} {...props} required={required || true}></input>
      </div>
    case 'radio':
      const rendered = []
      for (const option of options) {
        rendered.push(<div><input type="radio" id={id} value={option} name={id} {...props} /> {option}</div>)
      }
      return <div>
        {getLabel(id, name, required)}
        {rendered}
      </div>;
    case 'checkbox':
      let rendered2 = []
      for (const option of options) {
        rendered2.push(<div><input type="checkbox" value={option} name={id} {...props} /> {option}</div>)
      }
      return <div>
        {getLabel(id, name, required)}
        {rendered2}
      </div>;
    case 'internal-question':
      return <div>
        {getLabel(id, name, required)}
        {subtitle && subtitle !== "" ? <div> <i>{subtitle}</i>        <br /> </div> : null}
        <textarea id={id} rows="10" cols="80" {...props} required={required || true}></textarea>
      </div>
    default:
      return <div>
        {getLabel(id, name, required)}
        <input type={type} id={id} {...props} required={required || true}></input>
      </div>
  }
}
function getDemographics(state, setState) {
  const demos = config['demographics'];
  let rendered = []
  for (const question of demos) {
    try {
      question.props['data-question-type'] = 'demographics';
    } catch {
      question.props = {'data-question-type': 'demographics'}
    }
    rendered.push(<div id={question.id}>
      {getInput(question.type, question.name, question.subtitle, question.id, question.required, question.props, question.options, state, setState)}
    </div>)
  }
  return rendered;
}
function getGeneralQuestions(state, setState) {
  let questions = config['questions'];
  let rendered = []
  let i = 1
  for (const question of questions) {
    try {
      question.props['data-question-type'] = 'general';
    } catch {
      question.props = {'data-question-type': 'general'}
    }
    rendered.push(<div id={"question-" + i}>
      {getInput("internal-question", question.question, question.subtitle, "question-" + i, question.required, question.props, question.options)}
    </div>)
    i += 1;
  }
  return rendered;
}
function getDemographicResponses() {
  const demq = config['demographics'];
  let final = {}
  let all = document.querySelectorAll('[data-question-type="demographics"][type="text"]')
  for (const item of all) {
    final[item.id] = item.value
  }
  all = document.querySelectorAll('[data-question-type="demographics"][type="number"]')
  for (const item of all) {
    final[item.id] = item.value
  }
  const radios = demq.filter(item => item.type === "radio")
  for (const radio of radios) {
    final[radio.id] = document.querySelector(`input[name="${radio.id}"]:checked`).value;
  }
  const checkboxes = demq.filter(item => item.type === "checkbox")
  for (const checkbox of checkboxes) {
    const ourChecked = []
    const checked = document.querySelectorAll(`input[name=${checkbox.id}]:checked`)
    checked.forEach((box) => {
      ourChecked.push(box.value)
    })
    final[checkbox.id] = ourChecked
  }
  return final;
}
function App() {
  const [state, setState] = useState(initialState);
  const [subteamsSelected, setSubteamsSelected] = useState(false);
  return (

    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Titan Robotics General Application {getYear()}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <div id="overview">
          <h1></h1>
          <b>Due: {config.due}</b>
          <br />
          <a style={{ color: 'red' }}>*</a> denotes required fields
        </div>
        <div id="demographics">
          <h1>Demographic Information</h1>
          {getDemographics(state, setState)}
        </div>
        <hr />
        <div id="questions">
          <h1>Application Questions</h1>
          <h3>Please answer these questions in {config.wordlimit} words or less.</h3>
          {getGeneralQuestions(state, setState)}
        </div>
        <hr />
        <div id="subteams">
          <h1>Subteam Selection</h1>
          {getInput("radio", "Please select your first choice subteam:", "", "first-choice-subteam", true, config.subteamprops, config.subteams)}
          <br></br>
          {getInput("radio", "Please select your second choice subteam:", "", "second-choice-subteam", true, config.subteamprops, config.subteams)}
          <br></br>
        </div>
        <Button onClick={() => { setSubteamsSelected(true); getDemographicResponses(); setTimeout(() => {document.getElementById('subteam-next').scrollIntoView({behavior: 'smooth'})}, 200); }} variant="primary">Next</Button>{' '}
        <br></br>
        <br></br>
        {subteamsSelected ? <h1 >Subteam-specific questions</h1> : null}
        <a id="subteam-next"></a>
      </Container >

    </div>

  );
}

export default App;
