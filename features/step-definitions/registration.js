module.exports = function() {
    
	this.Given(/^I load the registration page$/, function() {
		return helpers.loadPage(page.register.url);
	});

	this.When(/^I enter the email address "([^"]*)"$/, function(email) {
		return page.register.enterEmailAddress(email);
	});

	this.When(/^I enter the name "([^"]*)"$/, function(name) {
		return page.register.enterName(name);
	});

	this.When(/^I enter the password "([^"]*)"$/, function(password) {
		return page.register.enterPassword(password);
	});

	this.When(/^I click submit$/, function() {
		return page.register.submit();
	});

	this.Then(/^I should see the login page$/, function() {
		return driver.wait(until.elementsLocated(by.className('login-form')), 10000);
	});

	this.Then(/^I should see an error alert box$/, function() {
		return driver.wait(driver.switchTo().alert().accept(), 5000);
	});
};