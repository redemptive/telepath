module.exports = {
 
	url: 'http://localhost/login',
 
	elements: {
		emailInput: by.name('email'),
		nameInput: by.name('name'),
		passwordInput: by.name('password'),
		submitButton: by.className('form-submit')
	},

	enterInInputBox: function(element, input) {
		return driver.findElement(element).sendKeys(input);
	},
 
	enterEmailAddress: function (email) {
		return this.enterInInputBox(page.register.elements.emailInput, email);
	},

	enterName: function (name) {
		return this.enterInInputBox(page.register.elements.nameInput, name);
	},

	enterPassword: function (password) {
		return this.enterInInputBox(page.register.elements.passwordInput, password);
	},

	submit: function () {
		return driver.findElement(page.register.elements.submitButton).click();
	}
};