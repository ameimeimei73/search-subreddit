# search-subreddit

This is a web application that integrates with Reddit’s API to show the top articles in a given subreddit. 

I used Node.js and Express.js as frameworks to create a REST API and implemented the UI using HTML/CSS/JavaScript and Bootstrap.

## Set-up

Firstly, when you are in the download folder, run the following command:

```
npm install
npm start
```

Then open this link:

http://localhost:3000/

## App Workflow

User can specify the subreddit name in a text input field on the home page. According to this subreddit, I use Reddit API to retrieve the relevant information.  Reddit API will return a JSON object, I extract the useful and meaningful information, then send them to the show page. The show page will display these articles. 

## Deployed App Link

https://searchsubreddit.herokuapp.com/


