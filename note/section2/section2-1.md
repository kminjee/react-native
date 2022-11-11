## react-native의 핵심 개념

- `<div>`, `<h2>` 태그를 사용할 수 없다. DOM을 통해 웹 브라우저 작업 시 사용할 수 있는 HTML 요소이므로 네이티브 기기에서는 DOM을 가지고 있지 않기 때문에 HTML 요소를 지원하지 않는다.
- CSS가 없다. 대신 스타일 시트를 사용한다.
- App 컴포넌트는 앱에 렌더링 되는 루트 컴포넌트이다. expo가 자동으로 app 컴포넌트를 내보내서 루트 컴포넌트로 렌더링한다. **따라서 모든 UI요소와 컴포넌트는 app 컴포넌트 하위에 있어야 한다.**

<br/>

## 컴포넌트 특징

- `ScrollView` 의 스크롤 영역은 부모 요소가 결정한다.
- `ScrollView` 는 전체 UI가 렌더링 될 때마다 `ScrollView` 안에 있는 항목을 전부 렌더링 한다. 데이터가 제한적일 때는 사용해도 괜찮지만 많은 데이터를 관리할 때는 앱 성능에 문제가 발생하므로 잘 사용하지 않는다.
- `FlatList` 는 `ScrollView` 와 달리 화면 밖의 항목은 사용자가 스크롤해야 렌더링 되므로 `ScrollView`를 대체할 수 있다.
- `FlatList` 의 프로퍼티 `keyExtractor` 는 함수를 값으로 취한다. 역할은 모든 항목에서 키를 가져오려고 호출하는 함수다.

<br/>

## (번외) 타입스크립트 설치 및 설정

1. 타입스크립트가 동작할 수 있도록 라이브러리 설치하기 <br/>
   `npm install typescript @types/react @types/react-native --save-dev`
2. 타입스크립트가 react-native에서 동작할 수 있도록 구성 파일 만들기 <br/>

```
{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react",
    "lib": ["es6", "es2017"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext",
    "skipLibCheck": true
  },
  "exclude": ["node_modules", "babel.config.js", "metro.config.js", "jest.config.js"]
}
```

## 이벤트 리스너

#### Pressable

- 웹에서는 `onClick` 프로퍼티로 아이템 터치가 가능했지만 react-native 에서는 인식을 시켜줘야 하므로 react-native에서 제공하는 특정 컴포넌트로 아이템을 감싸주어야 한다.
- 예전에는 `Touchable` 을 사용했지만 지금은 `Pressable` 로 사용한다.
- 내부에 있는 어떤 아이템이든 터치하면 onPress 프로퍼티로 제공된 함수를 실행시킨다.
