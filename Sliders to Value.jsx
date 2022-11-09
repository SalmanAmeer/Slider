var win = new Window ('palette',"AE Sliders",undefined);

var slidgrp = win.add('group',undefined);
slidgrp.orientation = "row";

var slider1 = slidgrp.add('slider',undefined);
slider1.value = 50;
slider1.minvalue = 1;
slider1.maxvalue = 150;

var slidertext = slidgrp.add('edittext',undefined);
slidertext.text = "50";
slidertext.size = [35,25];

win.show();
win.center();

//Functions
slider1.onChange = slider1.onChanging = function(){
        slidertext.text = Math.floor(slider1.value);
    };

slidertext.onChange = slidertext.onChanging = function(){
        slider1.value = Math.floor(slidertext.text);
    };




