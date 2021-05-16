Feature: Edit Post
  @user1 @web
  Scenario: Edit Post Schedule
  Given I log in at "3.3.0"
  When I go to page "/posts"

  Then I navigate to page "http://localhost:3001/ghost/#/editor/post"
  Then I wait for 2 seconds    
  Then I enter "Test post #4" into input field having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
  Then I enter "Test post #4" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"    
  Then I wait for 2 seconds
  Then I navigate to page "http://localhost:3001/ghost/#/posts"
  Then I should see text "Draft"
  Then I click on first element with css selector ".ember-view.permalink.gh-list-data.gh-post-list-title"
  Then I wait for 2 seconds
  Then I clear input field having css selector ".koenig-editor__editor.__mobiledoc-editor"    
  Then I wait for 1 seconds
  Then I press right arrow key into input field having css selector ".koenig-editor__editor.__mobiledoc-editor"
  When I click on element having css selector edit ".gh-publishmenu-trigger"
  When I click on element having css selector edit ".gh-date-time-picker-timezone"
  When I click on element having css selector edit ".gh-publishmenu-button"
  Then I should see text "Scheduled"   
  Then I wait for 2 seconds
  Then I navigate to page "http://localhost:3001/ghost/#/posts"
  Then I should see text "Test post #4"
    

   