# :movie_camera: 장르는 로맨스 
> 로맨틱한 사랑을 꿈꾸는 당신, 영화 취향이 같은 상대를 찾아 데이트해보시는건 어떨까요?

![](https://assets3.thrillist.com/v1/image/1871133/414x310/crop;jpeg_quality=65.jpg)

기획자 : 장르는 로맨스  
개발자 :
* back - 박준호
* front - 박지홍


## Front-end

### :hourglass: Get Start
```
git clone https://github.com/hongzzi/romance-front.git romance
cd romance
yarn install
yarn start
```

### :high_brightness: 배포
```

```

### :ticket: 프로젝트 설명

* 변경된 점
    * cra(create-react-app)를 통해 새로 프로젝트를 만든 후 작업했습니다.
    * 기존 프로젝트에 있던 리덕스는 사용하지 않습니다. 규모가 작고 페이지가 적은데 redux를 얹으면 무거워보이는 감이 있어서 제외했습니다.
    * 랜딩페이지를 그대로 사용하고 싶다는 요청에 따라, 기존 프로젝트에서 랜딩페이지를 그대로 가져왔습니다. 
    > 그 이유로 컴포넌트 구성이 랜딩페이지만 조금 다릅니다.

* React, styled-Components
    * 리액트 컴포넌트 작업에서 styled components를 이용해 css 작업 및 모듈화를 선택했습니다.
    * 하지만 cra를 이용했기 때문에 css, scss, .. 등 웹팩설정이 기본으로 되어있어서 다른 방법을 사용하셔도 됍니다.

* Tree
    
```
── src
│   ├── App.js      // 기본 레이아웃(헤더, 푸터)와 라우터를 담당합니다.
│   ├── Root.js     // 전역 설정을 돕습니다. 글로벌 css설정, theme 설정 등
│   ├── assets      // 프로젝트에서 사용하는 정적 리소스를 담고 있습니다.
│   │   ├── css
│   │   │   └── fonts.css
│   │   ├── fonts
│   │   │   ├── ...
│   │   │   └── NotoSansKR-Thin.otf
│   │   └── image
│   │       ├── ...
│   │       └── txt_your.png
│   ├── components      // 페이지를 구성하는 컴포넌트폴더 입니다.
│   │   ├── Common      // 공용으로 사용할 컴포넌트를 담습니다.
│   │   │   └── Button
│   │   │       └── index.js
│   │   ├── KakaoLogin  // 카카오 로그인 페이지입니다.
│   │   │   └── index.js
│   │   ├── Landing     // origin 프로젝트에서 가져온 랜딩페이지입니다,
│   │   │   ├── Landing.scss
│   │   │   └── index.js
│   │   ├── Layout
│   │   │   ├── Footer
│   │   │   │   └── index.js
│   │   │   ├── Header
│   │   │   │   └── index.js
│   │   │   ├── Nav
│   │   │   │   └── index.js
│   │   │   └── index.js
│   │   ├── MovieCard   // 제안 받은 영화시간표 목록
│   │   │   └── index.js
│   │   ├── MovieForm   // 제안할 영화시간표 폼
│   │   │   └── index.js
│   │   ├── UserCard    // 제안 받은 유저 정보
│   │   │   └── index.js
│   │   └── UserForm    // 나의 정보 등록
│   │       └── index.js
│   ├── index.js 
│   ├── pages           // 페이지
│   │   ├── About.js
│   │   ├── LandingPage.js
│   │   ├── Login.js
│   │   ├── MovieCard.js
│   │   ├── MovieForm.js
│   │   ├── UserForm.js
│   │   ├── UserInfo.js
│   │   └── index.js
│   ├── serviceWorker.js
│   ├── setupTests.js
│   └── theme           // 사용할 공통 css 정의
│       └── index.js
└── yarn.lock
```


