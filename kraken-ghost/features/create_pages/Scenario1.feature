Feature: Create Page 1 as draft
  @user1 @web
  Scenario: Create a new Page from New Page link and save it as draft
	Given I log in at "3.3.0"
    When I go to page "/pages"
	When I click on element having css selector ".gh-btn.gh-btn-green.ember-view[href="#/editor/page/"]"
    Then I am in page "/editor/page"
