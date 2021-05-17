Feature: Edit Post
  @user1 @web
  Scenario: Edit Post successful
    Given I log in at "3.3.0"
    When I go to page "/posts"

    Then I go to page "/editor/post"
    Then I wait for 2 seconds    
    Then I enter "Test Post #1 - Edit" into input field having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
    Then I enter "Test Post #1 - Edit" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"    
    Then I wait for 2 seconds
    Then I go to page "/posts"
    Then I should see text "Draft"
    Then I click on first element with css selector ".ember-view.permalink.gh-list-data.gh-post-list-title"
    Then I wait for 2 seconds
    Then I clear input field having css selector ".koenig-editor__editor.__mobiledoc-editor"    
    Then I wait for 1 seconds
    Then I press right arrow key into input field having css selector ".koenig-editor__editor.__mobiledoc-editor"
    Then I wait for 1 seconds
    Then I enter "Test Post #1 final - Edit" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"   
    Then I wait for 2 seconds
    Then I go to page "/posts"
    Then I should see text "Draft"

   

   
   
   