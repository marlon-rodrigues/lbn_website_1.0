$(document).ready(function(){
   //initialize the dialog object
   $( "#white_paper_dialog" ).dialog({
        autoOpen: false,
        title: 'OcularIP Whitepaper Request Form',
        resizable: false,
        width: 500,
        buttons: [
                {
                    text: "Cancel",
                    click: function() {
                      $( this ).dialog( "close" );
                    }
                },
                {
                    text: "Submit",
                    click: function() {
                      $( this ).dialog( "close" );
                    }
                }
            ]
    });
    
   $('#about_sub_section_51').click(function() {
       $( "#white_paper_dialog" ).dialog("open");
   });
});

