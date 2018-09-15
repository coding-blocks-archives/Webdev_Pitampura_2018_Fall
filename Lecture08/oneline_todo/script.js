$(() => 
    $('body')
    .append(
      $('<button>')
        .text('ADD')
        .click(() => 
          $('#tasklist').append(
            $('<li>')
            .append(
                $('<button>')
                    .text('X')
                    .click((e) => $(e.target).parent().remove())
            )
            .append(
              $('<button>')
                .attr('class', 'down-btn')
                .text('⬇️')
                .click((e) => 
                  $(e.target).parent()
                    .insertAfter($(e.target).parent().next())
                )
            )
            .append(
              $('<button>')
                .attr('class', 'up-btn')
                .text('⬆️')
                .click((e) => 
                  $(e.target).parent()
                    .insertBefore($(e.target).parent().prev())
                )
            )
            .append($('<span>').text($('#newtask').val()))
          )
        )
        .click(() => $('input').val(''))
    )
    .append($('<input>').attr('id', 'newtask'))
    .append(
      $('<ul>')
        .attr('id', 'tasklist')
    )
)
                