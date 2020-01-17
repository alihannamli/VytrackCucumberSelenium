package com.vytrack.step_definitions;

import io.cucumber.java.en.Then;

public class CreateCarStepDefinitions {



    @Then("user click on {string} button")
    public void user_click_on_button(String string) {

    }

//           | License Plate | Driver      | Location        | Model Year | Color |
//            | TestPlates    | Test Driver | Washington D.C. | 2020       | Black |

    @Then("user adds new car information:")
    public void user_adds_new_car_information(io.cucumber.datatable.DataTable dataTable) {

    }

}
