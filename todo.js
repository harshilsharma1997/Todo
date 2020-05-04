// Check or uncheck the list items with line-through effect
$("ul").on("click","li",function()
{
    $(this).toggleClass("completed");
});

// Removing an item from list with fading effect
$("ul").on("click","span",function(event)
{
    $(this).parent().fadeOut(500,function(){
        $(this).remove()
    });
    event.stopPropagation();
});

// Adding new items with already present functionality
$("input[type='text']").keypress(function(event)
{
    if(event.which===13)
    {
        var usertext=$(this).val();
        $(this).val("");
        if(usertext!=="")
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+ usertext +"</li>");
    }
})

// Adding and removing input space by clicking plus icon
$(".fa-plus-square").on("click",function()
{
    $("input[type='text']").fadeToggle();
});