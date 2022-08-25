// Course
var courseList = document.querySelectorAll('.course');
var courseInfo = document.querySelector('.course-info');
var courseInfoList = document.querySelectorAll('.course-info-list ul');
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