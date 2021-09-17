// type은 특정 타입에 별칭을 붙이는 용도로 사용한다. 이를 사용하여 객체를 위한 타입을 설정할 수도 있고,
// 배열, 또는 그 어떤 타입이던 별칭을 지어줄 수 있다.
var newPerson = {
    name: '김사람'
};
var newExpert = {
    name: '김개발',
    skills: ['js', 'react']
};
// type과 interface가 있지만 현재 버전의 타입스크립트에서는 type과 interface의 큰 차이가 없다.
// 단 라이브러리를 작성할 경우나 다른 라이브러리를 위한 타입 지원파일을 작성하게 될 때는 interface를 권장한다.
