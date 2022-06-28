$(function(){

    //Header
    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $('.header .contain').css({
                'position':'fixed',
                'background-color':'#fff',
                'border':'none',
                'box-shadow':'var(--box-shadow)'
            })
            $('.header .contain .tools .tool > a').css({
                'color':'#222'
            })
            $('.header .contain .tools .tool').each(function(){
                $(this).hover(function(e){
                    
                    if(e.type == "mouseenter") {
                        $(this).find('.link').css({
                            'color':'var(--logo-color)'
                        })
                    }
                    else if (e.type == "mouseleave") {
                        $(this).find('.link').css({
                            'color':'#222'
                        })
                    }
                })
            })
            $('.header .contain .menu i').css({
                'color':'#222'
            })
            $('.header .contain .menu i').hover(function(e){
                if(e.type == "mouseenter") {
                    $(this).css({
                        'color':'var(--logo-color)'
                    })
                }
                else if (e.type == "mouseleave") {
                    $(this).css({
                        'color':'#222'
                    })
                }
            })
            //Scroll Icon
            $('.scroll .icon').fadeIn()
        }
        else{
            $('.header .contain').css({
                'position':'absolute',
                'background-color':'transparent'
            })

            $('.header .contain .tools .tool > a').css({
                'color':'#fff'
            })
            $('.header .contain .tools .tool').each(function(){
                $(this).hover(function(e){
                    if(e.type == "mouseenter") {
                        $(this).find('.link').css({
                            'color':'var(--logo-color)'
                        })
                    }
                    else if (e.type == "mouseleave") {
                        $(this).find('.link').css({
                            'color':'#fff'
                        })
                    }
                })
            })
            $('.header .contain .menu i').css({
                'color':'#fff'
            })
            $('.header .contain .menu i').hover(function(e){
                if(e.type == "mouseenter") {
                    $(this).css({
                        'color':'var(--logo-color)'
                    })
                }
                else if (e.type == "mouseleave") {
                    $(this).css({
                        'color':'#fff'
                    })
                }
            })
            //Scroll Icon
            $('.scroll .icon').fadeOut()
        }
        //New
        if($(window).scrollTop() > $('.new .contain').offset().top){
            $('.new .contain .row .load .line span').each(function(){
                $(this).css({
                    'width':$(this).data('pre'),
                })
            
            })
        }
    })
    //Menu
    $('.header .contain .menu').click(function(){
        $('.header .contain .tools').fadeToggle()
    })
    //Tools
    if($('.header .contain .menu').css("display")=='flex'){
        $('.header .contain .tools .tool').each(function(){
            $(this).click(function(){
                $(this).find('ul').fadeToggle()
                console.log('3')
            })
        })
    }
    //Home Video
    $('.header .contain .tools .tool ul li').each(function(){
        $(this).click(function(){
            if($(this).text() == 'Video Home'){
                $('.title').css({
                    'background-image':'none'
                })
                $('.title .video-container').fadeIn()
            }
            else if($(this).text() == 'Classic Home'){
                $('.title').css({
                    'background-image':"url('../Images/teemu-paananen-bzdhc5b3Bxs-unsplash.jpg')"
                })
                $('.title .video-container').fadeOut()
            }
        })
    })
    //List
    $('.header .tools .tool ul li').each(function(){
        $(this).click(function(){
            if($(this).find('a').text() =='All Projects'){
                $('.work .option ul li').each(function(){
                    var x=$(this)
                    if(x.data('opt')=='all'){
                        console.log(1)
                        $('.work .option ul li').each(function(){
                            $(this).removeClass('active')
                        })
                        x.addClass("active")
                        
                        $('.work .bottom .part .box').each(function(){
                            if($(this).hasClass(x.data('opt'))){
                                $(this).fadeIn()
                            }
                            else{
                                $(this).fadeOut();
                            }
                        })
                        if($('.work .btn button').html() == 'View More'){
                            $('.work .bottom .part .box').each(function(){
                                if($(this).hasClass(x.data('opt'))){
                                    $(this).fadeIn()
                                }
                                else{
                                    $(this).fadeOut();
                                }
                            })
                        }
                        else{
                            $('.work .bottom .part .box.hide').each(function(){
                                if($(this).hasClass(x.data('opt'))){
                                    $(this).fadeIn()
                                }
                                else{
                                    $(this).fadeOut();
                                }
                            })
                        }
                            
                    
                    }
                })
            }
            else if($(this).find('a').text()=='Branding Projects'){
                $('.work .option ul li').each(function(){
                    var x=$(this)
                    if(x.data('opt')=='brand'){
                        $('.work .option ul li').each(function(){
                            $(this).removeClass('active')
                        })
                        x.addClass("active")
                        
                        $('.work .bottom .part .box').each(function(){
                            if($(this).hasClass(x.data('opt'))){
                                $(this).fadeIn()
                            }
                            else{
                                $(this).fadeOut();
                            }
                        })
                        if($('.work .btn button').html() == 'View More'){
                            $('.work .bottom .part .box').each(function(){
                                if($(this).hasClass(x.data('opt'))){
                                    $(this).fadeIn()
                                }
                                else{
                                    $(this).fadeOut();
                                }
                            })
                        }
                        else{
                            $('.work .bottom .part .box.hide').each(function(){
                                if($(this).hasClass(x.data('opt'))){
                                    $(this).fadeIn()
                                }
                                else{
                                    $(this).fadeOut();
                                }
                            })
                        }
                            
                    
                    }
                })
            }
            else if($(this).find('a').text()=='Web Template'){
                $('.work .option ul li').each(function(){
                    var x=$(this)
                    if(x.data('opt')=='web'){
                        $('.work .option ul li').each(function(){
                            $(this).removeClass('active')
                        })
                        x.addClass("active")
                        
                        $('.work .bottom .part .box').each(function(){
                            if($(this).hasClass(x.data('opt'))){
                                $(this).fadeIn()
                            }
                            else{
                                $(this).fadeOut();
                            }
                        })
                        if($('.work .btn button').html() == 'View More'){
                            $('.work .bottom .part .box').each(function(){
                                if($(this).hasClass(x.data('opt'))){
                                    $(this).fadeIn()
                                }
                                else{
                                    $(this).fadeOut();
                                }
                            })
                        }
                        else{
                            $('.work .bottom .part .box.hide').each(function(){
                                if($(this).hasClass(x.data('opt'))){
                                    $(this).fadeIn()
                                }
                                else{
                                    $(this).fadeOut();
                                }
                            })
                        }
                            
                    
                    }
                })
            }
            else if($(this).find('a').text()=='SEO Projects'){
                $('.work .option ul li').each(function(){
                    var x=$(this)
                    if(x.data('opt')=='seo'){
                        $('.work .option ul li').each(function(){
                            $(this).removeClass('active')
                        })
                        x.addClass("active")
                        
                        $('.work .bottom .part .box').each(function(){
                            if($(this).hasClass(x.data('opt'))){
                                $(this).fadeIn()
                            }
                            else{
                                $(this).fadeOut();
                            }
                        })
                        if($('.work .btn button').html() == 'View More'){
                            $('.work .bottom .part .box').each(function(){
                                if($(this).hasClass(x.data('opt'))){
                                    $(this).fadeIn()
                                }
                                else{
                                    $(this).fadeOut();
                                }
                            })
                        }
                        else{
                            $('.work .bottom .part .box.hide').each(function(){
                                if($(this).hasClass(x.data('opt'))){
                                    $(this).fadeIn()
                                }
                                else{
                                    $(this).fadeOut();
                                }
                            })
                        }
                            
                    
                    }
                })
            }
            else if($(this).find('a').text()=='Digital Marketing Projects'){
                $('.work .option ul li').each(function(){
                    var x=$(this)
                    if(x.data('opt')=='digital'){
                        $('.work .option ul li').each(function(){
                            $(this).removeClass('active')
                        })
                        x.addClass("active")
                        
                        $('.work .bottom .part .box').each(function(){
                            if($(this).hasClass(x.data('opt'))){
                                $(this).fadeIn()
                            }
                            else{
                                $(this).fadeOut();
                            }
                        })
                        if($('.work .btn button').html() == 'View More'){
                            $('.work .bottom .part .box').each(function(){
                                if($(this).hasClass(x.data('opt'))){
                                    $(this).fadeIn()
                                }
                                else{
                                    $(this).fadeOut();
                                }
                            })
                        }
                        else{
                            $('.work .bottom .part .box.hide').each(function(){
                                if($(this).hasClass(x.data('opt'))){
                                    $(this).fadeIn()
                                }
                                else{
                                    $(this).fadeOut();
                                }
                            })
                        }
                            
                    
                    }
                })
            }
        })
    })
    




    //Option
    $('.work .option ul li').each(function(){
        
        $('.work .btn button').click(function(){
            if($('.work .btn button').html() == 'View More'){
                $('.work .btn button').html('View Less')
                $('.work .bottom .part .box').each(function(){
                    if($(this).hasClass('hide')){
                        $(this).fadeIn()
                    }
                })
            }
            else{
                $('.work .btn button').html('View More')
                $('.work .bottom .part .box').each(function(){
                    if($(this).hasClass('hide')){
                        $(this).fadeOut()
                    }
                })
            }
        })
        $(this).click(function(){
            var x=$(this)
            $('.work .option ul li').each(function(){
                $(this).removeClass('active');
            })
            x.addClass('active')
            $('.work .bottom .part .box').each(function(){
                if($(this).hasClass(x.data('opt'))){
                    $(this).fadeIn()
                }
                else{
                    $(this).fadeOut();
                }
            })
            if($('.work .btn button').html() == 'View More'){
                $('.work .bottom .part .box').each(function(){
                    if($(this).hasClass(x.data('opt'))){
                        $(this).fadeIn()
                    }
                    else{
                        $(this).fadeOut();
                    }
                })
            }
            else{
                $('.work .bottom .part .box.hide').each(function(){
                    if($(this).hasClass(x.data('opt'))){
                        $(this).fadeIn()

                    }
                    else{
                        $(this).fadeOut();
                    }
                })
            }
            
        })
    })
    $('.work .bottom .part .box .icon').click(function(){
        $('.picture').fadeIn()
        $('.picture img').attr('src',$(this).prev().attr('src'))
    })
    $('.picture .icon').click(function(){
        $('.picture').fadeOut()
    })



    //Blog
    $('.blog .contain .bottom .box .info2 .read').each(function(){
        $(this).click(function(){
            if($(this).prev().text()=='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia neque non saepe unde fugiat dolore. In perferendis architecto id doloremque voluptatum, iusto voluptatem sit pariatur impedit atque! Fugiat, dolore veritatis?'){
                $(this).prev().text('Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur elit.')
                $(this).text('Read More');
            }
            else if($(this).prev().text()=='Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur elit.'){
                $(this).prev().text('Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia neque non saepe unde fugiat dolore. In perferendis architecto id doloremque voluptatum, iusto voluptatem sit pariatur impedit atque! Fugiat, dolore veritatis?')
                $(this).text('Read Less');
            }
        })
    })
})


//Number
let nums = document.querySelectorAll('.number .contain .box .num');
let section = document.querySelector('.number .contain');
let started=false;

window.onscroll=function(){
    if(window.scrollY >= section.offsetTop){
        if(!started){
            nums.forEach((num) => startCount(num));
        }
        started=true;
    }
}

function startCount(el){
    let num = el.dataset.num;
    let count = setInterval(()=>{
        el.textContent++;
        if(el.textContent == num){
            clearInterval(count);   
        }
    },20/num);
}
