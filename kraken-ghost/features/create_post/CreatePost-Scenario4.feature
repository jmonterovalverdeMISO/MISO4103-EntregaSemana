Feature: Create Post
  @user1 @web
  Scenario: Create a new Post from + sign on dashboard page and publish on a future date
    Given I as a logged user navigate to "/posts"

    When I click on element having css selector ".gh-btn[href="#/editor/post/"]"
    Then I am in page "/editor/post"

    When I enter "Test post #4" into input field having css selector ".gh-editor-title"
    When I click on element having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    When I enter "Test content #4" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    When I click on element having css selector ".flex.items-center.pl4.pr4.f8.nudge-left--1.h9.br2.br--right.bg-white>span>div"
    Then I should see text "Draft"

    When I click on element having css selector ".gh-publishmenu-trigger"
    When I click on element having css selector ".gh-date-time-picker-timezone"
    When I click on element having css selector ".gh-publishmenu-button"
    Then I should see text "Scheduled"

    When I click on element having css selector ".blue.link.fw4.flex.items-center.ember-view[href="#/posts/"]"
    Then I am in page "/posts"

    When I click on element having css selector ".gh-contentfilter-menu.gh-contentfilter-type"
    When I click on element having css selector ".ember-power-select-option[data-option-index="3"]"
    Then I should see text "Test post #4"