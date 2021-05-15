Feature: Create Page 2 and publish it
  @user1 @web
  Scenario: Create a new Page from New Page link and publish correct
    Given I log in at "3.3.0"
    When I go to page "/pages"

    When I click on element having css selector ".gh-btn.gh-btn-green.ember-view[href="#/editor/page/"]"
    Then I am in page "/editor/page"

    When I enter "Test page #2" into input field having css selector ".gh-editor-title"
    When I click on element having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    When I enter "Test content page #2" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    When I click on element having css selector ".gh-publishmenu-trigger"
    When I click on element having css selector ".gh-publishmenu-button"
    Then I should see text "Published"