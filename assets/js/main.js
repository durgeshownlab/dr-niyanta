$(document).ready(function(){
    console.log('object')

    // code for toggling the menu bar in smart phone
    $(document).on('click', '.c-menu-toggle-btn', function(e){
        console.log('menu bar click ')
        $('.c-menu-bar-container').toggle();
    });

    // code for clising the menubar in smartphone   
    $(document).on('click', '.c-close-btn', function(e){
        console.log('menu bar click ')
        $('.c-menu-bar-container').toggle();
    });

    // code for navigating throw the info tab 
    $(document).on('click', '.info-tab-item', function(e){
        
        let target=$($(this).data('id'));
        
        console.log(target)
        // $(`${id}`).css('padding-top', '150px')
        
        $('.info-tab-item').removeClass('active');
        $(this).addClass('active')


        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top - 150
            }, 500);
        }

    });


    // code for form validation  
    $(document).on('change', '#video-check', function(){
        let videoCheckBox=$("#video-check");
        let videoCheckBoxValue= videoCheckBox.prop('checked')?'on':'off';
        console.log(videoCheckBoxValue)

        if(videoCheckBoxValue=='on')
        {
            $('#video-url-container').show();
        }
        else
        {
            $('#video-url-container').hide();
        }
    });

});