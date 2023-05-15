$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computers.feature");
formatter.feature({
  "line": 1,
  "name": "Computers Test",
  "description": "As a user I want to add product in shopping cart successfully",
  "id": "computers-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9022048000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify User Should be able to add product successfully in shopping cart",
  "description": "",
  "id": "computers-test;verify-user-should-be-able-to-add-product-successfully-in-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on \"Computer\" menu on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on \"Desktop\" tab on computer page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select Sort By Position \"Name: A to Z\" ascending order",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should be able to verify the text \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter below details in build your computer page",
  "rows": [
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "8GB [+$60.00]"
      ],
      "line": 21
    }
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 22,
      "value": "#    And    I Select \"2.2 GHz Intel Pentium Dual-Core E2200\" processor"
    },
    {
      "line": 23,
      "value": "#    And    I Select \"8GB [+$60.00]\" RAM"
    },
    {
      "line": 24,
      "value": "#    And    I Select HDD radio \"400 GB [+$100.00]\" HDD"
    },
    {
      "line": 25,
      "value": "#    And   I select OS radio \"Vista Premium [+$60.00]\""
    },
    {
      "line": 26,
      "value": "#    And  I select two checkboxes \"Microsoft Office [+$50.00]\" and \"Total Commander [+$5.00]\""
    }
  ],
  "line": 27,
  "name": "I select various radio buttons options",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should be able to Verify Price",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Add TO Cart Button On Desktop Page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should be able to verify text \"The product has been added to your shopping cart on Top green Bar\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I close the bar clicking on the cross button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I MouseHover on \"Shopping cart\" and Click on \"GO TO CART\" button.",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should be able to verify Shopping Cart Text",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I change the Qty to \"2\" and Click on Update shopping Button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I verify the Total Price after clicking on Update Button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on checkbox “I agree with the terms of service” on page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on CheckOut button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should be Verify the text \"Welcome, Please Sign In!\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on Checkout As a Guest Tab",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I select \"country\" From Country DropDown",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter below details in check out page",
  "rows": [
    {
      "cells": [
        "John",
        "Smith",
        "xyz@gmail.com",
        "London",
        "random street",
        "WE0 00T",
        "9825655114"
      ],
      "line": 42
    }
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 44,
      "value": "#    And   I enter \"firstName\" in FirstName field"
    },
    {
      "line": 45,
      "value": "#    And   I enter \"lastName\" in LastName field"
    },
    {
      "line": 46,
      "value": "#    And   I enter \"email\" in email Field"
    },
    {
      "line": 47,
      "value": "#"
    },
    {
      "line": 48,
      "value": "#    And   I select \"city\" in City Field"
    },
    {
      "line": 49,
      "value": "#    And   I enter \"address\" in address field"
    },
    {
      "line": 50,
      "value": "#    And   I enter \"postCode\" in postcode field"
    },
    {
      "line": 51,
      "value": "#    And   I enter \"phoneNumber\" in phoneNumber field"
    }
  ],
  "line": 52,
  "name": "I click on the \"Continue\" Button",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I click On Radio Button \"Next Day Air($0.00)\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I click On the \"shippingMethodContinueButton\" Button Tab",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I click on the  \"selectCreditCardRadioButton\" tab button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I click on \"continuePaymentButton\" button",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I select \"Master Card\" from credit card dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I fill below details in credit card form in payment page",
  "rows": [
    {
      "cells": [
        "Mr Smith",
        "5105105105105100",
        "12",
        "2023",
        "203"
      ],
      "line": 59
    }
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 60,
      "value": "#    And   I enter \"CardHolderName\" from cardholder field"
    },
    {
      "line": 61,
      "value": "#    And   I enter \"Card Number\" in Card Number Field"
    },
    {
      "line": 62,
      "value": "#    And   I select \"Expiry Month\" from Expiration Date"
    },
    {
      "line": 63,
      "value": "#    And   I select \"Expiry Year\" from Field"
    },
    {
      "line": 64,
      "value": "#    And   I enter \"card code\" in card code field"
    }
  ],
  "line": 65,
  "name": "I click on payment continue button",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I should be able to verify \"payment method\" is Credit Card",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I should be able to verify \"shipping method\" is Next Day Air",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I should be able to verify  \"price\" on Page",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I click On \"Confirm\" button on checkOut Page",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I should be able to verify \"Thank You\" text on checkOut Page",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I should be able to  verify \"Your order has been successfully processed!\" on checkout nopcommerce page",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I click on \"continue\" in checkout page",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I should be able to verify text \"Welcome to our store\" on welcome checkout page",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputersSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 145137000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer",
      "offset": 12
    }
  ],
  "location": "ComputersSteps.iClickOnMenuOnHomepage(String)"
});
formatter.result({
  "duration": 1616793600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktop",
      "offset": 12
    }
  ],
  "location": "ComputersSteps.iClickOnTabOnComputerPage(String)"
});
formatter.result({
  "duration": 1538904200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name: A to Z",
      "offset": 27
    }
  ],
  "location": "ComputersSteps.iSelectSortByPositionAscendingOrder(String)"
});
formatter.result({
  "duration": 325770600,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 2072881000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 37
    }
  ],
  "location": "ComputersSteps.iShouldBeAbleToVerifyTheText(String)"
});
formatter.result({
  "duration": 3011913800,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iEnterBelowDetailsInBuildYourComputerPage(DataTable)"
});
formatter.result({
  "duration": 347482400,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iSelectVariousRadioButtonsOptions()"
});
formatter.result({
  "duration": 669059100,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iShouldBeAbleToVerifyPrice()"
});
formatter.result({
  "duration": 40400300,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iClickOnAddTOCartButtonOnDesktopPage()"
});
formatter.result({
  "duration": 90533800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart on Top green Bar",
      "offset": 33
    }
  ],
  "location": "ComputersSteps.iShouldBeAbleToVerifyText(String)"
});
formatter.result({
  "duration": 481501600,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iCloseTheBarClickingOnTheCrossButton()"
});
formatter.result({
  "duration": 534025500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 17
    },
    {
      "val": "GO TO CART",
      "offset": 46
    }
  ],
  "location": "ComputersSteps.iMouseHoverOnAndClickOnButton(String,String)"
});
formatter.result({
  "duration": 1230912000,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iShouldBeAbleToVerifyShoppingCartText()"
});
formatter.result({
  "duration": 68841300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "ComputersSteps.iChangeTheQtyToAndClickOnUpdateShoppingButton(String)"
});
formatter.result({
  "duration": 1601661600,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iVerifyTheTotalPriceAfterClickingOnUpdateButton()"
});
formatter.result({
  "duration": 234340600,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iClickOnCheckboxIAgreeWithTheTermsOfServiceOnPage()"
});
formatter.result({
  "duration": 480665200,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iClickOnCheckOutButton()"
});
formatter.result({
  "duration": 710902700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 29
    }
  ],
  "location": "ComputersSteps.iShouldBeVerifyTheText(String)"
});
formatter.result({
  "duration": 65552400,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iClickOnCheckoutAsAGuestTab()"
});
formatter.result({
  "duration": 924348000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "country",
      "offset": 10
    }
  ],
  "location": "ComputersSteps.iSelectFromCountryDropDown(String)"
});
formatter.result({
  "duration": 696871900,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iEnterBelowDetailsInCheckOutPage(DataTable)"
});
formatter.result({
  "duration": 930815100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Continue",
      "offset": 16
    }
  ],
  "location": "ComputersSteps.iClickOnTheButton(String)"
});
formatter.result({
  "duration": 84228000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Next Day Air($0.00)",
      "offset": 25
    }
  ],
  "location": "ComputersSteps.iClickOnRadioButton(String)"
});
formatter.result({
  "duration": 394603500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shippingMethodContinueButton",
      "offset": 16
    }
  ],
  "location": "ComputersSteps.iClickOnTheButtonTab(String)"
});
formatter.result({
  "duration": 159634700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selectCreditCardRadioButton",
      "offset": 17
    }
  ],
  "location": "ComputersSteps.iClickOnTheTabButton(String)"
});
formatter.result({
  "duration": 302384200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "continuePaymentButton",
      "offset": 12
    }
  ],
  "location": "ComputersSteps.iClickOnButton(String)"
});
formatter.result({
  "duration": 51440500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Master Card",
      "offset": 10
    }
  ],
  "location": "ComputersSteps.iSelectFromCreditCardDropdown(String)"
});
formatter.result({
  "duration": 403281300,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iFillBelowDetailsInCreditCardFormInPaymentPage(DataTable)"
});
formatter.result({
  "duration": 1318267600,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iClickOnPaymentContinueButton()"
});
formatter.result({
  "duration": 87599500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "payment method",
      "offset": 28
    }
  ],
  "location": "ComputersSteps.iShouldBeAbleToVerifyIsCreditCard(String)"
});
formatter.result({
  "duration": 344063100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shipping method",
      "offset": 28
    }
  ],
  "location": "ComputersSteps.iShouldBeAbleToVerifyIsNextDayAir(String)"
});
formatter.result({
  "duration": 55033700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "price",
      "offset": 29
    }
  ],
  "location": "ComputersSteps.iShouldBeAbleToVerifyOnPage(String)"
});
formatter.result({
  "duration": 90650700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Confirm",
      "offset": 12
    }
  ],
  "location": "ComputersSteps.iClickOnButtonOnCheckOutPage(String)"
});
formatter.result({
  "duration": 157050900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank You",
      "offset": 28
    }
  ],
  "location": "ComputersSteps.iShouldBeAbleToVerifyTextOnCheckOutPage(String)"
});
formatter.result({
  "duration": 834551100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your order has been successfully processed!",
      "offset": 29
    }
  ],
  "location": "ComputersSteps.iShouldBeAbleToVerifyOnCheckoutNopcommercePage(String)"
});
formatter.result({
  "duration": 160498300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "continue",
      "offset": 12
    }
  ],
  "location": "ComputersSteps.iClickOnInCheckoutPage(String)"
});
formatter.result({
  "duration": 1373236700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to our store",
      "offset": 33
    }
  ],
  "location": "ComputersSteps.iShouldBeAbleToVerifyTextOnWelcomeCheckoutPage(String)"
});
formatter.result({
  "duration": 102429500,
  "status": "passed"
});
formatter.after({
  "duration": 273200,
  "status": "passed"
});
});