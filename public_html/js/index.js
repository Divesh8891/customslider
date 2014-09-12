/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    var count = $('.container').children().length - 1;
    $('.next').click(function() {

        $('.container').stop().animate({marginLeft: -$('.container').children('div').eq(0).width()}, 300, function() {
            var a = $('.container').children('div').eq(0).remove();
            $('.container').append(a);
            $('.container').removeAttr('style');
        });
    });
    $('.prev').click(function() {
        //$('.container').children('div').removeAttr('style');
        $('.container').children('div').eq(0).before($('.container').children('div').eq(count).clone());
        $('.container').children('div').eq(0).css('marginLeft', -$('.container').children('div').eq(0).width()).stop().animate({marginLeft: 0}, 300, function() {
            $('.container').children('div').eq(count + 1).remove();
            $('.container').children('div').removeAttr('style');
        });

    });
});
