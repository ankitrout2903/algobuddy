import { useState } from 'react';
import axios from 'axios';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/blackboard.css'; // Use a dark theme
import { Controlled as CodeMirror } from 'react-codemirror2';
import { useRouter } from 'next/router';

const Home: React.FC = () => {
  const [code, setCode] = useState<string>('');
  const [testCaseResults, setTestCaseResults] = useState<string[]>([]);
  const router = useRouter();

  const checkCode = () => {
    axios
      .post('http://localhost:8080/python', { code })
      .then(({ data }) => {
        setTestCaseResults(data.testCaseResults);
      })
      .catch((err) => console.log(err));
  };

  const handleChatClick = () => {
    router.push('http://localhost:4000');
  };

  return (
    <div className="bg-black h-screen text-white">
      <header className="App-header">
        <div className="absolute top-20 bottom-40 left-20 right-20 text-left">
          <div>Write your code here</div>
          <div className="flex space-x-2">
            {testCaseResults.map((res, i) => {
              return (
                <div key={i}>
                  <div>{res === 'True' ? '✅ passed' : '❌ failed'}</div>
                </div>
              );
            })}
          </div>
          <CodeMirror
            value={code}
            options={{
              theme: 'blackboard', // Use the dark theme
              keyMap: 'sublime',
              mode: 'python',
            }}
            onBeforeChange={(editor, data, value) => {
              setCode(value);
            }}
            className="w-96 h-80"
          />
          <div className="flex">
            <div
              onClick={() => checkCode()}
              className="border-2 p-2 bg-red-600 cursor-pointer"
            >
              Submit Code
            </div>

            <div
              onClick={handleChatClick}
              className="border-2 p-2 bg-green-600 cursor-pointer"
            >
              Chat
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
