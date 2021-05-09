Feature: Create Post 2
  @user1 @web
  Scenario: Create a new Post from New Post link and publish it right away
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I enter "jelimv@hotmail.com" into input field having id "ember8"
    When I enter "Curso.4103" into input field having id "ember10"
    When I click on element having css selector ".login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view"
    Then I am in page "http://localhost:2368/ghost/#/site"

    When I click on element having css selector "a.ember-view[href="#/posts/"]"
    Then I am in page "http://localhost:2368/ghost/#/posts"

    When I click on element having css selector ".gh-btn.gh-btn-green.ember-view[href="#/editor/post/"]"
    Then I am in page "http://localhost:2368/ghost/#/editor/post"

    When I enter "Test post #2" into input field having css selector ".gh-editor-title"
    When I click on element having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    When I enter "Test content #2" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    When I click on element having css selector ".gh-publishmenu-trigger"
    When I click on element having css selector ".gh-publishmenu-button"
    Then I should see text "Published"

    When I click on element having css selector ".blue.link.fw4.flex.items-center.ember-view[href="#/posts/"]"
    Then I am in page "http://localhost:2368/ghost/#/posts"
    Then I should see text "Test post #2"

    When I navigate to page "http://localhost:2368/ghost/#/site"
    Then I should see text "Test post #2"