Feature: Edit Post
  @user1 @web
  Scenario: Edit tag successful v3.42.5
  Given I log in at "3.42.5"
   
    Then I wait for 2 seconds
    Given I navigate to page "http://localhost:3001/ghost/#/tags"
    Given I navigate to page "http://localhost:3001/ghost/#/tags/new"
    Then I enter "Diphenhydramine, Lidocaine, Nystatin" into input field having id "#tag-name"
    Then I wait for 2 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"
    Then I wait for 2 seconds
    Given I navigate to page "http://localhost:3001/ghost/#/tags"
    Then I should see text "Diphenhydramine, Lidocaine, Nystatin"
    Then I click on first element with css selector ".tags-list.gh-list"
    Then I wait for 2 seconds
    Then I enter "Diphenhydramine, Lidocaine, Nystatin" into input field having id "#tag-name"
    Then I wait for 2 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"
    Then I wait for 2 seconds
    Given I navigate to page "http://localhost:3001/ghost/#/tags"
    Then I should see text "Diphenhydramine, Lidocaine, Nystatin"
