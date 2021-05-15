Feature: Edit Post 2
  @user1 @web
  Scenario: Edit Post
    Given I log in at "3.42.5" 
    When I go to page "/posts"

    When I click on element having css selector "a.permalink.gh-list-data.gh-post-list-featured.ember-view[title="Edit this post"]"
    When I enter "Test post #2" into input field having css selector ".gh-editor-title"
    When I click on element having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    When I enter "Test content #2" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    When I click on element having css selector ".gh-publishmenu-trigger"
    When I click on element having css selector ".gh-publishmenu-button"
    When I click on element having css selector ".blue.link.fw4.flex.items-center.ember-view[href="#/posts/"]"
    Then I am in page "/post"

    Then I am in page "/posts"
    Then I should see text "Test post #2"


   
   
   