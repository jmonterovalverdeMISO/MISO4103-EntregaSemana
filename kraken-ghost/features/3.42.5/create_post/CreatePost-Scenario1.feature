Feature: Create Post
  @user1 @web
  Scenario: Create a new Post from New Post link and save it as draft
    Given I log in at "3.42.5" 
    When I go to page "/posts"

    When I click on element having css selector ".gh-btn.gh-btn-green.ember-view[href="#/editor/post/"]"
    Then I am in page "/editor/post"

    When I enter "Test post #1" into input field having css selector ".gh-editor-title"
    When I click on element having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    When I enter "Test content #1" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    When I click on element having css selector ".flex.items-center.pl4.pr4.f8.nudge-left--1.h9.br2.br--right.bg-white>span>div"
    Then I should see text "Draft"

    When I click on element having css selector ".blue.link.fw4.flex.items-center.ember-view[href="#/posts/"]"
    Then I am in page "/posts"
    Then I should see text "Test post #1"