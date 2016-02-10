/**
 * Created by Administrator on 2016/2/5.
 */
<!--一个li是一竖条 每个竖条有四个面-->
<!--tips 每一个li绝对定位 每一个li里的div绝对定位 -->

<!--每次点击转动section  section需要一个delay 是C3的delay-->
<!--每个小竖条stage 一个景深-->
<!--.stage里面还有section的原因是有景深的舞台绝对不要自己动 动的是section-->
<!--section还要加宽高-->
<!--景深要特大-->
(function (w, d, undefined) {

    var Carrousel_3d = function (container, data) {
        this.container = container;
        this.data = data;
        this.sliceNum = data.sliceNum || 5;
        this.height = parseInt(data.height) || 560;
        this.width = parseInt(data.width) || 300;
        this.pics = data.pics;
        this.ifTurnDown = data.ifTurnDown;
        this.init();
    }

    Carrousel_3d.prototype = {
        init: function () {
            this.createDom();
            this.bindEvent();
        },
        createDom: function () {
            this.container.html(
                "<ul class='carrousel-3d-ul'><ul>" //ul容器
            )
            var str = ''
            for (i = 1; i <= this.sliceNum; i++) {
                str += '<li class="carrousel-stage">' +//上下前后四片的舞台 是舞台在转
                    '<section>' +
                    '<div></div>' +
                    '<div></div>' +
                    '<div></div>' +
                    '<div></div>' +
                    '</section>' +
                    '</li>'
            }

            str += '<button class="carrousel-btn">CLICK</button>';
            $('.carrousel-3d-ul').html(str);
        },
        bindEvent: function () {
            var that = this;
            //设置舞台宽高
            $('.carrousel-3d-ul').css({width: this.width, height: this.height})


            //设置图片
            $('.carrousel-stage section div').each(function (i, e) {
                //会有sliceNum*4的数量
                if (i % 4 == 0) {
                    $(this).css({
                        'background-image': 'url(' + that.pics[0] + ')',
                        'transform': 'translateZ(' + that.height / 2 + 'px)',
                        'z-index': 999
                    })
                }
                else if (i % 4 == 1) {
                    $(this).css({
                        'background-image': 'url(' + that.pics[1] + ')',
                        'transform': 'rotateX(90deg) translateZ(' + that.height / 2 + 'px)',
                    })
                }
                else if (i % 4 == 2) {
                    $(this).css({
                        'background-image': 'url(' + that.pics[2] + ')',
                        'transform': 'rotateX(180deg) translateZ(' + that.height / 2 + 'px)',
                    })
                }
                else {
                    $(this).css({
                        'background-image': 'url(' + that.pics[3] + ')',
                        'transform': 'rotateX(-90deg) translateZ(' + that.height / 2 + 'px)',
                    })
                }
            })

            $('.carrousel-stage').each(function (i, e) {
                //这时候i从0-3
                $(this).css({//设置每一竖条的宽高 并右移到对应位置
                    top: 0,
                    height: that.height,
                    width: that.width / that.sliceNum,
                    'left': i * (that.width / that.sliceNum)
                }).find('div').css({//设置每一竖条的前后上下四片的大小
                    height: that.height,
                    width: that.width / that.sliceNum
                }).css('background-position', -i * (that.width / that.sliceNum) + 'px ' + '0px');//让里面的每一张小图显示正确的切片位置
            })

            $('.carrousel-stage section').each(function (i, e) {//设置每一个section的宽高和旋转延迟
                $(this).css({
                    height: that.height,
                    width: that.width / that.sliceNum,
                    'transition-delay': i * 0.1 + 's'
                });
            })


            var deg = 0;
            var dDeg = 90;
            $('.carrousel-btn').click(function () {
                if (that.ifTurnDown) {
                    deg -= dDeg;
                }
                else {
                    deg += dDeg;
                }

                $('.carrousel-stage section').css('transform', 'rotateX(' + deg + 'deg');
            })
        }

    }

    w.Carrousel_3d=Carrousel_3d;

})
(window, document)