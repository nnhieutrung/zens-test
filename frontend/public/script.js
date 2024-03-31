var joke_id;

$(() => {
    LoadJokes();

    $(".btn").click((e) => {
        let accept = $(e.currentTarget).hasClass("accept")

        $.post(`api/joke/${joke_id}/vote`, {"vote" : accept} ,function( data ) {
            LoadJokes();
        });
    })
})

$.fn.multiline = function(text){
    this.text(text);
    this.html(this.html().replace(/\n/g,'<br/>'));
    return this;
}

function LoadJokes() {
    $.get( "api/joke/all", function( data ) {
        if (data.length > 0) {
            $(".joke-container .content").multiline(data[0].content);
            joke_id = data[0].joke_id;
        }
        else {
            $(".joke-container .content").text("That's all the jokes for today! Come back another day!");
            $(".joke-container .btn-container").hide();
            joke_id = null;
        }
    });
}