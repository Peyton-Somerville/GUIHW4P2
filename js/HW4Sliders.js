/*
File: js/HW4Sliders.js
GUI Assignment 4: Using the jQuery Plugin/UI with Your Dynamic Table
Part 2: jQuery UI Slider and Tab Widgets

Peyton Somerville
11/6/2021
*/

$(function() {
    // slider rules
    $("#minColSlider").slider({
        min: -15,
        max: 15,
        value: 1,
        slide: function(event, ui) {
            $("#minColVal").val(ui.value);
        }
    });

    // two-way binding
    $("#minColVal").val($("#minColSlider").slider("value"));
    $("#minColVal").change(function() {
        var oldVal = $("#minColSlider").slider("value");
        var newVal = $(this).val();

        if (isNaN(newVal)) {
            $("#minColSlider").slider("value", oldVal); 
        }
        else {
            $("#minColSlider").slider("value", newVal);
        }
    });


    $("#maxColSlider").slider({
        min: -15,
        max: 15,
        value: 10,
        slide: function(event, ui) {
            $("#maxColVal").val(ui.value);
        }
    });

    $("#maxColVal").val($("#maxColSlider").slider("value"));
    $("#maxColVal").change(function() {
        var oldVal = $("#maxColSlider").slider("value");
        var newVal = $(this).val();

        if (isNaN(newVal)) {
            $("#maxColSlider").slider("value", oldVal); 
        }
        else {
            $("#maxColSlider").slider("value", newVal);
        }
    });


    $("#minRowSlider").slider({
        min: -15,
        max: 15,
        value: 1,
        slide: function(event, ui) {
            $("#minRowVal").val(ui.value);
        }
    });

    $("#minRowVal").val($("#minRowSlider").slider("value"));
    $("#minRowVal").change(function() {
        var oldVal = $("#minRowSlider").slider("value");
        var newVal = $(this).val();

        if (isNaN(newVal)) {
            $("#minRowSlider").slider("value", oldVal); 
        }
        else {
            $("#minRowSlider").slider("value", newVal);
        }
    });


    $("#maxRowSlider").slider({
        min: -15,
        max: 15,
        value: 10,
        slide: function(event, ui) {
            $("#maxRowVal").val(ui.value);
        }
    });

    $("#maxRowVal").val($("#maxRowSlider").slider("value"));
    $("#maxRowVal").change(function() {
        var oldVal = $("#maxRowSlider").slider("value");
        var newVal = $(this).val();

        if (isNaN(newVal)) {
            $("#maxRowSlider").slider("value", oldVal); 
        }
        else {
            $("#maxRowSlider").slider("value", newVal);
        }
    });
});