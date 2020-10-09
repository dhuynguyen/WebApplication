$(document).ready(function(){
    $('#btnAddBook').click(function(){
        $('.myModal').toggle("slow");
    })
    $('#col-left').height($('#col-right').height());
})