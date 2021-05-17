Feature: Create Post 2
  @user1 @web
  Scenario: Create a new Post from New Post link and publish it right away
    Given I log in at "3.3.0"
    When I go to page "/posts"

    When I click on element having css selector ".gh-btn.gh-btn-green.ember-view[href="#/editor/post/"]"
    Then I am in page "/editor/post"

    When I enter "Test post #2" into input field having css selector ".gh-editor-title"
    When I click on element having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    When I enter "Test content #2" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    When I click on element having css selector ".gh-publishmenu-trigger"
    When I click on element having css selector ".gh-publishmenu-button"
    Then I should see text "Published"

    When I click on element having css selector ".blue.link.fw4.flex.items-center.ember-view[href="#/posts/"]"
    Then I am in page "/posts"
    Then I should see text "Test post #2"