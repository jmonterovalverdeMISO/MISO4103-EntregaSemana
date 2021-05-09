Feature: Create Post
  @user1 @web
  Scenario: Create a new Post from New Post link just with a tag
    Given I navigate to page "http://localhost:2368/ghost/#/signin"

    When I enter "jelimv@hotmail.com" into input field having id "ember8"
    When I enter "Curso.4103" into input field having id "ember10"
    When I click on element having css selector ".login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view"
    Then I am in page "http://localhost:2368/ghost/#/dashboard"
    
    When I click on element having css selector ".ember-view[href="#/posts/"]"
    Then I am in page "http://localhost:2368/ghost/#/posts"

    When I click on element having css selector ".ember-view.gh-btn.gh-btn-primary.view-actions-top-row[href="#/editor/post/"]"
    Then I am in page "http://localhost:2368/ghost/#/editor/post"

    When I click on element having css selector ".gh-btn.gh-btn-editor.gh-btn-icon.only-has-icon.gh-actions-cog.ml3"
    When I click on element having css selector ".ember-power-select-trigger-multiple-input"
    When I click on element having css selector ".ember-power-select-option[data-option-index="0"]"
    When I enter "Test post #5 with tags" into input field having css selector ".gh-editor-title"
    When I click on element having css selector ".close.settings-menu-header-action"
    When I click on element having css selector ".gh-editor-post-status"    
    Then I should see text "Draft"

    
    When I click on element having css selector ".gh-editor-back-button.ember-view"
    Then I am in page "http://localhost:2368/ghost/#/posts"

    When I click on element having css selector ".gh-contentfilter-menu.gh-contentfilter-type "
    When I click on element having css selector ".ember-power-select-option[data-option-index="1"]"
    Then I should see text "Test post #5 with tags"

