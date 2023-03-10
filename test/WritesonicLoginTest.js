const allure = codeceptjs.container.plugins('allure');
Feature('SignIn');

// Scenario('@verify login By Invalid Password', ({ I, loginPage, testData, expectedAssertionsPage }) => {
//     I.amOnPage(testData.home.baseUrl);
//     loginPage.clickOnSignInWithPassword();
//     loginPage.setEmail(testData.login.email);

//     loginPage.setPassword(testData.login.invalidpassword);
//     loginPage.clickOnBtnSignIn();
//     I.see(expectedAssertionsPage.login.wrongpassword);

// });
// Scenario('@verify login By Invalid Email', ({ I, loginPage, testData, expectedAssertionsPage }) => {
//     I.amOnPage(testData.home.baseUrl);
//     loginPage.clickOnSignInWithPassword();
//     loginPage.setEmail(testData.login.invalidemail);
//     loginPage.setPassword(testData.login.password);
//     loginPage.clickOnBtnSignIn();
//     I.see(expectedAssertionsPage.login.invalidemailId);
// });
// Scenario('@verify login By Mandatory Validation For Email', ({ I, loginPage, testData, expectedAssertionsPage }) => {
//     I.amOnPage(testData.home.baseUrl);
//     loginPage.clickOnSignInWithPassword();
//     loginPage.setEmail(testData.login.emptyemail);
//     loginPage.setPassword(testData.login.password);
//     loginPage.clickOnBtnSignIn();
//     I.wait(3);
// });
// Scenario('@verify login By Mandatory Validation For Password', ({ I, loginPage, testData, expectedAssertionsPage }) => {
//     I.amOnPage(testData.home.baseUrl);
//     loginPage.clickOnSignInWithPassword();
//     loginPage.setEmail(testData.login.email);
//     loginPage.setPassword(testData.login.emptypaswd);
//     loginPage.clickOnBtnSignIn();
//     I.wait(3);
// });
// Scenario('@verify writesonic Login Functionality', ({ I, loginPage, testData, expectedAssertionsPage }) => {
//     I.amOnPage(testData.home.baseUrl);
//     loginPage.clickOnSignInWithPassword();
//     loginPage.setEmail(testData.login.email);
//     loginPage.setPassword(testData.login.password);
//     loginPage.clickOnBtnSignIn();
//     I.waitForVisible(loginPage.veryMyAccount, 50);

// });
// Scenario('@verify login funtionality using Google Account', ({ I, loginPage, testData, expectedAssertionsPage }) => {
//     allure.epic('SignIn');
//     allure.feature('SignIn');
//     allure.severity('Blocker');
//     allure.setDescription('Verify Google Account Login Feature');

//     I.amOnPage(testData.home.baseUrl);
//     loginPage.loginWithGoogleAccount(testData.login.email, testData.login.password);
//     I.waitForVisible(loginPage.veryMyAccount, 50);
//     I.see(expectedAssertionsPage.login.myAccount);
// });
// Scenario('@verify login funtionality using OTP', async ({ I, loginPage, testData, expectedAssertionsPage }) => {
//     allure.epic('SignIn');
//     allure.feature('SignIn');
//     allure.severity('Blocker');
//     allure.setDescription('Verify Login with OTP Feature');

//     I.amOnPage(testData.home.baseUrl);
//     I.wait(5);
//     loginPage.setEmail(testData.login.email);
//     loginPage.clickOnSignWithOTP();
//     loginPage.setOTP(testData.login.invalidcode);
//     loginPage.clickOnVerify();
//     I.see(expectedAssertionsPage.login.invalidcode);
// });
Scenario('@verify login funtionality using OTP', async ({ I, loginPage, testData, expectedAssertionsPage }) => {
    allure.epic('SignIn');
    allure.feature('SignIn');
    allure.severity('Blocker');
    allure.setDescription('Verify Login with OTP Feature');

    I.amOnPage(testData.home.baseUrl);
    I.wait(5);
    loginPage.setEmail(testData.login.email);
    loginPage.clickOnSignWithOTP();
    I.openNewTab();
    I.amOnPage(testData.login.gmailsigninurl);
    I.wait(5);
    loginPage.clickOnSignInButtonOnGmail();
    loginPage.setGmail(testData.login.email);
    loginPage.clickOnNextButton();
    I.wait(2);
    loginPage.setGmailPassword(testData.login.password)
    loginPage.clickOnNextButton();
    I.wait(3);
    loginPage.clickOnConfirmMail();
    I.wait(3);
    let otp = await I.grabTextFrom(loginPage.txtGrabOtp);
    let num = parseInt(otp);
    console.log(num);
    I.closeCurrentTab();
    I.wait(3);
    loginPage.setOTP(num);
    loginPage.clickOnVerify();
    I.waitForVisible(loginPage.veryMyAccount, 100);
    I.see(expectedAssertionsPage.login.myAccount);
});