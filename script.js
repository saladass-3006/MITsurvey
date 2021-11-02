//left button
const leftBtn = document.getElementsByClassName('carousel_button--left')[0];
//right button
const rightBtn = document.getElementsByClassName('carousel_button--right')[0];
//slides array
const carousalSlides = Array.from(document.getElementsByClassName('carousalimage')[0].children);
//slide show
const carousalWhole = document.getElementsByClassName('carousalimage')[0];
//current slide 

let distance=0;

const images=['./images/laksPics/farewellKiss.jpg','./images/laksPics/tooManykisses.jpg','./images/laksPics/anniversaryPic.jpg','./images/laksPics/32ndGift.jpg','./images/laksPics/birthday.jpg','./images/laksPics/cakebake.jpg','','./images/laksPics/Despacito.jpg','','','./images/laksPics/pikachu.jpg','./images/laksPics/ILoveYou.jpg','./images/laksPics/pyaarAaya.jpg','./images/laksPics/duopic.jpg','','./images/laksPics/Mgmall.jpg','./images/laksPics/pixar.jpg'];

Array.from(document.getElementsByClassName('videos')).forEach(e=>
    {
        e.innerHTML=`<div class="imageContainer">
                    
        </div>`;
    })

for(let i=0;i<16;i++)
    {
        document.getElementsByClassName('imageContainer')[i].style=`background: url('${images[i]}') no-repeat center center/contain;`;
    }
leftBtn.addEventListener('click', e => {

    const currentSlide=carousalWhole.querySelectorAll('.current-slide')[0];
    const targetSlide=currentSlide.previousElementSibling;
    
    if(targetSlide!=null)
    {
        distance+=targetSlide.getBoundingClientRect().x
        updateSlide(distance,targetSlide,currentSlide);
    }
    
});

rightBtn.addEventListener('click', e => {

    const currentSlide=carousalWhole.querySelectorAll('.current-slide')[0];
    const targetSlide=currentSlide.nextElementSibling;
    
    if(targetSlide!=null)
    {
        distance+=targetSlide.getBoundingClientRect().x
        updateSlide(distance,targetSlide,currentSlide);
    }
    
});

function updateSlide(distance, target,currentSlide) {

    console.log(distance);
    carousalWhole.style.transform = 'translateX(-' + distance + 'px)';
    
    currentSlide.classList.remove('current-slide');
    target.classList.add('current-slide');
    updateDot(target,currentSlide);
    
}

//carousal nav

const carousalNav=document.getElementsByClassName('carousal_nav')[0];

carousalNav.addEventListener('click', e=>
{
    let targetDot=e.target.closest('.carousal_indicator');
    
})

function updateDot(target,currentSlide)
{
    let i=0;
    carousalSlides.forEach(e=>
        {
            // console.log(e);
            // console.log(currentSlide);
            if(e==target)
            {
                let currentDot=document.getElementsByClassName('current-indicator')[0];
                let targetDot=document.getElementsByClassName('carousal_indicator')[i];
                
                currentDot.classList.remove('current-indicator');
                targetDot.classList.add('current-indicator');
            }
            i++;
        })
}

let VidArray=['./videos_LaksuWeb/farewell_kiss.mp4','./videos_LaksuWeb/tooManyKisses.mp4','./videos_LaksuWeb/1yearanniversary.mp4','./videos_LaksuWeb/32ndGift.mp4','./videos_LaksuWeb/birthday.mp4','./videos_LaksuWeb/Cakebake.mp4','./videos_LaksuWeb/cutieLaks.mp4','./videos_LaksuWeb/Despacito.mp4','./videos_LaksuWeb/KuchhTohHai.mp4','./videos_LaksuWeb/laks_importance.mp4','./videos_LaksuWeb/laks_pikachu.mp4','./videos_LaksuWeb/laks_vid1.mp4','./videos_LaksuWeb/laks_vid2.mp4','./videos_LaksuWeb/laks_vid3.mp4','./videos_LaksuWeb/laksKiss.mp4','./videos_LaksuWeb/mallSnap.mp4','./videos_LaksuWeb/pixarsnap.mp4','./videos_LaksuWeb/WeCanMakeIt.mp4'];

let videos=document.getElementsByClassName('videos');

let videoPlayer=document.getElementsByClassName('videoPlayerNowPlaying')[0];



function playVideo(index)
{
    videoPlayer.innerHTML=`<video width='450px' height='600px' autoplay controls>
    <source src="${VidArray[index]}" type="video/mp4">
    </video>`;
    document.documentElement.scrollTop=0;
    videoPlayer.style=`display:block;`;
    document.getElementsByClassName('videoPlayer')[0].style='display:flex; justify-content:center';
    document.getElementsByClassName('carousal')[0].style=`display:none;`;
    document.getElementsByClassName('playerText')[0].style=`display:block`;
}

let before=document.getElementsByClassName('beforeConfirmationPage')[0];
let after=document.getElementsByClassName('afterconfirmationPage')[0];

let proceed=document.getElementsByClassName('proceed')[0];

proceed.addEventListener('click',e=>
{
    before.style=`display:none;`;
    after.style=`display:block;`;
})






