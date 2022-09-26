const inputs = document.querySelectorAll("input")
const button = document.querySelector("button")

let validStatus = [false,false,false,false,false]

let inputObjects = new Array();

button.onclick = () => {

    inputs.forEach((input, index) => {
        
        let test = 10;

        let inputOjb = {
            value: input.value,
            placeholder: input.placeholder,
            print: () => {
                console.log(inputOjb.placeholder + "print 메소드 실행")
            },
            // 키값 벨류값   변수명과 키값이 같을때 ""사용
            "test": test
        }
        inputObjects.push(inputOjb);

        // true false 
        validStatus[index] = !inputIsEmpty(input.value);
    });
    console.log(inputObjects)
    
    // 만약 하나라도 입력되어있지 않으면 순서대로" *번이 입력되지 않았습니다. " 메세지 출력
    // includes(false) == false 값을 포함하고있는지
    if(validStatus.includes(false)){
        for(let i = 0; i < validStatus.length; i++){
            if(!validStatus[i]){
                alert(inputs[i].placeholder + "이 입력되지 않았습니다.")
                break
            }
        }
    }else{
        alert("검사완료")
    }
    // input값이 비어있는지 확인
    function inputIsEmpty(str){
        return str == null || str == "" || str == undefined;
    }
}

/*
Array사용
검사하기를 눌렀을때 input에 값이 입력되어 있어야만 
검사완료 메세지를 보여준다.

만약 하나라도 입력되어있지 않으면 순서대로 
" *번이 입력되지 않았습니다. " 메세지 출력
*/