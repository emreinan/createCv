
function nameEnter() {
    let input = document.getElementById('name');
    let div = document.getElementById('nameCv');

    input.addEventListener('input', () => {
        div.innerText = input.value;
    })
}
function Title() {
    let input = document.getElementById('title');
    let div = document.getElementById('titleCv');

    input.addEventListener('input', () => {
        div.innerText = input.value;
    })
}
function phone() {
    let input = document.getElementById('phone');
    let li = document.getElementById('phoneCv');

    input.addEventListener('input', () => {
        li.innerText = input.value;
    })
}
function email() {
    let input = document.getElementById('email');
    let li = document.getElementById('emailCv');

    input.addEventListener('input', () => {
        li.innerText = input.value;
    })
}
function web() {
    let input = document.getElementById('web');
    let li = document.getElementById('webCv');

    input.addEventListener('input', () => {
        li.innerText = input.value;
    })
}
function adress() {
    let input = document.getElementById('adress');
    let li = document.getElementById('adressCv');

    input.addEventListener('input', () => {
        li.innerText = input.value;
    })
}
function education() {
    let input = document.getElementById('edu');
    let divExp = document.getElementById('eduCv');

    input.addEventListener('input', () => {
        divExp.innerText = input.value;
    })
    let schName1 = document.getElementById('firstSchool');
    let schName2 = document.getElementById('secondSchool');
    let schName3 = document.getElementById('thirdSchool');

    let schName1Li = document.getElementById('eduLi1Div');
    let schName2Li = document.getElementById('eduLi2Div');
    let schName3Li = document.getElementById('eduLi3Div');

    let schExp1 = document.getElementById('firstSchoola');
    let schExp2 = document.getElementById('secondSchoola');
    let schExp3 = document.getElementById('thirdSchoola');

    let schExp1Li = document.getElementById('eduLi1aDiv');
    let schExp2Li = document.getElementById('eduLi2aDiv');
    let schExp3Li = document.getElementById('eduLi3aDiv');



    schName1.addEventListener('input', () => {
        schName1Li.innerText = schName1.value;
    })
    schName2.addEventListener('input', () => {
        schName2Li.innerText = schName2.value;
    })
    schName3.addEventListener('input', () => {
        schName3Li.innerText = schName3.value;
    })

    schExp1.addEventListener('input', () => {
        schExp1Li.innerText = schExp1.value;
    })
    schExp2.addEventListener('input', () => {
        schExp2Li.innerText = schExp2.value;
    })
    schExp3.addEventListener('input', () => {
        schExp3Li.innerText = schExp3.value;
    })

    // input.addEventListener('keydown', (e) =>{
    //     if (input.value.length >=140) {
    //         e.preventDefault();
    //     }  
    // }) 
    //Bu şekilde yapmıyorum çünkü 140 karaktere ulaşınca silmiyor, öylece kalıyor.
}
function schoolNum() {

    let schoolNo = document.getElementById('schoolNumber');
    let schoolNo1 = document.getElementById('frstSchool');
    let schoolNo2 = document.getElementById('scndSchool');
    let schoolNo3 = document.getElementById('thrdSchool');

    let li1 = document.getElementById('eduLi1');
    let li2 = document.getElementById('eduLi2');
    let li3 = document.getElementById('eduLi3');

    if (schoolNo.value === "1") {
        schoolNo1.style.display = '';
        schoolNo2.style.display = 'none';
        schoolNo3.style.display = 'none';

        li1.style.display = '';
        li2.style.display = 'none';
        li3.style.display = 'none';
    }
    else if (schoolNo.value === "2") {
        schoolNo1.style.display = '';
        schoolNo2.style.display = '';
        schoolNo3.style.display = 'none';

        li1.style.display = '';
        li2.style.display = '';
        li3.style.display = 'none';
    }
    else if (schoolNo.value === "3") {
        schoolNo1.style.display = '';
        schoolNo2.style.display = '';
        schoolNo3.style.display = '';

        li1.style.display = '';
        li2.style.display = '';
        li3.style.display = '';
    }
    else if (schoolNo.value === "0") {
        schoolNo1.style.display = 'none';
        schoolNo2.style.display = 'none';
        schoolNo3.style.display = 'none';

        li1.style.display = 'none';
        li2.style.display = 'none';
        li3.style.display = 'none';
    }
}
function skillNum() {
    let skillNo = document.getElementById('skillNo');
    let skillNo1 = document.getElementById('frstSkill');
    let skillNo2 = document.getElementById('scndSkill');
    let skillNo3 = document.getElementById('thrdSkill');

    let li1 = document.getElementById('skillList1');
    let li2 = document.getElementById('skillList2');
    let li3 = document.getElementById('skillList3');

    if (skillNo.value === "1") {
        skillNo1.style.display = '';
        skillNo2.style.display = 'none';
        skillNo3.style.display = 'none';

        li1.style.display = '';
        li2.style.display = 'none';
        li3.style.display = 'none';
    }
    else if (skillNo.value === "2") {
        skillNo1.style.display = '';
        skillNo2.style.display = '';
        skillNo3.style.display = 'none';

        li1.style.display = '';
        li2.style.display = '';
        li3.style.display = 'none';
    }
    else if (skillNo.value === "3") {
        skillNo1.style.display = '';
        skillNo2.style.display = '';
        skillNo3.style.display = '';

        li1.style.display = '';
        li2.style.display = '';
        li3.style.display = '';
    }
    else if (skillNo.value === "0") {
        skillNo1.style.display = 'none';
        skillNo2.style.display = 'none';
        skillNo3.style.display = 'none';

        li1.style.display = 'none';
        li2.style.display = 'none';
        li3.style.display = 'none';
    }
}
function skills() {
    let input = document.getElementById('skills');
    let div = document.getElementById('skillsCv');

    input.addEventListener('input', () => {
        div.innerText = input.value;
    })

    let skillName1 = document.getElementById('fSkill');
    let skillName2 = document.getElementById('sSkill');
    let skillName3 = document.getElementById('thSkill');

    let skillName1ListDiv = document.getElementById('skillList1Div');
    let skillName2ListDiv = document.getElementById('skillList2Div');
    let skillName3ListDiv = document.getElementById('skillList3Div');

    let skillExp1 = document.getElementById('1skill');
    let skillExp2 = document.getElementById('2skill');
    let skillExp3 = document.getElementById('3skill');

    let skillExp1ListDiv = document.getElementById('skillList1aDiv');
    let skillExp2ListDiv = document.getElementById('skillList2aDiv');
    let skillExp3ListDiv = document.getElementById('skillList3aDiv');

    skillName1.addEventListener('input', () => {
        skillName1ListDiv.innerText = skillName1.value;
    })
    skillName2.addEventListener('input', () => {
        skillName2ListDiv.innerText = skillName2.value;
    })
    skillName3.addEventListener('input', () => {
        skillName3ListDiv.innerText = skillName3.value;
    })

    skillExp1.addEventListener('input', () => {
        skillExp1ListDiv.innerText = skillExp1.value;
    })
    skillExp2.addEventListener('input', () => {
        skillExp2ListDiv.innerText = skillExp2.value;
    })
    skillExp3.addEventListener('input', () => {
        skillExp3ListDiv.innerText = skillExp3.value;
    })
}
function workExp() { //SÜTUNDAN DIŞARI TAŞMAYI ENGELLE
    let input = document.getElementById('workExp');
    let div = document.getElementById('workExpCv');
    let kalan = document.getElementById('expKalan');

    input.addEventListener('input', () => {
        div.innerText = input.value;

        let text = `${input.value.length}/450 karakter girildi.`;
        kalan.innerText = text;
    })
}
function profile() {
    let input = document.getElementById('profile');
    let div = document.getElementById('profileCv');
    let kalan = document.getElementById('profileKalan');

    input.addEventListener('input', () => {
        div.innerText = input.value;

        let text = `${input.value.length}/450 karakter girildi.`
        kalan.innerText = text;
    })
}
function colors() {
    let cvBgColor = document.getElementById('cvBgColor');
    let cvBgColorEl = document.getElementById('Cv');

    cvBgColor.addEventListener('input', () => {
        cvBgColorEl.style.backgroundColor = cvBgColor.value;
    })

    let leftBgColor = document.getElementById('leftBgColor');
    let leftBgColorEl = document.getElementById('SolSutun');

    leftBgColor.addEventListener('input', () => {
        leftBgColorEl.style.backgroundColor = leftBgColor.value;
    })

    let nameBgColor = document.getElementById('nameBgColor');
    let nameBgColorEl = document.getElementById('isimEtiketi');

    nameBgColor.addEventListener('input', () => {
        nameBgColorEl.style.backgroundColor = nameBgColor.value;
    })

    let nameColor = document.getElementById('nameColor');
    let nameColorEl = document.getElementById('isimEtiketi');

    nameColor.addEventListener('input', () => {
        nameColorEl.style.color = nameColor.value;
    })


}
function font() {
    let cvFont = document.getElementById('fontStyle');
    let cvFontEl = document.getElementById('Cv');

    cvFont.addEventListener('change', () => {
        cvFontEl.style.fontFamily = cvFont.value;
    })
}
function photo() {
    let photoFrame = document.getElementById('photoFrame');

    let angularPhoto = document.getElementById('angularFoto');
    let ellipsePhoto = document.getElementById('ellipseFoto');
    let circlePhoto = document.getElementById('circleFoto');

    if (photoFrame.value === 'angular') {
        angularPhoto.style.display = '';
        ellipsePhoto.style.display = 'none';
        circlePhoto.style.display = 'none';
    }
    else if (photoFrame.value === 'ellipse') {
        angularPhoto.style.display = 'none';
        ellipsePhoto.style.display = '';
        circlePhoto.style.display = 'none';
    }
    else if (photoFrame.value === 'circle') {
        angularPhoto.style.display = 'none';
        ellipsePhoto.style.display = 'none';
        circlePhoto.style.display = '';
    }
    

}
function lineColor() {
    let hrColor = document.getElementById('hrColor');
    let hrAll = document.querySelectorAll(".hr"); 
    
    hrColor.addEventListener('input', ()=>{
        hrAll.forEach(function(hrClr){
            hrClr.style.color=hrColor.value;
        })
    })
}
  function lineStyle() {
    let hrStyle = document.getElementById('hrStyle');
    let hrAll = document.querySelectorAll(".hr"); 

          hrAll.forEach(function(hrSt){
              switch (hrStyle.value) {
                  case "dotted":
                      hrSt.style.borderStyle ="dotted";
                      break;
              case "dashed":
                  hrSt.style.borderStyle="dashed";
                  break;   
              case "solid":
                  hrSt.style.borderStyle="solid";
                  break;   
                  default:
                      break;
              }
          })
  }  

    
    
    
    
    
    
    
    


    

