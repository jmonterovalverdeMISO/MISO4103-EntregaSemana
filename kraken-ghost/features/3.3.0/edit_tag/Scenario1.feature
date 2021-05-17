Feature: Edit Tag

  @user1 @web
  Scenario: Edit Tag succeful
    Given I log in at "3.3.0"
    Then I wait for 2 seconds

    Given I go to page "/tags/new"
    Then I enter "Diphenhydramine, Lidocaine, Nystatin" into input field having id "tag-name"
    Then I wait for 2 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"
    Then I wait for 2 seconds

    Given I go to page "/tags"
    Then I should see text "Diphenhydramine, Lidocaine, Nystatin"
    Then I click on first element with css selector ".tags-list.gh-list"
    Then I wait for 2 seconds
    Then I enter "Diphenhydramine, Lidocaine, Nystatin" into input field having id "tag-name"
    Then I wait for 2 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"
    Then I wait for 2 seconds

    Given I go to page "/tags"
    Then I should see text "Diphenhydramine, Lidocaine, Nystatin"
