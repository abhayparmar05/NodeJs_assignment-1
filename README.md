# NodeJs_assignment-1
<h2>Task</h2>
<ul><li>Fetch GitHub repository data using following API
https://api.github.com/search/repositories?q=is:public</li></ul>
<ul><li>Use following filters which are defined in dictionary to fetch only limited relevant
repositories</li></ul>
<code>
{ 
  "language": "Python",
  "forks": ">=200"
}
</code>
<ul><li>Store fetched repositories data into following columns in CSV file
name, description, html_url, watchers_count, stargazers_count, forks_count</li></ul>
<ul><li>Store only those repositories which have more than 2000 “stargazers_count”</li></ul>

# Project Setup
<h3>Clone this repo and run below command to install all the dependencies.</h3>
<code>NPM install</code>
<h3>Run the below command </h3>
<code>node app.js</code>
