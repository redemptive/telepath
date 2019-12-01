module.exports = function() {
    
	this.Given(/^I load the login page$/, function() {
		return helpers.loadPage(page.login.url);
	});
    
	this.Then(/^I should see the dashboard page$/, function() {
		return driver.wait(until.elementsLocated(by.className('App')), 10000);
	});
};