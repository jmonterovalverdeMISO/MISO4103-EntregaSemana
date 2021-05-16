if ENV["ADB_DEVICE_ARG"].nil?
  require 'kraken-mobile/steps/web/kraken_steps'
  require 'selenium-webdriver'

  wait = Selenium::WebDriver::Wait.new(:timeout => 60)

  ghost_url = 'http://localhost:3001'
  ghost_user = ENV["GHOST_USER"]
  ghost_pass = ENV["GHOST_PASS"]

  When(/^I go to page "([^\"]*)"$/) do |path|
    @driver.navigate.to "#{ghost_url}/ghost/##{path}"
  end

  Given(/^I log in at "([^\"]*)"$/) do |version|
    if version == '3.3.0'
      print("version: " + version)
      ghost_url = 'http://localhost:3001' #ENV['GHOST_3_3_0']
    elsif version == '3.42.5'
      print("version: " + version)
      ghost_url = 'http://localhost:3002' #ENV['GHOST_3_42_5']
    end

    @driver.navigate.to "#{ghost_url}/ghost"
    
    wait.until{@driver.find_element(css: "button[type='submit']")}

    email_input = @driver.find_element(name: "identification")
    password_input = @driver.find_element(name: "password")
    submit_button = @driver.find_element(css: "button[type='submit']")

    @driver.action.send_keys(email_input, ghost_user).perform
    @driver.action.send_keys(password_input, ghost_pass).perform
    @driver.action.click(submit_button).perform

    wait.until{@driver.current_url == "#{ghost_url}/ghost/#/site"}
  end

  When(/^I click on element with text "([^\"]*)"$/) do |text|
    element = @driver.find_element(xpath: "//*[contains(text(),'#{text}')]")

    @driver.action.click(element).perform
  end

  Then(/^I am in page "([^\"]*)"$/) do |path|
    $url_variable = @driver.current_url
    raise 'ERROR: Invalid URL' unless "#{ghost_url}/ghost/##{path}" == $url_variable
  end

  Then(/^I am logged in/) do
    $user_variable = "User logged in"
    File.write('./.userAuthenticated.txt', $user_variable)
    puts($user_variable) 
    
  end

  When(/^I enter "([^\"]*)" into active field/) do |text|
    @driver.switch_to().active_element().send_keys(text)
    sleep 2
  end

  Given(/^I am authenticated/) do
    $url_variable = IO.read("./.userAuthenticated.txt") 
    raise 'ERROR: user not logged in' unless $url_variable == "User logged in"
    puts($user_variable) 
  end

  Then(/^I store a variable with the current url$/) do
    $url_variable = @driver.current_url 
    puts($url_variable) 
    File.write('./.variable.txt', $url_variable)
  end
  
  Given(/^I navigate to page with the url stored in the variable$/) do
    $url_variable = IO.read("./.variable.txt") 
    puts($url_variable)
    @driver.navigate.to $url_variable
    sleep 2
  end

  Then(/^I click on first element with css selector "(.*?)"$/) do |selector|
    @driver.find_elements(:css, selector)[0].click    
  end

  Then(/^I clear input field having css selector "(.*?)"$/) do |selector|
    @driver.find_element(:css, selector).clear
  end

  Then(/^I press right arrow key into input field having css selector "(.*?)"$/) do |selector|
    @driver.find_element(:css, selector).send_keys(:arrow_right) 
  end

  Then(/^I click on element contained in css selector "(.*?)" with title "(.*?)"$/) do |selector, text|
    elements = @driver.find_elements(:css, selector)
    elements.each do |element|
      attr = element.attribute('title')
      if attr == text
        element.click
        break
      end
    end
  end

  Then(/^I click on element having css selector edit "(.*?)"$/) do |selector|
    @driver.find_element(:css, selector).click
  end



end
