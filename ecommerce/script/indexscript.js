$(document).ready(function(){
    var MenuItems = document.getElementById("MenuItems");
    MenuItems.style.maxHeight = "0px";
    var colProductHeight = $('#colImageProduct').height();
    $('#colInforNewProduct').height(colProductHeight);
    $('#colInforNewProduct2').height(colProductHeight);
    $('#col-total').height($('#col-cart').height());
    $('#btnAddBook').click(function(){
        alert("haha");
    })
})
$( window ).resize(function() {
    var colProductHeight = $('#colImageProduct').height();
    $('#colInforNewProduct').height(colProductHeight);
    $('#colInforNewProduct2').height(colProductHeight);
    
    var widthWindown = $(window).width();
    if(widthWindown <= 665)
    {
        $('#colInforNewProduct2').before($('#colImageProduct2'));
       
    }
    else
    {
        $('#colImageProduct2').before($('#colInforNewProduct2'));
        
    }
    if(widthWindown <= 1000)
    {
        $('.divInfor').hide();
        $('#col-total').height(400);
    }
    else
    {
        $('#col-total').height($('#col-cart').height());
        $('.divInfor').show();
    }
  });
function menutoggle(){
    if(MenuItems.style.maxHeight == "0px")
    {
        MenuItems.style.maxHeight = "200px";
    }
    else{
        MenuItems.style.maxHeight = "0px";
    }
} ;

function toggleModal(){
    alert("haha");
    $('.myModal').toggle("slow");
}