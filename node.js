// Course
var courseInfoList = document.querySelectorAll('.course-info-list ul');
    var courseList = document.querySelectorAll('.course');
if(window.innerWidth >= 1024) { // PC

    var courseInfo = document.querySelector('.course-info');
    var hideBorder = document.querySelector('.hide-border');
    function changeCourse(index) {
        document.querySelector('.course-active').classList.remove('course-active');
        courseList[index].classList.add('course-active');
        courseInfo.setAttribute('style','border-top-left-radius: 20px;');
        courseInfo.setAttribute('style','border-bottom-left-radius: 20px;');
        if(index == 0){
            courseInfo.setAttribute('style','border-top-left-radius: 0px;');
        }
        if(index == courseList.length - 1) {
            courseInfo.setAttribute('style','border-bottom-left-radius: 0px;');
        }

        hideBorder.setAttribute('style',`top:${courseList[index].offsetTop}px`);

        document.querySelector('.course-info-list .show').classList.remove("show");
        courseInfoList[index].classList.add('show');
    }

    changeCourse(0);

    courseList.forEach( (course, index) => {
        course.addEventListener('click', (e)=> {
            changeCourse(index);
        });
    });

}
else { //// TABLET & MOBILE

    var courseCLoseModalBtn = document.querySelector('.close-modal-btn');
    var moreDetailBtn = document.querySelectorAll('.more-detail');
    
    courseCLoseModalBtn.addEventListener('click',(e)=>{
        document.querySelector('.modal-course-info').setAttribute('style','display:none');
    });

    moreDetailBtn.forEach((btn, index) => {
        btn.addEventListener('click',(e)=>{
            document.querySelector('.course-info-list .show').classList.remove("show");
            let headerTextContent = courseList[index].querySelector('.course-name').innerHTML;
            document.querySelector('.course-header-text').innerHTML = headerTextContent;
            courseInfoList[index].classList.add('show');
            document.querySelector('.modal-course-info').setAttribute('style','display:block');
        });
    });

}

// nav Modal mobile tablet
var wrapModal = document.querySelector('.wrap-modal');
var openModalBtn = document.querySelector('.nav i');
var headerName = document.querySelector('.nav .name');

function toggleModal() {
    wrapModal.classList.toggle('active');
}

function closeModal() {
    wrapModal.classList.remove('active');
}

headerName.addEventListener('click', (e) => {
    closeModal();
});

wrapModal.addEventListener('click', (e) => {
    closeModal();
});

openModalBtn.addEventListener('click', (e) => {
    toggleModal();
});

// Try

var WD = window.innerWidth;

console.log(WD);