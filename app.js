const request = require('request')

// api object to access data from api
const urlLink = {
    url: 'https://api.github.com/search/repositories?q=is:public+forks:%3E=200+language:python',
    // User-Agent request header
    headers: {
        "User-Agent": "request"
    }
};

// function that retives data and callback
const dataretrival = (urlLink, callback) => {
    // send request for data and recieve in json format
    request({ url: urlLink.url, headers: urlLink.headers, json: true }, (error, response) => {
        if (error) {
            callback(error)
        }  else {
            // data array is for storing the data specific conditions
            let data = [], stargazersData = [];

            // storing data in data array if language and forks_count
            response.body.items.forEach(item => {
                if (urlLink.url != 0) {
                    dataforks = {
                        name: item.name,
                        language: item.language,
                        description: item.description,
                        html_url: item.html_url,
                        watchers_count: item.watchers_count,
                        stargazers_count: item.stargazers_count,
                        forks_count: item.forks
                    }

                    // appending dataforks object in data array
                    data.push(dataforks)
                    callback(data)

                    if (item.stargazers_count < 2000) {
                        stargazers = { name: item.name, 
                            language: item.language,
                            description: item.description,
                            html_url: item.html_url, 
                            watchers_count: item.watchers_count,
                            stargazers_count: item.stargazers_count, 
                            forks_count: item.forks 
                        }
                        console.log(description)
                        stargazersData.push(stargazers)
                    }
                }
        })
            callback(stargazersData)
        }
    })
}

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriting = createCsvWriter({
    path: './Data.csv',
    header: [
        { id: 'name', title: 'Name' },
        { id: 'language', title: 'Language' },
        { id: 'description', title: 'Description'},
        { id: 'html_url', title: 'Html url' },
        { id: 'watchers_count', title: 'Watchers count' },
        { id: 'stargazers_count', title: 'Stargazers count' },
        { id: 'forks_count', title: 'Forks count' }
    ]
});


dataretrival(urlLink, (msg) => {
    if (msg.length > 0) {
        var i = 1
        // if data is recieved then writing into csv
        csvWriting.writeRecords(msg).then(() => {
            console.log('data write operation perform '+(i+1))
        }).catch((error)=>{
            console.log(error)
        });

    } else if (msg) {
        // if error occured then printing error
        console.log(msg)
    } else {
        console.log('data is unavailable');
    }
})