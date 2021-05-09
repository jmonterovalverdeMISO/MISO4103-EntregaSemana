Feature: Create Post
  @user1 @web
  Scenario: Create a new Post from New Post link just with a tag
    Given I navigate to page "http://localhost:2368/ghost/#/signin"

    When I enter "jelimv@hotmail.com" into input field having id "ember8"
    When I enter "Curso.4103" into input field having id "ember10"
    When I click on element having css selector ".login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view"
    
    When I click on element having css selector "a.ember-view[href="#/posts/"]"
    Then I am in page "http://localhost:2368/ghost/#/posts"

    When I click on element having css selector ".gh-btn.gh-btn-green.ember-view[href="#/editor/post/"]"
    Then I am in page "http://localhost:2368/ghost/#/editor/post"

    When I click on element having css selector ".post-settings"
    When I click on element having css selector "#tag-input"
    When I click on element having css selector ".ember-power-select-option[data-option-index="0"]"
    When I enter "Test post #5 with tags" into input field having css selector ".gh-editor-title"
    When I click on element having css selector ".close.settings-menu-header-action"
    When I click on element having css selector ".flex.items-center.pl4.pr4.f8.nudge-left--1.h9.br2.br--right.bg-white>span>div"    
    Then I should see text "Draft"

    
    When I click on element having css selector ".blue.link.fw4.flex.items-center.ember-view[href="#/posts/"]"
    Then I am in page "http://localhost:2368/ghost/#/posts"

    When I click on element having css selector ".gh-contentfilter-menu.gh-contentfilter-type.ember-view"
    When I click on element having css selector "li.ember-power-select-option[data-option-index="1"]"
    Then I should see text "Test post #5 with tags"

