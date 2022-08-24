(function () {
    var headedScale = new HeadedScale({
        instanceId: {%= CurrentADC.InstanceId %},
        isInLoop: {%= (CurrentADC.PropValue("isInLoop") = "1") %},
        headerFixed: {%= CurrentADC.PropValue("headerFixed") %},
        currentQuestion: '{%:= CurrentQuestion.Shortcut %}',
        responsiveWidth : '{%= CurrentADC.PropValue("responsiveWidth") %}',
        type: '{%:= CurrentQuestion.Type %}'
    });
} ());
