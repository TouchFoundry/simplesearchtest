# SimpleSearchTest

Welcome! Congratulations on making our shortlist! Below you will find a task that will put your skills to the test. Good luck.


## FED built with

* [Angular2]() - RC.4 **NOTE!!** If you go looking at the angular2 docs, remember that they will reflect the latest version of angular2, at the time of writing is RC.5.
* [angular-cli](https://github.com/angular/angular-cli) - version 1.0.0-beta.10
* SASS

##### The following steps need to be taken in order to get setup:

1. `git clone <path to your branch>`
2. `node` version `4.2.2` (updating this is dependent on your OS)
3. `npm` version `3.10.3` (you can usually run `npm install npm -g` to update, might need to be run as `sudo` on ubuntu or mac)
4. run `npm install typings -g` (if ubuntu or mac, normally needs to be run as `sudo`)
5. run `npm install angular-cli@latest -g` (if ubuntu or mac, normally needs to be run as `sudo`)
6. run `npm install` -> this will download and install all the packages required to build the Angular2 FED (Don't run this `sudo`, you should not need to)
7. it should automatically run this, but in-case it doesn't, run `typings install`


## Development server
Run `npm start` or `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## File Structure

Below is the basic structure that you should concern yourself with.

```
src -- app --
            |-- components -> Angular2 components that make up the application
              |-- footer -> the app's footer
              |-- header -> the app's header
              |-- main-content -> the app's main content, 
                |-- shared
                  |-- search-input-card -> the card used to display the search box
                  |-- search-result-table -> the table used to display the results
                  |-- welcome-card -> a friendly greeting card
            |-- mock -> the example data
            |-- models
            |-- services -> *this is where you wire up the API*
            |-- app.component -> main app component
            |-- config.ts -> Configution strings, such as API urls. *You may need to change this*
```


## What is required of you

#### Angular2 Front-end

The `ApiDataService` looks like this:
```
@Injectable()
export class ApiDataService {

    constructor(private http:Http) {
    }

    public performSearchRequest(searchTerm:string, queryType:string):Promise<SearchResult[]> {
        return new Promise<SearchResult[]>((resolve, reject) => {
            let url = Config.apiBaseUrl + Config.searchApi;
            url += "?s=" + searchTerm;

            console.log("Your query to be: " + url);

            if (queryType == 'mock') {
                //for now, fetching mock data! Not filtered by search query as that would be giving it away ;)
                resolve(MockSearchData);
            } else {
                //use reject(error) to return an error back
                reject("To be completed!");
            }
        });
    }

}
```

It needs to be expanded/modified to work your NodeJS/Express server. This is pretty much the only modification you should have to do to the FED, as everything is wired up.

This can only be completed once you complete the primary task, but this is presented first so that you have a good idea of what is expected from the API.

# \*Primary Task\* NodeJS / ExpressJS Api server

This is the primary task. Complete the app in the `ServerApp` sub-directory.

###### Resources

* [NodeJS](https://nodejs.org/)
* [NPM](https://www.npmjs.com/)
* [ExpressJS](https://expressjs.com)

###### Requirements 

1. Hit the submit button without any value in the search box, and you will see it populate a table with results. It is up to you to replicate this.
2. Complete this in the `ServerApp` sub-directory
3. Run `npm init` to get started. Build a simple NodeJS project, complete with `package.json`. We should be able to `npm install` to install the dependencies after we clone your 
4. Use ExpressJS to create a simple API server that accepts a query string. Hint: You will need to "body-parser" JSON :)
5. Read in `data.json` and return a filtered list to the FED
6. Move over to the `ApiDataService` in the FED, modify it to make the request to your API server
7. Process the response and resolve the `Promise` to present your data to the FED
8. If you don't modify the structure of the data returned, then the FED should display a table with your results
9. **BONUS:** Handle errors returned from the backed, things like "No results" and "query string blank". For now, you will see an error being presented with a simple `alert()`, additional bonus points will be added for a creative expansion of the FED to present an error in a more user-friendly way.

## Why do this for us?

Completing this test will help us understand to what degree you satisfy the following criteria:

1) Aptitude, can you accomplish the task set forth using the Power of the Internet?
2) Precision, can you edit just what needs to be edited in order to accomplish your goals?
3) Attention, can you follow the guide set forth by the architect?

# Good luck & thanks!