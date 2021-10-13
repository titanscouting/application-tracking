import './App.css';
import config from './config';

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
function getInput(type, name, id, required, props, options) {
  // switch helper
  switch (type) {
    case 'string':
      return <div>
        {getLabel(id, name, required)}
        <input type="text" id={`${id}-input`} {...props} required={required || true}></input>
      </div>
    case 'radio':
      const rendered = []
      for (const option of options) {
        rendered.push(<div><input type="radio" value={option} name={id} {...props} /> {option}</div>)
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
    default:
      return <div>
        {getLabel(id, name, required)}
        <input type={type} id={`${id}-input`} {...props} required={required || true}></input>
      </div>
  }
}
function getDemographics() {
  const demos = config['demographics'];
  let rendered = []
  for (const question of demos) {
    rendered.push(<div id={question.id}>
      {getInput(question.type, question.name, question.id, question.required, question.props, question.options)}
    </div>)
  }
  return rendered;
}
function App() {
  return (
    <div className="App">
      <div id="overview">
        <h1>Titan Robotics General Application {getYear()}</h1>
        <b>Due: {config.due}</b>
        <br />
        <a style={{ color: 'red' }}>*</a> denotes required fields
      </div>
      <div id="demographics">
        <h1>Demographic Information</h1>
        {getDemographics()}
      </div>
      <div id="questions">

      </div>
    </div>
  );
}

export default App;
