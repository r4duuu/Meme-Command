# Discord Meme Bot 🤖😂

A simple but fast Discord bot that brings random memes straight into your server using the `/meme` command and the GIPHY API.

It’s lightweight, easy to set up, and made for instant laughs without any complicated setup or extra commands.

---

🚀 Features:
- `/meme` sends a random meme GIF instantly  
- Pulls fresh content from GIPHY API  
- No arguments required  
- Fast response time  
- Clean and simple design  

---

📦 Setup & Run:

First, clone the repository:
```bash
git clone https://github.com/username/repo-name.git
cd repo-name

Then install dependencies:

npm install

After that, create a .env file in the root folder and add:

GIPHY_KEY=YOUR_GIPHY_API_KEY
DISCORD_TOKEN=YOUR_BOT_TOKEN

To get your GIPHY API key, go to https://developers.giphy.com/
, create an app, and copy your key.

Finally, start the bot:

node index.js

or if you use nodemon:

nodemon index.js

🔐 Required Discord Permissions:

Send Messages
Embed Links
Use Slash Commands

🧠 Tech Stack:
Node.js, discord.js, GIPHY API

⚠️ Note:
This bot fetches live GIF memes from GIPHY and delivers them instantly using the /meme command. No caching, no complexity, just memes on demand.
