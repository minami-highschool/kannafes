//メニューリスト
$(function(){
    $('.menu-btn').on("click",function(){
        $(this).toggleClass("open");
        $('.menu-list').toggleClass('show')
    });
});



$(function(){
    $('.moddal').modaal({
        type:'image',
        width:'1000',
        height:'700'
    });
});


//絞り込み
$(document).ready(function(){
    $('.filter button').on('click',function(){
        let filter = $(this).attr("data-filter");

        if(filter === 'all'){
            $(".item").removeClass('close');
        }
        else{
            $(".item").each(function(){
                if($(this).attr("data-category") === filter){
                    $(this).removeClass('close');
                }
                else{
                    $(this).addClass('close');
                }
            })
        }
    })
});

//スライダー

$(function () {
    $('#js-slider-2').slick({
      arrows: true, // 前・次のボタンを表示する
      dots: true, // ドットナビゲーションを表示する
      appendDots: $('.dots-2'), // ドットナビゲーションの生成位置を変更
      speed: 1000, // スライドさせるスピード（ミリ秒）
      slidesToShow: 1, // 表示させるスライド数
      centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
      variableWidth: true, // スライド幅の自動計算を無効化
    });
  });