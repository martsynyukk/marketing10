$(function(){
  var mixer = mixitup('.portfolio__content');

  $('.slider-blog__inner').slick(
    {
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="arrow-left"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="arrow-right"></button>'
    }
  );
    
});

Fancybox.bind('[data-fancybox="video"]', {
});  

console.log(jQuery().jquery);


$('#subscription_form').on('submit', function (e) {
    e.preventDefault();
    var $form = $(this);
    $.ajax({
        type: 'POST',
        url: './subscription_ajax.php',
        data: $form.serialize()
    }).done(function () {
        $form[0].reset()
        console.log($form);
        alert('Повідомлення було успішно відправлено!')
    }).fail(function () {
        console.log($form);
        alert('Упс... Повідомлення НЕ БУЛО відправлено!')

    });
});