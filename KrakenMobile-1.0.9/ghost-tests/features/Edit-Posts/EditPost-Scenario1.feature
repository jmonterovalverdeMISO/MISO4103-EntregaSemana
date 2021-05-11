Feature: Edit Post
  @user1 @web
  Scenario: Edit Post from link and publish it right away
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I enter "mfelipebello04@gmail.com" into input field having id "ember8"
    When I enter "pruebas1234" into input field having id "ember10"
    When I click on element having css selector ".login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view"
    Then I am in page "http://localhost:2368/ghost/#/site"

    When I click on element having css selector "a.ember-view[href="#/posts/"]"
    Then I am in page "http://localhost:2368/ghost/#/posts"

    When I click on element having css selector "a.permalink.gh-list-data.gh-post-list-featured.ember-view[title="Edit this post"]"
    When I enter "Test post #1" into input field having css selector ".gh-editor-title"
    When I click on element having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    When I enter "Test content #1" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    When I click on element having css selector ".gh-publishmenu-trigger"
    When I click on element having css selector ".gh-publishmenu-button"
    When I click on element having css selector ".blue.link.fw4.flex.items-center.ember-view[href="#/posts/"]"
    Then I am in page "http://localhost:2368/ghost/#/editor/post"

    Then I am in page "http://localhost:2368/ghost/#/posts"
    Then I should see text "Test post #1"


   
   
   