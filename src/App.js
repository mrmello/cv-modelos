import "./App.css";
import text from "./text.json";

function App() {
  return (
    <div className="App">
      <div className="left">
        <div className="intro">{text.intro}</div>
        <div className="experiences">
          <span className="title">Experiências</span>
          {text.experiences.map((exp) => (
            <div className="wrapper">
              <div className="period">
                <span>{exp.period.begin}</span> - <span>{exp.period.end}</span>
              </div>
              <div className="description">
                <span className="experience-title">
                  {exp.role} - {exp.contractor}
                </span>
                {exp.items.map((item) => (
                  <div>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        <div className="head">
          <h1 className="name">{text.name}</h1>
          <span className="profession">{text.profession}</span>
        </div>
        <div className="contato">
          <div className="title">
            <span>Informações de contato</span>
          </div>
          <div className="wrapper">
            {text.contacts.map((contact) => (
              <div className="item" key={contact.key}>
                <div className="key">
                  <span>{contact.key}</span>
                </div>
                <div className="value">
                  <span>{contact.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
