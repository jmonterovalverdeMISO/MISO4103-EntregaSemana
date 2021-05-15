Feature: Create Post 3
  @user1 @web
<<<<<<< HEAD:kraken-ghost/features/create_post/CreatePost-Scenario3.feature
  Scenario: Create a new Post from New Post link, with bookmark field and save it as draft
    Given I as a logged user navigate to "/posts"
    Then I am in page "/posts"
=======
  Scenario: Create a new Post from New Post link, with bookmark field
    Given I log in at "3.3.0"
    When I go to page "/posts"
>>>>>>> 651bcc55a6952b1704d28f875b662768e7ba3c49:kraken-ghost/features/3.3.0/create_post/CreatePost-Scenario3.feature

    When I click on element having css selector ".gh-btn.gh-btn-green.ember-view[href="#/editor/post/"]"
    Then I am in page "/editor/post"

    When I enter "Test post #3 with Bookmark" into input field having css selector ".gh-editor-title"
    When I click on element having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    When I click on element having css selector "button.koenig-plus-menu-button.flex.justify-center.items-center.relative.w9.h9.ba.b--midlightgrey-l2.bg-white.br-100.anim-normal"
    When I click on element having css selector "div.f-supersmall.tracked-1.fw3.ma0.mt1"
    Then I should see text "Draft"
    
    #When I enter "https://biblioteca.uniandes.edu.co/" into input field having css selector ".miw-100[name="url"]"
    When I enter "https://biblioteca.uniandes.edu.co/" into active field
    When I click on element having css selector ".flex.items-center.pl4.pr4.f8.nudge-left--1.h9.br2.br--right.bg-white>span>div"
    Then I should see text "Draft"

    When I click on element having css selector ".blue.link.fw4.flex.items-center.ember-view[href="#/posts/"]"
    Then I am in page "/posts"
    Then I should see text "Test post #3 with Bookmark"


    
    