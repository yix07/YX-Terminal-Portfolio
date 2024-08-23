import './App.css';
import { useState, useEffect, useRef } from 'react';

function App() {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const inputRef = useRef();
  const terminalRef = useRef();

  let linkedin = "https://www.linkedin.com/in/yixiang-chen/";
  let instagram = "https://www.instagram.com/yee._.cee/";
  let github = "https://github.com/yix07/";
  const additionalText = "visitor@yxcodes.com:~$  ";
  
  let about = [
    "Hey! As you can probably tell by the heading, my name is Yixiang Chen.",
    "<br>",
    "I am a first-year student at New York University College of Arts and Sciences pursuing a degree in Computer Science and Mathematics. I'm eager to develop a strong foundation in computer science and gain deeper insight into the various fields, including artificial intelligence, game design, machine learning, and information security."
  ];

  let social = [
    'LinkedIn\t\t<a href="' + linkedin + '" target="_blank">linkedin/yixiang-chen</a>',
    'GitHub\t\t\t<a href="' + github + '" target="_blank">github/yix07</a>',
    'Instagram\t\t<a href="' + instagram + '" target="_blank">instagram/yee._.cee</a>'
  ];

  let projects = [
    "Aside from my CS course projects, this is actually my first side project and the first time I've ever used HTML, CSS, and JavaScript. Look forward to more projects in the near future!"
  ];

  let help = [
    "about\t\t\tWho is Yixiang?",
    "social\t\t\tDisplay Social Networks",
    "projects\t\tView Coding Projects",
    "banner\t\t\tDisplay Banner",
    "clear\t\t\tClear Terminal",
    "help\t\t\tThere's no way you already forgot"
  ];

  const banner = [
  "              .",
  "               ",             					
  "              |",					
  "     .                 /",				
  "      \\       I",     				
  "                    /",
  "        \\  ,g88R_",
  "          d888(`   ).                   _                    __  ___      _                      ________",
  "-  --==  888(        ).=--         .+(`   )`.                \\ \\/ (_)  __(_)___ _____  ____ _   / ____/ /_  ___  ____",
  ")         Y8P(         '`.         :(   .     )               \\  / / |/_/ / __ `/ __ \\/ __ `/  / /   / __ \\/ _ \\/ __ \\ ",
  "        .+(`(       .    )   .--  `.  (      ) )              / / />  <  / /_/ / / / / /_/ /  / /___/ / / /  __/ / / / ",
  "       ((    (..__.:'- '  .=(    )   ` _`   ) )              /_/_/_/|_/_/\\__,_/_/ /_/\\__, /   \\____/_/ /_/\\___/_/ /_/ ",
  "`.     `(       ) )       (   .    )    (    )  ._                                  /____/",
  "  )      ` __.:'   )    (    (     ))    `-'.:(`   )",
  ")  )  ( )       --'       `- __. '         :(       ))",
  ".-'  (_.'          .')                    `(    )   ))",
  "                  (_  )                     ` __.: '",
  "                                                     ",                                      	
  "--..,___.--,--'`,---..-.--+--.,,-,..._.--..-._.-_:'--.--..,__.--,--'`,-;--..-.-'-+--.,,-,,.._.--.-._.-.:'-.-'`,---..-.-+--.,,-,.._.-.-..-._.-:,--."
  ]
                                                                                                                                                                      

  useEffect(() => {
    inputRef.current.focus()
  }, [inputRef]);

  useEffect(() => {
    terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  }, [output]);

  return (
    <div className="App" onClick={(e) => { inputRef.current.focus() }}>
      <div className="terminal" ref={terminalRef}>
        <div dangerouslySetInnerHTML={{ __html: banner.join('<br>') }}></div>
        <p className="intro">Welcome to my interactive web terminal.</p>
        <p className="intro">For a list of all available commands, type <span className='key'>'help'</span>.</p>
      <div dangerouslySetInnerHTML={{ __html: output.replace(/\n/g, '<br>') }}></div>
      </div>
      <div className="spacer"></div>
      <div className="input-container">
        <div className="cursor"></div>
        <input
          ref={inputRef}
          type="text"
          value={additionalText + input}
          onChange={(e) => setInput(e.target.value.replace(additionalText, ''))}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              let newOutput = output + '<br/><br/><span class="userInput">' + additionalText + input + '</span><br/><br/>';
              switch (input) {
                case "help":
                  newOutput += help.join('<br>');
                  break;
                case "about":
                  newOutput += about.join('<br>');
                  break;
                case "social":
                  newOutput += social.join('<br>');
                  break;
                case "projects":
                  newOutput += projects.join('<br>');
                  break;
                case "banner":
                  newOutput += banner.join('<br>');
                  break;
                case "clear":
                  newOutput = "";
                  break;
                default:
                  newOutput += "Command not found. Please enter a valid command.";
              }
              setOutput(newOutput);
              setInput('');
              terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
            }
          }}
        />
      </div>
    </div>
  );
}

export default App;
