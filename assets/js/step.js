(function($){
    "use strict";
// RIGHT SIDE PROGRESS BAR JS START
    $('.btn-next').on('click', function() {

        var currentStepNum = $('#checkout-progress').data('current-step');
        var nextStepNum = (currentStepNum + 1);
        var currentStep = $('.step.step-' + currentStepNum);
        var nextStep = $('.step.step-' + nextStepNum);
        var progressBar = $('#checkout-progress');
        $('.btn-prev').removeClass('disabled');
        if(currentStepNum == 4) {
            return false;
        }
        if(nextStepNum == 4){
            $(this).addClass('disabled');
        }
        $('.checkout-progress').removeClass('.step-' + currentStepNum).addClass('.step-' + (currentStepNum + 1));
        
        currentStep.removeClass('active').addClass('valid');
        
        nextStep.addClass('active');
        progressBar.removeAttr('class').addClass('step-' + nextStepNum).data('current-step', nextStepNum);
    });
    
    
    $('.btn-prev').on('click', function() {
        
        var currentStepNum = $('#checkout-progress').data('current-step');
        var prevStepNum = (currentStepNum - 1);
        var currentStep = $('.step.step-' + currentStepNum);
        var prevStep = $('.step.step-' + prevStepNum);
        var progressBar = $('#checkout-progress');
        $('.btn-next').removeClass('disabled');
        if(currentStepNum == 1) {
            return false;
        }
        if(prevStepNum == 1){
            $(this).addClass('disabled');
        }
        $('.checkout-progress').removeClass('.step-' + currentStepNum).addClass('.step-' + (prevStepNum));
        
        currentStep.removeClass('active');
        
        prevStep.addClass('active').removeClass('valid');
        progressBar.removeAttr('class').addClass('step-' + prevStepNum).data('current-step', prevStepNum);
    });
    // RIGHT SIDE PROGRESS BAR JS END
    // STEP CONTROLL JS START
    $(".go_next_1").click(function () {
        $("#boking_step_1, #boking_step_3, #boking_step_4").hide(),
         $("#boking_step_2").show()
    });
    $(".go_next_2").click(function () {
        $("#boking_step_1, #boking_step_2, #boking_step_4").hide(),
         $("#boking_step_3").show()
    });
     $(".go_next_3").click(function () {
        $("#boking_step_1,#boking_step_2, #boking_step_3").hide(),
         $("#boking_step_4").show()
    });
     $(".go_back_2").click(function () {
        $("#boking_step_2, #boking_step_3, #boking_step_4").hide(),
         $("#boking_step_1").show()
    });
    $(".go_back_3").click(function () {
        $("#boking_step_1, #boking_step_3, #boking_step_4").hide(),
         $("#boking_step_2").show()
    });
// STEP CONTROLL JS END

})(jQuery);