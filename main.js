$(document).ready(function(){
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
   });

    $('#form').on('submit', function(e){
        e.preventDefault();
        
        const novaTarefa = $('#task-input').val();
        const novaLinha = $('<li></li>');
        $(`<a>${novaTarefa}</a>`).appendTo(novaLinha);
        
        $('#task-list').append(novaLinha); 
    });
});