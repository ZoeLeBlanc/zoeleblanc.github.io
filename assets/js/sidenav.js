$(document).ready(function() {
    $(document).on('click',function(event) {
        if (event.activeElement === 'button.sidenav'){
            console.log("is this working?", event.activeElement);
        }
        
        // $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    // $('a.bibtex').click(function() {
    //     $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    // });
});
