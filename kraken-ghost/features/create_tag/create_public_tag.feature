# Feature: Create public tag

# @user1 @web
# Scenario: As a user, I should be able to create a public tag with only the name
# Given I as a logged user navigate to "/tags"
# When I click on element with text "Public tags"
# And I click on element with text "New tag"
# And I enter "My first tag" into input field having css selector "input[name='name']"
# And I click on element having css selector ".view-actions button"
# Then I should see text "Saved"