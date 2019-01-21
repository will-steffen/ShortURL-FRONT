# Short URL FRONT

## What is this?
This is the API of a system to compress URLs and redirect user when the compressed URL is accessed.

Deployed Front End <https://short-url.azurewebsites.net>   
Deployed API: <https://shturl.azurewebsites.net/api/info>  
API Repository: <https://github.com/will-steffen/ShortURL-API>

## Technologies
This application was built with Angular 6.

## Running
If you haven't configured the API, I think is better start there, reading the [API Repository](https://github.com/will-steffen/ShortURL-API)
First you need to be sure that you have environment Angular 6 environment ready. It means, you need the `Node` (I used v8.9.4), and `NPM` (I used v6.4.1), which comes with Node. You can install Angular as global, but it is not mandatory; You can grab Nome from <https://nodejs.org/en/> and then install Angular globaly with `npm install -g @angular/cli`.

##### Configuring API URL
- Open file `/ShortURL/src/environments/environment.ts`;
- Set the property `apiURL` to be root path of configured API URL;

##### Finaly Running
- Navigate to `/ShortUrl`, and execute `npm start`;
- Now you can browse <http://localhost:4200>;

## App Pages
This app has basicaly 3 pages that can be explored:
- Home: root page, where you can insert the long URL and receive the short URL. 
  - Here, the URL is not SO short, because the DNS of server is not tiny, but to reach that we are supposed to by a tiny DNS;
  - You can change the language - although there is no much words to translate - by clicking in the flags on nav top;
  - Sign In and Sign Up buttons are there, but don't works. Is just to have a dimension of potential funcionality;
- Stats: To follow up the use of the shortened URL
  - Displays the creation date of shortened URL, original URL, page title of original URL, total clicks on shortenet URL and details of top 10 recent clicks on shortenet URL;
- NotFound: Where you are redirect when the code on your shortened URL is not recognized;
  - Is basicaly that;
  - To get here, just copy some shortened URL and change the last letters (which is the code of shortened URL), to some random text;
  - Look to the clouds =D
  
## File Structure
As an Angular App, the main code is located undes `/ShortURL/src` folder. The structure, although, is inspired on the standad Ionic App, using some key components as PageControllers, which are directly referenced by the RountingModule, the file which is responsible for manage the requested routes of the app. Here as a short describe of each folder you will see undes src folder:

##### app
Folder that holds the main component of the app, the main module and the Rounting Module.
##### assets
Images, templates, videos, audios, etc. Media in general;
##### components
Common components which will be user in more than one page;
##### enums
I think this name is very explicit =D
##### environments
Files with the enviroment keys. Basicaly used for CI/CD, or to build app for specific environment. You will note the files .htaccess and env.php ate the src folder, which are used when deploying this app on azure, to override the keys in the enviroment file with a key setted on azure panel. TO this app, this is not completely configured;
##### handlers
Generic logic files or middleware, which are used by more than one page or service.
##### i18n
Internacionalization; Keys that are used by the entire app with the internacionalized string;
##### models
Model classes of app, like entities or DTOs;
##### pages
Where the page components are located. Each folder here represents a PageController, which will handle most part of user interaction
##### services
Files responsible for handling the logic of calls to external services, mainly to the API.
##### styles
Where the commom styles are located. The app uses LESS files to styling, so some key sizes and colors are definied centralized on file vars.less;
##### utils
A set of general functions used to extend prototype Classes. Some of these functions are obsolete due to newers version of js/ts;

