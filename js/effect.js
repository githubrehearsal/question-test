$(document).ready(function () {
    //作答效果
    $('.test-answer a').click(function (e) {
        //啟動答案狀態
        $('.test-answer a').removeClass('test-answers-active');
        $('.test-answer a').attr('data-status', 'off');
        $('.test-answer a span').removeClass('img-active');
        $(this).addClass('test-answers-active');
        $(this).attr('data-status', 'on');
        $(this).children('span').addClass('img-active');
        //啟動下一題按鈕
        $('.test-submit').fadeIn(250);
        return false;
    });
    $('body').on('click', '.test-answer a', function () {
        //啟動答案狀態
        $('.test-answer a').removeClass('test-answers-active');
        $('.test-answer a').attr('data-status', 'off');
        $('.test-answer a span').removeClass('img-active');
        $(this).addClass('test-answers-active');
        $(this).attr('data-status', 'on');
        $(this).children('span').addClass('img-active');
        //啟動下一題按鈕
        $('.test-submit').fadeIn(250);
        return false;
    });
    //作答函式
    function Test(Question, Answer1, Answer2, Answer3, Answer4, BtnNum) {
        $('.test-question').children('p').remove();
        $('.test-answer').children('a').remove();
        $('.test-submit').children('a').remove();
        //新增下一題
        $('.test-question').append('<p>' + Question + '</p>');
        $('.test-answer').append('<a href="" data-status="off">' + Answer1 + '<span></span></a>');
        $('.test-answer').append('<a href="" data-status="off">' + Answer2 + '<span></span></a>');
        $('.test-answer').append('<a href="" data-status="off">' + Answer3 + '<span></span></a>');
        $('.test-answer').append('<a href="" data-status="off">' + Answer4 + '<span></span></a>');
        //新增下一題按鈕
        $('.test-submit').append('<a href="" class="' + BtnNum + '">下一題</a>').fadeOut(250);;
    };
    //題庫
    //第一題
    var Question1 = 'いよいよ今日は入社<span class="question-bold">面接</span>だ、緊張するわ。';
    var Answer1A = 'A：のんせつ';
    var Answer1B = 'B：めんせい';
    var Answer1C = 'C：けんせつ';
    var Answer1D = 'D：めんせつ';
    //第二題
    var Question2 = '先日発表されたiPadは性能もデザインも<span class="question-bold">すぐれている</span>から好き。';
    var Answer2A = 'A：秀れている';
    var Answer2B = 'B：便利ている';
    var Answer2C = 'C：勝れている';
    var Answer2D = 'D：優れている';
    //第三題
    var Question3 = '実は大和田さんは<span class="question-bold">医学</span>部出身ですよ。';
    var Answer3A = 'A：いがく';
    var Answer3B = 'B：いやく';
    var Answer3C = 'C：いかく';
    var Answer3D = 'D：いいがく';
    //第四題
    var Question4 = 'まさか銀行が政府相手に<span class="question-bold">訴訟</span>を起こしたとは予想外でしたね。';
    var Answer4A = 'A：そしょう';
    var Answer4B = 'B：せしょう';
    var Answer4C = 'C：しゅうしょう';
    var Answer4D = 'D：そんしょう';
    //第五題
    var Question5 = '半沢くん、これを<span class="question-bold">簡潔</span>に説明して貰おうかな。';
    var Answer5A = 'A：かんせつ';
    var Answer5B = 'B：かんたん';
    var Answer5C = 'C：かんけつ';
    var Answer5D = 'D：けんけつ';
    //第六題
    var Question6 = 'はい、私が伊勢島<span class="question-bold">ほてる</span>の社長です。';
    var Answer6A = 'A：ハテル';
    var Answer6B = 'B：ホテロ';
    var Answer6C = 'C：ホテル';
    var Answer6D = 'D：モテル';
    //第七題
    var Question7 = '勘違いするな、渡真利君は<span class="question-bold">単なる</span>友人です。。';
    var Answer7A = 'A：唯一の';
    var Answer7B = 'B：大切な';
    var Answer7C = 'C：ただの';
    var Answer7D = 'D：数少ない';
    //第八題
    var Question8 = '<span class="question-bold">（　　）</span>寝てたので、何も聞こえませんでした。';
    var Answer8A = 'A：ぐっすり';
    var Answer8B = 'B：はっきり';
    var Answer8C = 'C：ゆっくり';
    var Answer8D = 'D：すみやかに';
    //第九題
    var Question9 = '木本常務はいつも電車で会社に<span class="question-bold">通っている</span>そうだ。';
    var Answer9A = 'A：いっている';
    var Answer9B = 'B：かよっている';
    var Answer9C = 'C：むかっている';
    var Answer9D = 'D：とおっている';
    //第十題
    var Question10 = '今回もハナちゃんに<span class="question-bold">たすけて</span>もらったよ。';
    var Answer10A = 'A：援て';
    var Answer10B = 'B：救けて';
    var Answer10C = 'C：守けて';
    var Answer10D = 'D：助けて';
    //測驗結果
    function Final(grade) {
        $('.test-question').children('p').remove();
        $('.test-answer').children('a').remove();
        $('.test-submit').children('a').remove();
        //顯示結果
        alert(grade);
    };
    //N1等級
    var FinalN1 = '評測為N1';
    var FinalN2 = '評測為N2';
    var FinalN3 = '評測為N3';
    var FinalN4 = '評測為N4';
    var FinalN5 = '評測為N5';
    //Q1
    $('.test-submit a').on('click', function () {
        var AnswersStatus1 = $('.test-answer a').eq(0).attr('data-status');
        var AnswersStatus2 = $('.test-answer a').eq(1).attr('data-status');
        var AnswersStatus3 = $('.test-answer a').eq(2).attr('data-status');
        var AnswersStatus4 = $('.test-answer a').eq(3).attr('data-status');
        if (AnswersStatus4 == 'on') {
            //正確
            Test(Question2, Answer2A, Answer2B, Answer2C, Answer2D, 'Q2');
        } else if (AnswersStatus1 == 'on' || AnswersStatus2 == 'on' || AnswersStatus3 == 'on') {
            //錯誤
            Test(Question3, Answer3A, Answer3B, Answer3C, Answer3D, 'Q3');
        }
        return false;
    });
    //Q2
    $('body').on('click', '.Q2', function () {
        var AnswersStatus1 = $('.test-answer a').eq(0).attr('data-status');
        var AnswersStatus2 = $('.test-answer a').eq(1).attr('data-status');
        var AnswersStatus3 = $('.test-answer a').eq(2).attr('data-status');
        var AnswersStatus4 = $('.test-answer a').eq(3).attr('data-status');
        if (AnswersStatus4 == 'on') {
            //正確
            Test(Question4, Answer4A, Answer4B, Answer4C, Answer4D, 'Q4');
        } else if (AnswersStatus1 == 'on' || AnswersStatus2 == 'on' || AnswersStatus3 == 'on') {
            //錯誤
            Test(Question8, Answer8A, Answer8B, Answer8C, Answer8D, 'Q8');
        }
        return false;
    });
    //Q3
    $('body').on('click', '.Q3', function () {
        var AnswersStatus1 = $('.test-answer a').eq(0).attr('data-status');
        var AnswersStatus2 = $('.test-answer a').eq(1).attr('data-status');
        var AnswersStatus3 = $('.test-answer a').eq(2).attr('data-status');
        var AnswersStatus4 = $('.test-answer a').eq(3).attr('data-status');
        if (AnswersStatus1 == 'on') {
            //正確
            Test(Question10, Answer10A, Answer10B, Answer10C, Answer10D, 'Q10');
        } else if (AnswersStatus2 == 'on' || AnswersStatus3 == 'on' || AnswersStatus4 == 'on') {
            //錯誤
            Test(Question6, Answer6A, Answer6B, Answer6C, Answer6D, 'Q6');
        }
        return false;
    });
    //Q4
    $('body').on('click', '.Q4', function () {
        var AnswersStatus1 = $('.test-answer a').eq(0).attr('data-status');
        var AnswersStatus2 = $('.test-answer a').eq(1).attr('data-status');
        var AnswersStatus3 = $('.test-answer a').eq(2).attr('data-status');
        var AnswersStatus4 = $('.test-answer a').eq(3).attr('data-status');
        if (AnswersStatus1 == 'on') {
            //正確
            Test(Question5, Answer5A, Answer5B, Answer5C, Answer5D, 'Q5');
        } else if (AnswersStatus2 == 'on' || AnswersStatus3 == 'on' || AnswersStatus4 == 'on') {
            //錯誤
            Test(Question7, Answer7A, Answer7B, Answer7C, Answer7D, 'Q7');
        }
        return false;
    });
    //Q5
    $('body').on('click', '.Q5', function () {
        var AnswersStatus1 = $('.test-answer a').eq(0).attr('data-status');
        var AnswersStatus2 = $('.test-answer a').eq(1).attr('data-status');
        var AnswersStatus3 = $('.test-answer a').eq(2).attr('data-status');
        var AnswersStatus4 = $('.test-answer a').eq(3).attr('data-status');
        if (AnswersStatus3 == 'on') {
            //正確
            Final(FinalN1);
        } else if (AnswersStatus1 == 'on' || AnswersStatus2 == 'on' || AnswersStatus4 == 'on') {
            //錯誤
            Final(FinalN2);
        }
        return false;
    });
    //Q6
    $('body').on('click', '.Q6', function () {
        var AnswersStatus1 = $('.test-answer a').eq(0).attr('data-status');
        var AnswersStatus2 = $('.test-answer a').eq(1).attr('data-status');
        var AnswersStatus3 = $('.test-answer a').eq(2).attr('data-status');
        var AnswersStatus4 = $('.test-answer a').eq(3).attr('data-status');
        if (AnswersStatus3 == 'on') {
            //正確
            Test(Question9, Answer9A, Answer9B, Answer9C, Answer9D, 'Q9');
        } else if (AnswersStatus1 == 'on' || AnswersStatus2 == 'on' || AnswersStatus4 == 'on') {
            //錯誤
            Final(FinalN5);
        }
        return false;
    });
    //Q7
    $('body').on('click', '.Q7', function () {
        var AnswersStatus1 = $('.test-answer a').eq(0).attr('data-status');
        var AnswersStatus2 = $('.test-answer a').eq(1).attr('data-status');
        var AnswersStatus3 = $('.test-answer a').eq(2).attr('data-status');
        var AnswersStatus4 = $('.test-answer a').eq(3).attr('data-status');
        if (AnswersStatus3 == 'on') {
            //正確
            Test(Question5, Answer5A, Answer5B, Answer5C, Answer5D, 'Q5');
        } else if (AnswersStatus1 == 'on' || AnswersStatus2 == 'on' || AnswersStatus4 == 'on') {
            //錯誤
            Final(FinalN2);
        }
        return false;
    });
    //Q8
    $('body').on('click', '.Q8', function () {
        var AnswersStatus1 = $('.test-answer a').eq(0).attr('data-status');
        var AnswersStatus2 = $('.test-answer a').eq(1).attr('data-status');
        var AnswersStatus3 = $('.test-answer a').eq(2).attr('data-status');
        var AnswersStatus4 = $('.test-answer a').eq(3).attr('data-status');
        if (AnswersStatus1 == 'on') {
            //正確
            Final(FinalN3);
        } else if (AnswersStatus2 == 'on' || AnswersStatus3 == 'on' || AnswersStatus4 == 'on') {
            //錯誤
            Test(Question3, Answer3A, Answer3B, Answer3C, Answer3D, 'Q3');
        }
        return false;
    });
    //Q9
    $('body').on('click', '.Q9', function () {
        var AnswersStatus1 = $('.test-answer a').eq(0).attr('data-status');
        var AnswersStatus2 = $('.test-answer a').eq(1).attr('data-status');
        var AnswersStatus3 = $('.test-answer a').eq(2).attr('data-status');
        var AnswersStatus4 = $('.test-answer a').eq(3).attr('data-status');
        if (AnswersStatus2 == 'on') {
            //正確
            Final(FinalN4);
        } else if (AnswersStatus1 == 'on' || AnswersStatus3 == 'on' || AnswersStatus4 == 'on') {
            //錯誤
            Final(FinalN5);
        }
        return false;
    });
    //Q10
    $('body').on('click', '.Q10', function () {
        var AnswersStatus1 = $('.test-answer a').eq(0).attr('data-status');
        var AnswersStatus2 = $('.test-answer a').eq(1).attr('data-status');
        var AnswersStatus3 = $('.test-answer a').eq(2).attr('data-status');
        var AnswersStatus4 = $('.test-answer a').eq(3).attr('data-status');
        if (AnswersStatus4 == 'on') {
            //正確
            Final(FinalN3);
        } else if (AnswersStatus1 == 'on' || AnswersStatus2 == 'on' || AnswersStatus3 == 'on') {
            //錯誤
            Test(Question9, Answer9A, Answer9B, Answer9C, Answer9D, 'Q9');
        }
        return false;
    });
});
