Feature: Create Post 2
  @user1 @web
  Scenario: Create a new Post from New Post link and save it as draft
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I enter "jelimv@hotmail.com" into input field having id "ember8"
    When I enter "Curso.4103" into input field having id "ember10"
    When I click on element having css selector ".login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view"
    Then I am in page "http://localhost:2368/ghost/#/dashboard"

    When I click on element having css selector ".ember-view[href="#/posts/"]"
    Then I am in page "http://localhost:2368/ghost/#/posts"

    When I click on element having css selector ".ember-view.gh-btn.gh-btn-primary.view-actions-top-row[href="#/editor/post/"]"
    Then I am in page "http://localhost:2368/ghost/#/editor/post"

    When I enter "Test post #2" into input field having css selector ".gh-editor-title"
    When I click on element having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    When I enter "Test content" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    When I click on element having css selector ".gh-publishmenu-trigger"
    When I click on element having css selector ".gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view"
    Then I should see text "Published"

    When I click on element having css selector ".gh-editor-back-button.ember-view"
    Then I am in page "http://localhost:2368/ghost/#/posts"
    Then I should see text "Test post #2"

    When I navigate to page "http://localhost:2368/ghost/#/site"
    Then I should see text "Test post #2"