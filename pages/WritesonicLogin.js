const { I, expectedAssertionsPage, testDataPage } = inject();
class loginPage {
  //Elements---------------------------

  txtEmail = "//input[@id='email']";
  txtPassword = "//input[@id='password']";
  btnSignIn = "//a[@class='link template-button']";
  btnLogin = "//button[@type='submit']";
  veryMyAccount = "//h1[text()='Library']";
  iframeGoogle = "//iframe[@title='Sign in with Google Button']";
  btnGoogle = { xpath: "//div[@class='nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb ']/span[@class='nsm7Bb-HzV7m-LgbsSe-BPrWId']" };
  txtGmail = "//input[@type='email']";
  btnNext = "//span[text()='Next']";
  txtGmailPassword = "//input[@name='Passwd']";
  btnContinueWuthEmail = "//div[@class='flex justify-center items-center']";
  lblcode = "//input[@id='code']";
  btnVerify = "//div[text()='Verify']";
  btnSignInWithPassword = "//div[text()='Sign in with password']";
  btnSignInWithOTP = "//div[text()='Sign in with OTP']";
  lblEmail = "//input[@type='email']";
  lblPassword = "//input[@type='password']";
  lblConfirmMail = "(//span[text()='Confirm your email to start using Writesonic'])[2]";
  getTxtOTP = "//td[contains(text(),'Or you can also')]/parent::tr/following-sibling::tr/td";
  txtOtp = "//input[@id='code']";
  //btnVerify = "//div[normalize-space()='Verify']";
  txtGrabOtp = "//td[contains(text(),'Or you can also')]/parent::tr/following-sibling::tr/td";
  btnSignInForGmail = "//a[text()='Sign in']";

  //Method-------------------------------
  clickOnSignInTab() {
    I.waitForVisible(this.btnSignIn, 10);
    I.click(this.btnSignIn);
  };
  setEmail(email) {
    I.clearField(this.txtEmail);
    I.fillField(this.txtEmail, email);
  };
  setPassword(password) {
    I.clearField(this.txtPassword);
    I.fillField(this.txtPassword, password);
  };
  setCode(code) {
    I.fillField(this.lblcode, code)
  };
  clickOnVerify() {
    I.click(this.btnVerify);
  };
  clickOnBtnSignIn() {
    I.click(this.btnLogin);
  };
  clickOnSignInWithPassword() {
    I.click(this.btnSignInWithPassword);
  };
  clickOnContinueEmailButton() {
    I.click(this.btnContinueWuthEmail);
  };
  loginWithGoogleAccount(email, password) {
    I.see(expectedAssertionsPage.login.loginPage);
    I.wait(3);
    I.switchTo(this.iframeGoogle);
    I.waitForVisible(this.btnGoogle, 80);
    I.click(this.btnGoogle);
    I.wait(3);
    I.switchToNextTab();
    I.wait(3);
    I.see(expectedAssertionsPage.login.googleLogin);
    I.fillField(this.txtGmail, email)
    I.click(this.btnNext);
    I.wait(3);
    I.waitForVisible(this.txtGmailPassword, 100);
    I.fillField(this.txtGmailPassword, password)
    I.click(this.btnNext);
    I.switchToPreviousTab();
    I.wait(10);
  };
  loginWithPassword(email, password) {
    I.click(this.btnSignInWithPassword);
    I.waitForVisible(this.txtPassword, 30);
    I.fillField(this.txtEmail, email);
    I.fillField(this.txtPassword, password);
    I.click(this.btnLogin);
    I.waitForVisible(this.veryMyAccount, 50);
  };

  //sign in with otp---------
  clickOnSignWithOTP() {
    I.waitForVisible(this.btnSignInWithOTP);
    I.click(this.btnSignInWithOTP);
  };

  setOTP(otp) {
    I.waitForVisible(this.txtOtp, 20);
    I.fillField(this.txtOtp, otp);
  };

  clickOnVerifyButton() {
    I.click(this.btnVerify);
  };

  //-------gmail------------

  setGmail(gmail) {
    I.waitForVisible(this.lblEmail);
    I.fillField(this.lblEmail, gmail)
  };

  clickOnNextButton() {
    I.click(this.btnNext);
  };

  setGmailPassword(pswrd) {
    I.waitForVisible(this.lblPassword, 50);
    I.fillField(this.lblPassword,pswrd);
  };

  clickOnConfirmMail() {
    I.waitForVisible(this.lblConfirmMail, 30);
    I.click(this.lblConfirmMail);
  };
  clickOnSignInButtonOnGmail(){
    I.click(this.btnSignInForGmail);
  }

}
module.exports = new loginPage();