Feature: Create internal tag

  @user1 @web
  Scenario: As a user, I should be able to create a internal tag with only the name
    Given I log in at "3.42.5" 
    When I go to page "/tags"
    When I click on element with text "Internal tags"
    And I click on element with text "New tag"
    And I enter "My first tag" into input field having css selector "input[name='name']"
    And I click on element having css selector ".view-actions button"
    Then I should see text "Saved"