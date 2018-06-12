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

        it('have defined & Non Empty URLs',function() {             //Test to check the presence of real URLs
            allFeeds.forEach(function(element){                     //Using Javascript Array Property "forEach" to loop through every element in allFeeds Array
                expect(element.url).toBeDefined();                  // This Expectation expects each URL to be defined.
                expect(element.url.length).not.toBe(0);             // This expectation checks the length of the URL , if it is 0 , then it is empty , non 0 length means it's not empty.
            });
        });

        it('have defined & Non Empty Name',function() {             // Test To check defined & non empty names
            allFeeds.forEach(function(element){                     //Using Javascript Array Property "forEach" to loop through every element in allFeeds Array
                expect(element.name).toBeDefined();                 // This Expectation expects each name to be defined.
                expect(element.name.length).not.toBe(0);            // This expectation checks the length of the name , if it is 0 , then it is empty , non 0 length means it's not empty.
            });
        });
    });



        describe("The Menu",function(){                             // Test suite defined for tests to be performed over The Menu

         it("is hidden by default",function(){                      // Test to check whether the Menu is hidden by default
            expect($("body").hasClass("menu-hidden")).toBe(true);     // This expectation checks the class attached to body responsible for hiding the menu,by default
         });

        it("shows on first click",function(){                       // Test to check that first click unveils the menu
            $(".menu-icon-link").trigger("click");                  // Trigger click action over the menu icon
            expect($("body").hasClass("menu-hidden")).toBe(false); // Then expect the "menu-hidden" class removed automatically, revealing the menu.
        });

        it("hides on second click",function(){                      // Test to check that second click hides the menu
            $(".menu-icon-link").trigger("click");                  // Trigger click action over the menu icon
            expect($("body").hasClass("menu-hidden")).toBe(true);     // Then expect the "menu-hidden" class added automatically, hiding the menu.
        });


        });



        describe("Initial Entries",function(){                      //Test Suite defined for testing the initial loading of RSS Feeds

         beforeEach(function(done){                                 // beforeEach Function , to run a particular code before all tests. Useful to load Async calls.
            loadFeed(0,function(){                                  // loadFeed function loads 1st feed & done() is passed as a callback so that it tells jasmine when it is done loading,
                done();                                             // so that tests can be performed
            });
         });

         it("should load feeds",function(done){                     // test to check feeds are being loaded, done passed as an arguement so that it starts after loading done by beforeEach()
            expect($(".feed .entry-link .entry").length).toBeGreaterThan(0); // Expect  .feed container to contain 1 .entry element
            done();
         });

        });


        describe("New Feed Selection",function(){                   // Test Suite defined for testing whether changing feed changes the actual Data on page

         var prev;                                                  // Variable to store inner HTML of previous feed
         beforeEach(function(done){
            loadFeed(0,function(){                                  // Load the First Feed & when it is done loading ,
                prev = $(".feed")[0].innerHTML;                     // store present inner HTML in Prev & Trigger the loading of Second Feed.
                loadFeed(1,function(){
                    done();                                         // When Second Feed is loaded , then signal Jasmine that We're done loading. Start the tests. (by using done() function)
            });
            });

         });

         it("should actually change",function(done){                //Test that runs to see whether it changes or not
            expect($(".feed")[0].innerHTML).not.toBe(prev);         //expectation that previous inner content is different from present inner content
            done();                                                 // Signal Jasmine We're done testing.
         });

        });

}());
