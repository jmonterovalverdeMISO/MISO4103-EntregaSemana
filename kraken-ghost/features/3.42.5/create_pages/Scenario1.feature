Feature: Create Page 1 as draft
  @user1 @web
  Scenario: Create a new Page from New Page link and save it as draft
    Given I log in at "3.42.5" 
    When I go to page "/pages"
	
    When I click on element having css selector ".gh-btn.gh-btn-green.ember-view[href="#/editor/page/"]"
    Then I am in page "/editor/page"

    When I enter "Test page #1" into input field having css selector ".gh-editor-title"
    When I click on element having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    When I enter "Test content page #1" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    When I click on element having css selector ".flex.items-center.pl4.pr4.f8.nudge-left--1.h9.br2.br--right.bg-white>span>div"
    Then I should see text "Draft"

    When I click on element having css selector ".blue.link.fw4.flex.items-center.ember-view[href="#/pages/"]"
    Then I am in page "/pages"
    Then I should see text "Test page #1"