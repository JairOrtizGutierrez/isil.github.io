$(function() {
    
    $('#menu').click(function() {
        
        var status = $('#menu').attr('data');
        
        if(status == 'active') {
            $('#menu').attr('data', 'inactive');
            $('#menu + ul').css('height', '0');
        } else {
            $('#menu').attr('data', 'active');
            $('#menu + ul').css('height', '100vh');
        }
        
    });
    
});