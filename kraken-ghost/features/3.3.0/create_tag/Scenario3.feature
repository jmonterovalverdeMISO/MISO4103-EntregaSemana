Feature: Create public tag without name

  @user1 @web
  Scenario: As a user, I should not be able to create a public tag without name
    Given I log in at "3.3.0"
    When I go to page "/tags"
    When I click on element with text "Public tags"
    And I click on element with text "New tag"
    And I click on element having css selector ".view-actions button"
    Then I should see text "Retry"
    And I should see text "You must specify a name for the tag."
