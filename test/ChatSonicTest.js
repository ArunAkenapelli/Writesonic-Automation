const allure = codeceptjs.container.plugins('allure');
Feature('ChatSonic');

Before(({ I, loginPage, testData }) => {
    I.amOnPage(testData.home.baseUrl);
    loginPage.loginWithGoogleAccount(testData.login.email, testData.login.password);

});
Scenario('@ Mandatory Validation for Chat Message Field', ({ I, ChatSonicPage, expectedAssertionsPage }) => {
    allure.epic('General Writing');
    allure.feature('ChatSonic');
    allure.severity('Normal');
    allure.setDescription('Mandatory Validation for Chat Field');
    ChatSonicPage.clickOnChatSonicTab();
    I.see(expectedAssertionsPage.ChatSonic.gettextchatsonic);
    if (I.see(expectedAssertionsPage.ChatSonic.gettxtHereswhatsnew)) {
        ChatSonicPage.clickOnLetsGoButton();
    };
    ChatSonicPage.clickOnSendButton();
    I.see(expectedAssertionsPage.ChatSonic.gettxtpleaseentermessage);

});
Scenario('@ Invalid Data Validation for Chat Message Field', ({ I, ChatSonicPage, expectedAssertionsPage, testData }) => {
    allure.epic('General Writing');
    allure.feature('ChatSonic');
    allure.severity('Normal');
    allure.setDescription('Data Validation for Chat Field');
    ChatSonicPage.clickOnChatSonicTab();
    I.see(expectedAssertionsPage.ChatSonic.gettextchatsonic);
    if (I.see(expectedAssertionsPage.ChatSonic.gettxtHereswhatsnew)) {
        ChatSonicPage.clickOnLetsGoButton();
    };
    ChatSonicPage.setChatSonicText(testData.ChatSonic.invaliddata);
    ChatSonicPage.clickOnSendButton();
    I.seeElement(ChatSonicPage.gettxtInvalidData);

});
Scenario('@ verify Chat Generation using General AI', ({ I, ChatSonicPage, testData, expectedAssertionsPage, BaseAutomationPage }) => {
    allure.epic('General Writing');
    allure.feature('ChatSonic');
    allure.severity('CRITICAL');
    allure.setDescription('Verify ChatSonic Feature');

    ChatSonicPage.clickOnChatSonicTab();
    I.see(expectedAssertionsPage.ChatSonic.gettextchatsonic);
    if (I.see(expectedAssertionsPage.ChatSonic.gettxtHereswhatsnew)) {
        ChatSonicPage.clickOnLetsGoButton();
    };
    ChatSonicPage.clickOnWatchDemo();
    I.see(expectedAssertionsPage.ChatSonic.gettxtfromyoutube);
    I.closeCurrentTab();
    ChatSonicPage.clickOnChangemodeButton();
    ChatSonicPage.clickOnGeneralAi();
    ChatSonicPage.clickOnStartChat();
    I.seeElement(ChatSonicPage.gettxtYouarechattingwithGeneralAI);
    I.wait(3);
    ChatSonicPage.setChatSonicText(testData.ChatSonic.chatsonictext);
    ChatSonicPage.clickOnSendButton();
    I.see(expectedAssertionsPage.ChatSonic.gettxtresetchat);
    ChatSonicPage.clickOnEditIconForQuestion();
    ChatSonicPage.clickOnReSubmitButton();
    ChatSonicPage.clickOnEditIconForQuestion();
    BaseAutomationPage.clickOnCancelBtnWhileEdit();
    ChatSonicPage.clickOnIncludelatestGoogledataToggleButton();
    I.wait(10);
    ChatSonicPage.setChatSonicText(testData.ChatSonic.chatsonictext);
    ChatSonicPage.clickOnSendButton();
    ChatSonicPage.clickOnRecordingButton();
    I.see(expectedAssertionsPage.ChatSonic.gettxtstoprecording);
    ChatSonicPage.clickOnRecordingButton();
    //  I.see(expectedAssertionsPage.ChatSonic.gettxtstartrecording);
    ChatSonicPage.clickOnTextToSpeech();
    ChatSonicPage.clickOnEditIcon();
    ChatSonicPage.clickOnSaveButton();
    ChatSonicPage.clickOnEditIcon();
    BaseAutomationPage.clickOnCancelBtnWhileEdit();
    I.see(expectedAssertionsPage.ChatSonic.gettxtmessagebeensuccessfully);
    ChatSonicPage.clickOnCopyIcon();
    I.see(expectedAssertionsPage.ChatSonic.gettxttexthasbeencopiedtoclipboard);
    ChatSonicPage.clickOnLikeIcon();
    ChatSonicPage.clickOnUnLikeIcon();
    ChatSonicPage.clickOnResetChat();
    I.see(expectedAssertionsPage.ChatSonic.gettextchatsonic);
    BaseAutomationPage.clickOnShareYourDocument();
    I.see(expectedAssertionsPage.sharethisarticle);
});