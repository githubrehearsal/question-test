$(document).ready(function () {
    //作答效果
    $('.test-answers a').click(function (e) {
        //啟動答案狀態
        $('.test-answers a').removeClass('test-answers-active');
        $('.test-answers a').attr('data-status', 'off');
        $(this).addClass('test-answers-active');
        $(this).attr('data-status', 'on');
        //啟動下一題按鈕
        $('.test-submit').fadeIn(500);
        return false;
    });
    //第一次作答
    $('.test-submit a').click(function (e) {
        //撈取答案的狀態、內容
        var AnswersStatus1 = $('.test-answers a').eq(0).attr('data-status');
        var AnswersContents1 = $('.test-answers a').eq(0).html();
        var AnswersStatus2 = $('.test-answers a').eq(1).attr('data-status');
        var AnswersContents2 = $('.test-answers a').eq(1).html();
        var AnswersStatus3 = $('.test-answers a').eq(2).attr('data-status');
        var AnswersContents3 = $('.test-answers a').eq(2).html();
        var AnswersStatus4 = $('.test-answers a').eq(3).attr('data-status');
        var AnswersContents4 = $('.test-answers a').eq(3).html();
        //作答錯誤，進入第三題
        if (AnswersContents1 == 'A：のんせつ' || AnswersContents2 == 'B：めんせい' || AnswersContents3 == 'C：けんせつ') {
            //變更題目
            $('.test-question p').html('実は大和田さんは医学部出身ですよ。');
            $('.test-answers a').eq(0).html('A：いがく');
            $('.test-answers a').eq(1).html('B：いやく');
            $('.test-answers a').eq(2).html('C：いかく');
            $('.test-answers a').eq(3).html('D：いいがく');
            //重置答案狀態
            $('.test-answers a').removeClass('test-answers-active');
            //重置下一題按鈕
            $('.test-submit').fadeOut(500);
            //作答正確，進入第二題
        } else if (AnswersStatus4 == 'on' && AnswersContents4 == 'D：めんせつ') {
            //變更題目
            $('.test-question p').html('先日発表されたiPadは性能もデザインもすぐれているから好き。');
            $('.test-answers a').eq(0).html('A：秀れている');
            $('.test-answers a').eq(1).html('B：便利ている');
            $('.test-answers a').eq(2).html('C：勝れている');
            $('.test-answers a').eq(3).html('D：優れている');
            //重置答案狀態
            $('.test-answers a').removeClass('test-answers-active');
            //重置下一題按鈕
            $('.test-submit').fadeOut(500);
        }
        return false;
    });
});