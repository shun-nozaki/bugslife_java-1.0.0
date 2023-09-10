$(document).ready(function () {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl, {
      trigger: "click",
    });
  });

  $('svg[data-bs-toggle="tooltip"]').click(function () {
    // リンクのhref属性を取得
    var href = $(this).closest('.btn').find('a').attr('href');
    // ページを指定のリンクに移動
    window.location.href = href;
  });
});
