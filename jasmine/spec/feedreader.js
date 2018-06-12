/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });



        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */


         it('have defined & Non Empty URLs',function() {            //Test to check the presence of real URLs
            allFeeds.forEach(function(element){                     //Using Javascript Array Property "forEach" to loop through every element in allFeeds Array
                expect(element.url).toBeDefined();                  // This Expectation expects each URL to be defined.
                expect(element.url.length).not.toBe(0);             // This expectation checks the length of the URL , if it is 0 , then it is empty , non 0 length means it's not empty.
            });
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */


            it('have defined & Non Empty Name',function() {         // Test To check defined & non empty names
            allFeeds.forEach(function(element){                     //Using Javascript Array Property "forEach" to loop through every element in allFeeds Array
                expect(element.name).toBeDefined();                 // This Expectation expects each name to be defined.
                expect(element.name.length).not.toBe(0);            // This expectation checks the length of the name , if it is 0 , then it is empty , non 0 length means it's not empty.
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
        describe("The Menu",function(){                             // Test suite defined for tests to be performed over The Menu
            /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it("is hidden by default",function(){                      // Test to check whether the Menu is hidden by default
            expect($("body")[0].className).toBe("menu-hidden");     // This expectation checks the class attached to body responsible for hiding the menu,by default
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

        it("shows on first click",function(){                       // Test to check that first click unveils the menu
            $(".menu-icon-link").trigger("click");                  // Trigger click action over the menu icon
            expect($("body")[0].className).not.toBe("menu-hidden"); // Then expect the "menu-hidden" class removed automatically, revealing the menu.
        });

        it("hides on second click",function(){                      // Test to check that second click hides the menu
            $(".menu-icon-link").trigger("click");                  // Trigger click action over the menu icon
            expect($("body")[0].className).toBe("menu-hidden");     // Then expect the "menu-hidden" class added automatically, hiding the menu.
        });


        });


    /* TODO: Write a new test suite named "Initial Entries" */
        describe("Initial Entries",function(){
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function(done){                                 // beforeEach Function , to runa particular code before all tests. Useful to load Async calls.
            loadFeed(0,function(){                                  // loadFeed function loads 1st feed & done() is passed as a callback so that it tells jasmine when it is done loading,
                done();                                             // so that tests can be performed
            });
         });

         it("should load feeds",function(done){                     // test to check feeds are being loaded, done passed as an arguement so that it starts after loading done by beforeEach()
            expect($(".feed")[0].children[0].children[0].className).toBe("entry"); // Expect  .feed container to contain 1 .entry element
            done();
         });

        });


    /* TODO: Write a new test suite named "New Feed Selection" */
        describe("New Feed Selection",function(){
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         var prev;
         beforeEach(function(done){
            loadFeed(1,function(){                                  //function loads another feed (Asynchronous call)
                done();
            });
            prev = $(".feed")[0].innerHTML;                         //Meanwhile , stores the current feed inner content for comparision
         });

         it("should actually change",function(done){                //Test that runs to see whether it changes or not
            expect($(".feed")[0].innerHTML).not.toBe(prev);         //expectation that previous inner content is different from present inner content
            done();
         });

        });

}());
