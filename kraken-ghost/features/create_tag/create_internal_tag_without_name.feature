Feature: Create internal tag without name

@user1 @web
Scenario: As a user, I should not be able to create a internal tag without name
Given I as a logged user navigate to "/tags"
When I click on element with text "Internal tags"
And I click on element with text "New tag"
And I click on element having css selector ".view-actions button"
Then I should see text "Retry"
And I should see text "You must specify a name for the tag."