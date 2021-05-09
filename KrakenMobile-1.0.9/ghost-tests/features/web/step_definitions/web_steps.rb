if ENV["ADB_DEVICE_ARG"].nil?
  require 'kraken-mobile/steps/web/kraken_steps'

  Then(/^I am in page "([^\"]*)"$/) do |web_url|
    $url_variable = @driver.current_url 
    raise 'ERROR: Invalid URL' unless web_url == $url_variable
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
   
end
