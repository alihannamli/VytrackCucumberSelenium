package com.vytrack.pages;

import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.WebElement;

public class CreateCarPage {

    @FindBy(css = "[id^='custom_entity_type_LicensePlate']")
    public WebElement licensePlateElement;

    @FindBy(name = "custom_entity_type[Driver]")
    public WebElement driverElement;

    @FindBy(name = "custom_entity_type[Location]")
    public WebElement locationElement;

    @FindBy(css = "[class='btn btn-success action-button']")
    public WebElement saveAndCloseButtonElement;

    @FindBy(xpath = "//li//button[contains(text(),'Save and New')]")
    public WebElement saveAndNew;

    @FindBy(xpath = "//li//button[contains(text(),'Save and Close')]")
    public WebElement saveAndCloseButtonFromMenuElement;

    @FindBy(css = "div[class='btn-group pull-right'] > a[data-toggle='dropdown']")
    public WebElement saveAndCloseToggle;

    @FindBy(css = "div[id*='FuelType']")
    public WebElement fuelTypeElement;

    //if this locator doesn't work, use [id^='uniform-custom_entity_type_Logo_file'] > span[class='action']
    @FindBy(name = "custom_entity_type[Logo][file]")
    public WebElement logoElement;

    @FindBy(name = "custom_entity_type[ModelYear]")
    public WebElement modelYearElement;

    @FindBy(name = "custom_entity_type[Color]")
    public WebElement colorElement;
}
