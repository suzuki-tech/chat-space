$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
      `<div class="chat-main__message" data-message-id=${message.id}>
        <div class="chat-main__message__upper-info">
          <div class="chat-main__message__list__upper-info__talker">
            ${message.user_name}
          </div>
          <div class="chat-main__message__list__upper-info__date">
          ${message.created_at}
          </div>
        </div>
        <div class="chat-main__message__lower">
          <p class="chat-main__message__lower__content">
            ${message.content}
          </p>
        </div>
        <img src=${message.image} >
      </div>`
      return html;
    } else {
      var html =
      `<div class="chat-main__message" data-message-id=${message.id}>
        <div class="chat-main__message__upper-info">
          <div class="chat-main__message__list__upper-info__talker">
            ${message.user_name}
          </div>
          <div class="chat-main__message__list__upper-info__date">
            ${message.created_at}
          </div>
        </div>
        <div class="chat-main__message__lower">
          <p class="chat-main__message__lower__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }


  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
      .done(function(data){
        var html = buildHTML(data);
        $('.chat-main__messages').append(html);
        $('.chat-main__messages').animate({ scrollTop: $('.chat-main__messages')[0].scrollHeight});
        $('form')[0].reset();
        $('.form__submit').prop('disabled', false )
      })
  });
});