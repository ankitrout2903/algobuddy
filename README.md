# Textbase

✨ Textbase is a framework for building chatbots using NLP and ML. ✨

Just implement the `on_message` function in `main.py` and Textbase will take care of the rest :)

Since it is just Python you can use whatever models, libraries, vector databases and APIs you want.

# AlgoBee🐝🫠

- This is a Ai powered coding buddy made with the help of textbase library for mercor Chatbot Challenge 2.0 
- There is a inbuilt compiler and a chatbot assitant to help aspiring engineers prepare for their coding journey
- This project(prototype) helps student learn and mentor in their dsa/coding journey
- Intended Target audience Class 6 to 2nd year college students,
- It helps in taking assesment, giving hints ,finding errors/bugs 

# What can algobee do ? / How can you use Algobee ?
- can help you teach programming topics like array , strings.
- can give asseement and test questions.
- can give you hints while solving questions.
- can give you approach how to solve a problem.
- can solve problems for you.
- can find errors and debug code for you.

## MY contribution

this is a Ai interview chat bot application coding buddy made whith the help of mercor textbase library has a Inbuilt text editor 

https://www.loom.com/share/9f7a9bcd6ece42fa919b7407caaf3200?sid=fdeb7f14-7f76-4097-9167-e8c24e143efc



## Installation

Clone the repository and install the dependencies using [Poetry](https://python-poetry.org/) (you might have to [install Poetry](https://python-poetry.org/docs/#installation) first).

```bash
git clone https://github.com/cofactoryai/textbase
cd textbase
poetry shell
poetry install
```

start the compiler code
```bash
cd compiler
cd client
npm install
npm run start
# frontend run at port 3000

cd ../server
npm install
npm start
# backend run at port 8080

```
## Note
- Due to my knowledge expertise in javascript and node js so i made the compiler backend api in nodejs as I had less time for hackathon later the architecture will be improved and will be optimised as this is just a prototype
- Also I am aware about that the compiler page is running on localhost:3000 because of my knowledge ceiling of React and Javascript and the Chat-app is made on NextJs and Typescript So I decided to make a different PORT and it Reduces Load balancing
- Yeah it is a different architecture but due to knowledge and time constraints I have decided to take this step later by increasing my knowledge I will improve the code structure and architecture. 



## Start development server

> If you're using the default template, **remember to set the OpenAI API key** in `main.py`.

Run the following command:

```bash
poetry run python textbase/textbase_cli.py test main.py
```
Added Feature now we can run some codes defined in the databases and test its test cases
<img width="960" alt="Screenshot 2023-08-14 153316" src="https://github.com/ankitrout2903/textbase2.0/assets/88599131/32ce8d4f-8f84-4e26-b70b-168bab2be55a">


Now go to [http://localhost:4000](http://localhost:4000) and start chatting with your bot! The bot will automatically reload when you change the code.

_Simpler version using PyPI package and CLI coming soon!_

## Contributions

Contributions are welcome! Please open an issue or a pull request.
