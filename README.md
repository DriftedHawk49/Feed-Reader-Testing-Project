## Feed Reader Testing Project
### About <hr>
Here , we are provided with a Feed Reader Page with all source code.<br>
Our Task is to perform various important tests over the page to make sure it is functioning correctly.<br>
We are using Jasmine 2.2 as our testing framework to perform various tests.

### How To Run <hr>
 Clone/Download Zip of the Repository & Run index.html
<br> **Note that active internet connection is required.**<br><br>
(*Github Pages Cannot be used because it enforces https on hosting via github pages, and all the local files are insecure for it , so doesn't load them.*)

### Tests Performed <hr>
Various Important Basic Tests are performed on the page's functioning to make sure page don't misbehave and actually does what it is meant to do.
1. ###### First test Suite Performs Tests Over RSS Feeds
    1. to make sure that the ***allFeeds*** variable has been defined and that it is not empty.
    2. ***allFeeds*** object has all URL defined and that the URL is not empty.
    3. ***allFeeds*** object has all names defined and that the URL is not empty.
2. ###### Second test Suite Performs Tests Over Sliding Menu
    1. ensures the menu element is hidden by default.
    2. ensures the menu changes visibility when the menu icon is clicked.
3. ###### Third Test Suite Performs Tests the Loading of Feeds
    1. ensures when the ***loadFeed*** function is called and completes its work, there is at least a single ***.entry*** element within the ***.feed*** container.
4. ###### Fourth Test suite Tests the Change Of Feeds
    1. ensures when a new feed is loaded by the ***loadFeed*** function that the content actually changes.

### How Does It work <hr>
To know the actual working of how tests are implemented , please go through the *feedreader.js* file in **spec** directory in Github Repo. Code is Well Commented wherever necessary.
