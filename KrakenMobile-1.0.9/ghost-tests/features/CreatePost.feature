Feature: Create Post
  @user1 @web
  Scenario: Create a new Post from New Post link and save it as draft
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    Then I enter "jelimv@hotmail.com" into input field having id "ember8"
    Then I enter "Curso.4103" into input field having id "ember10"
    Then I click on element having css selector ".login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view"
    Then I click on element having css selector ".ember-view[href="#/posts/"]"
    Then I click on element having css selector ".ember-view.gh-btn.gh-btn-primary.view-actions-top-row[href="#/editor/post/"]"
    Then I enter "Test title" into input field having css selector ".gh-editor-title"
    Then I click on element having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    Then I enter "Test content" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    Then I click on element having css selector ".gh-editor-post-status"
    Then I should see text "Draft"

  @user2 @web
  Scenario: Create a new Post from New Post link and save it as draft
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    Then I enter "jelimv@hotmail.com" into input field having id "ember8"
    Then I enter "Curso.4103" into input field having id "ember10"
    Then I click on element having css selector ".login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view"
    Then I click on element having css selector ".ember-view[href="#/posts/"]"
    Then I click on element having css selector ".ember-view.gh-btn.gh-btn-primary.view-actions-top-row[href="#/editor/post/"]"
    Then I enter "Test title" into input field having css selector ".gh-editor-title"
    Then I click on element having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    Then I enter "Test content" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    Then I click on element having css selector ".gh-publishmenu-trigger"
    Then I click on element having css selector ".gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view"
    Then I should see text "Published"

#This one is in progress
@user3 @web
  Scenario: Create a new Post from New Post link, add HTML and save it as draft
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    Then I enter "jelimv@hotmail.com" into input field having id "ember8"
    Then I enter "Curso.4103" into input field having id "ember10"
    Then I click on element having css selector ".login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view"
    Then I click on element having css selector ".ember-view[href="#/posts/"]"
    Then I click on element having css selector ".ember-view.gh-btn.gh-btn-primary.view-actions-top-row[href="#/editor/post/"]"
    Then I click on element having css selector "button[aria-label="Add a card"]"
    Then I click on element having css selector ".flex[title="HTML"]"
    Then I should see text "Draft"
    #Then I enter "<button>alfa</button>" into input field having css selector ".koenig-card-html--editor.ember-view"

    
    