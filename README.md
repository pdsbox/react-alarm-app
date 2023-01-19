<22.12.16 ~ >
    프로젝트 기획
    -리액트로 만드는 alarm 앱
    -react-router-dom


< ~ 22.12.21>
    Main페이지 READ 일부 구현.
    - State로 READ 상태, CREATE 상태 구분
    Main페이지 CREATE 일부 구현.
    - 리스트에 객체 정보 push
    참고 : https://opentutorials.org/course/4900/31269


< ~ 22.12.23>
    - json-server 설치
    - db(.json) 세팅
    - map()으로 데이터 바인딩(기존 for문+push로 렌더링에 보여줄 변수 따로 지정해서 데이터 저장하는 방식.)


< ~ 22.12.28>
    - json-server -> REST API 구축 및 fetch메소드로 HTTP통신.
    - Read(GET), Create(POST), Delete(DELETE) 기능 구현.

< ~ 22.12.30>
    - json-server 통해서 UPDATE기능 구현 ~ing
    컴포넌트 간 id값 props로 옮겨서 로직 구현 - 실패.
        => fetch시 비동기처리로 인해 모드 변경하는것이 props로 값 넘겨주는 것 보다 빨라서 데이터 흐름 제어에 어려움.
    State로 id값 넘겨주기 - 실패
        => 위와 같은 이유...
    reducer, context ...?

< ~ 23.01.02>
    - UPDATE 구현.
        구현이 지체된 원인 : fetch 비동기적 작동원리와 리액트 라이프사이클에 대한 이해 부족, 구현 접근방식을 너무 복잡하게 생각했던 것.
        => db값 하나하나 props로 전달 및 state화, Fetch시 useEffect라는 옵션도 고려.
        useEffect : 컴포넌트 렌더링 시 작동(기본값) or 2번째 인자값으로 특정 'state' 설정하여 해당 state내용 변경시마다 함수 실행. []빈 배열은 최초 1회만 실행.
    - select / option 태그 셋팅 이슈(초기값 세팅)
        원인 : 태그 생성시 초기값 설정 없이 if로 데이터 일치할때 selected 속성값(내가 생각한 초기값) 주려고 했었음.
        => select태그에 defaultValue로 초기값 설정하여 해결. 번거롭게 if문 사용하지 않아도 됌.
        
< ~ 23.01.04>
    - Main 컴포넌트 기능별로 분리
    - Main 컴포넌트 컨텐츠영역 시간순으로 Sort & View
        { https://hianna.tistory.com/409 }


<23.01.17>
Alarm : CREATE / UPDATE 컴포넌트 input text 글자수 제한 지정(16)
    => 반응형 레이아웃 쉽게 디자인하기 위함.

Timer : Head 영역 설계.
    - 라디오 버튼 + label태그로 구성.
    - 개발자도구에서 React에서 쓰는 속성값(checked -> defaultChecked , for -> htmlFor) 확인 및 변경.
    => 이후 컴포넌트화 시켜서 분리/관리

생각해야할 것 : 각 기능별 페이지마다 헤더/컨텐츠로 섹션을 나누고 그에 따라 레이아웃, 간격, 영역 크기 등 디자인적으로 공통화 시켜야 할 것들.

<23.01.19>
Alarm : READ 컴포넌트 시간부분 수정(10이하일 때 0붙여서 표시)

Timer : Timer 컴포넌트 초안 스케치.
    - 각 버튼에 따른 이벤트 실행.
    START : interval 실행
    STOP : interval 중지
    CHECK : 중간시간 기록
    RESET : 모든 시간정보 초기화(0)



데이터 정보(DB) : .json

- 메인 페이지
1) 각 페이지 기능 설명.
    => 영상 링크 첨부로 작동법 보여주기
2) 페이지 이동은 ROUTE기능 사용.


- 알람 페이지
1) 콘텐츠 헤더 영역에 현재시간 보여주기
2) 설정할 시간과 한 줄 코멘트 입력받아서 박스 생성.
    => 박스 정보 표시:READ / 입력받은 데이터로 박스 생성:CREATE / 박스 정보 수정:UPDATE / 박스 삭제:DELETE
3) 설정한 시간에 도달했을 때 알람 발생 ex) alert창 띄워주기
    => 현재시간 === 설정시간 => { 알람 이벤트 발생 }
4) 박스 생성에 제한 없음.
EXTRA)
    정렬 기능? -> set한 hour 기준?

- 운동기록(타이머) 페이지
1) 시작 버튼을 누르면 시간이 흐름
2) 중지 버튼을 누르면 시간이 멈춤
3) 구간기록 버튼을 누르면 누른 당시의 시간 정보를 저장해놨다가 표시해줌
4) 초기화 버튼을 누르면 모든 시간 정보가 사라지고 시간도 초기화(00:00:00)
    => 사이클
    초기 : (구간기록) (시작)
    시작 : (구간기록) (중지)
    중지 :  (초기화)  (계속)
    *구간기록 : Work it / Rest 2개 버튼으로 표시. 상태값 on/off = toggle?

- 체크리스트 페이지
1) 






23.01.10
-이벤트객체 currentTarget과 target의 차이
    currentTarget : 이벤트 리스너가 달려있는 있는 요소
    target : 트리거

ex) target은 이벤트를 작동시키는 span태그의 '글자'일 수도, 버튼 일수도 있다.
    currentTarget은 onClick등 이벤트리스너가 '직접'달려있는 요소.