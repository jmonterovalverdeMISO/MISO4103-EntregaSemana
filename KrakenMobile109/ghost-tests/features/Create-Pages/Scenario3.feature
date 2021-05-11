Feature: Create Page 3 and publish it with scheduled
  @user1 @web
  Scenario: Create a new Page from + sign on dashboard page and publish on a future date
    Given I navigate to page "http://localhost:2368/ghost/#/signin"

    When I enter "jc.dazam1@uniandes.edu.co" into input field having id "ember8"
    When I enter "uniandes1234" into input field having id "ember10"
    When I click on element having css selector ".login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view"
    Then I am in page "http://localhost:2368/ghost/#/site"
    
	When I click on element having css selector "a.ember-view[href="#/pages/"]"
    Then I am in page "http://localhost:2368/ghost/#/pages"
	
    When I click on element having css selector ".gh-btn.gh-btn-green.ember-view[href="#/editor/page/"]"
    Then I am in page "http://localhost:2368/ghost/#/editor/page"

    When I enter "Test page #3" into input field having css selector ".gh-editor-title"
    When I click on element having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    When I enter "Test content #3" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    When I click on element having css selector ".flex.items-center.pl4.pr4.f8.nudge-left--1.h9.br2.br--right.bg-white>span>div"
    Then I should see text "Draft"

    When I click on element having css selector ".gh-publishmenu-trigger"
    When I click on element having css selector ".gh-date-time-picker-timezone"
    When I click on element having css selector ".gh-publishmenu-button"
    Then I should see text "Scheduled"

    When I click on element having css selector ".blue.link.fw4.flex.items-center.ember-view[href="#/pages/"]"
    Then I am in page "http://localhost:2368/ghost/#/pages"