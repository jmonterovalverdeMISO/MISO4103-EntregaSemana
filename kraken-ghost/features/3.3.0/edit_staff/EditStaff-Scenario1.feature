Feature: Edit Staff
  @user1 @web
  Scenario: Edit user profile
  Given I log in at "3.3.0"
   
    Then I navigate to page "http://localhost:3001/ghost/#/staff"    
    Then I wait for 2 seconds
    Then I click on my user record contained in css selector ".apps-grid-cell.tooltip-centered" by using the selector value ".gh-user-name.mb1"    
    Then I wait for 1 seconds    
    Then I clear input field having id "user-name"
    Then I enter "mfelipebello04" into input field having id "user-name"
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"
    Then I navigate to page "http://localhost:3001/ghost/#/staff"
    Then I should see text "mfelipebello04"