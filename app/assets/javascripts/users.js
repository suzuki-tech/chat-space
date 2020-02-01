$(function(){
  function addUser(user){
    let html = `
    <div class="chat-group-user clearfix">
      <p class="chat-group-user__name">${user.name}</p>
      <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
    </div>`;
    $('#user-search-result').append(html);
  }

  function addNoUser(){
    let html = `
      <div class="chat-group-user clearfix">
        <p class="chat-group-user__name">ユーザーが見つかりません</p>
      </div>`;
    $('#user-search-result').append(html);
  }

  $('#user-search-field').on( 'keyup',function(){
    let input = $("#user-search-field").val();
    console.log(input);
    $.ajax({
      type: "GET",
      url: "/users",
      dataType: 'json',
      data: { keyword: input },
    })
    .done(function(users){
      console.log(users);
      // emptyメソッドで一度検索結果を空にする
      $('#user-search-result').empty();
      // usersが空かどうかで条件分岐
      if (users.length !== 0) {
        users.forEach(function(user){
          addUser(user);
        });
      } else if (input.length == 0) {
        return false;
      } else {
        addNoUser();
      }
      // 配列オブジェクト一つ一つに対する処理
      // console.log("成功です");
    })
    .fail(function(){
      alert("通信エラーです。ユーザーが表示できません。");
    });
  });
});