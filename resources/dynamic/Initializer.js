(function () {
    var headedScale = new HeadedScale({
        instanceId: {%= CurrentADC.InstanceId %},
        headerFixed: {%= CurrentADC.PropValue("headerFixed") %},
        currentQuestion: '{%:= CurrentQuestion.Shortcut %}',
        responsiveWidth : '{%= CurrentADC.PropValue("responsiveWidth") %}',
        type: '{%:= CurrentQuestion.Type %}'
    });
} ());
