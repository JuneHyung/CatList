# Infinite-Scrolling

Vue로 작성한 무한스크롤 예제

<strong>Front : Vue </strong>

```
npm install
npm run serve
```

<strong>Back : Spring</strong>

```
Run application
```

<Strong>DB : mysql</strong>



## 주요기능

* 무한 스크롤 (완료)
* detail 정보 띄우기 (vuex, props이용.) (완료)
* 다크 모드 ( 완료)
* 데이터 로딩 UI (완료)
* 검색 기능. (완료)
* 검색 후 최근 검색어 태그 추가. (진행중)



---



## 무한스크롤 로직

```vue
data(){
   return{
  	cats:[],
    start:0,
    limit:6,
    isLoading:true,
   }
 },
```

* axios통신으로 목록을 받아와 cats에 추가.
* 시작할지점을 나타내는 start
* 불러올 목록의 개수 limit
* 더 불러올 데이터가있다면 isLoading을 true, 없다면 false로.



```vue
created(){
  this.append_list();
  window.addEventListener('scroll', this.scroll);
},
```

<strong>처음 생성 될 때 , 처음 보여질 목록을 추가. </strong>

* append_list()함수 동작
* scroll 이벤트를 추가함.



```vue
scroll(){
    let scrolledToBottom =
      document.documentElement.scrollTop + window.innerHeight ===
      document.documentElement.offsetHeight;
      console.log(this.isLoading);

      if(this.isLoading && scrolledToBottom){
        this.isLoading = true;
        setTimeout(this.append_list, 1000);
      }
  },
```

<strong>scroll() 메서드</strong>

* scrolledToBottom은 스크롤이 가장 바닥인지 저장하는 변수.

* scrollTop과 보이는 window의 높이를 더한게 전체 높이랑 같으면 True, 아니면 False.



만약 scroll이 가장 아래에 있고, 더 로딩할게 있다면(isLoading = true) 1초 후 <strong>append_list()</strong>동작.

(추후 이 1초 사이에 로딩화면 추가할 예정.)



```vue
append_list(){
    http.get(`/cats/${this.start}`).then((response)=>{
      if(response.data.length>=6){
        this.isLoading = true;
            for(var i=0;i<6;i++){
                this.cats.push({
                cat_name: response.data[i].cat_name,
                cat_num: response.data[i].cat_num,
                create_date: response.data[i].create_date,
                description: response.data[i].description,
                kind: response.data[i].kind,
                profile: response.data[i].profile
            },
        );
        }
        this.start += this.limit
        console.log(this.start);
      }
      else{
       for(i=0;i<response.data.length;i++){
            this.cats.push({
                cat_name: response.data[i].cat_name,
                cat_num: response.data[i].cat_num,
                create_date: response.data[i].create_date,
                description: response.data[i].description,
                kind: response.data[i].kind,
                profile: response.data[i].profile
            },
            );
        }
        this.start += this.limit
        console.log(this.start);
        this.isLoading=false;
      }
    }).catch(()=>{
      alert('정보를 받아오는데 실패!');
    })
  }
},
```

<strong>append_list()</strong>

* axios통신을 통해 받은 목록을 cats에 push함.
* push 후  ' this.start += this.limit '를 통해 스크롤 했을 때 다음 데이터의 시작점을 바꿔줌.
* 만약 받은 data의 길이가 limit보다 작다면 isLoading을 false로 바꾸고 더 이상 data를 받지 않는다.

---



## 다크모드

```vue
export default new Vuetify({
    theme: {
        dark:true
    }
});
```

<strong> 먼저 vuetify 플러그인 파일 (plugin/vuetify.js)에 dark모드를 사용한다고 설정.</strong>



```vue
// 로컬 스토리지에 변수 값 확인.
const theme = localStorage.getItem('dark_theme');
```

로컬 스토리지에 변수 'dark_theme'의 값을 확인 후

```vue
 this.$vuetify.theme.dark
```

dark_theme에 따라 위의 값을 설정해줌.



```vue
window.matchMedia('(prefers-color-scheme: dark)').matches
```

만약 dark_theme이 존재 하지 않는다면, 시스템에서 다크모드를 활성화 했는지 확인 하고, 활성화 되었다면   this.$vuetify.theme.dark를 true로 설정.

그리고 <strong>localStorage에 'dark_theme'을 저장</strong>한다.



```vue
<button class="darkBtn" @click="changeDark">다크모드</button>


methods:{
    changeDark() {
                // console.log('dark : ' + this.$vuetify.theme.dark.toString());

                this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
                localStorage.setItem('dark_theme', this.$vuetify.theme.dark.toString());
            },
}
```

버튼을 만들고 버튼 클릭 시 마다 <strong>this.$vuetify.theme.dark</strong>의 상태를 바꿔주고,  **localStorage에 'dark_theme'을 저장**



참고 :

* https://velog.io/@yijaee/%EB%8B%A4%ED%81%AC%EB%AA%A8%EB%93%9C-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
* https://marshall-ku.com/web/tips/%EC%9B%B9%EC%97%90%EC%84%9C-%EB%8B%A4%ED%81%AC-%EB%AA%A8%EB%93%9C-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
* https://hkamran.medium.com/using-local-storage-to-store-vuetifys-dark-theme-state-6158786449c
* https://developer.mozilla.org/ko/docs/Web/CSS/@media/prefers-color-scheme
* https://developer.mozilla.org/ko/docs/Web/API/Window/matchMedia

---



## 로딩 UI

```vue
<div class="loadingBox" v-if="loadingFlag">
    <v-img
           :src="require(`@/assets/images/Loading_cat.gif`)"
           class="loading"
           ></v-img>
</div>
```

먼저 loading하면 뜰 화면을 작성.

<strong>loadingFlag를 통해 로딩 될 때 해당 부분이 보이도록 한다.</strong>



```vue
if (this.isLoading && scrolledToBottom) {
                this.isLoading = true;
                this.loadingFlag = true;
                console.log('loading : ' + this.loadingFlag);
                setTimeout(this.append_list, 3000);
            }
```

true가 되는 지점은  scroll메서드에서 append_list가 발생하기 전!

loading화면을 확인하기 위해 setTimeout으로 append_list가 3초뒤에 발생하게 설정함.

```vue
append_list() {
            http.get(`/cats/${this.start}`)
                .then((response) => {
                    if (response.data.length >= 6) {
                        ...
                    } else {
                        ...
                    }
                    this.loadingFlag = false;
                })
                .catch(() => {
                    alert('정보를 받아오는데 실패!');
                });
        },
```

그리고 axios통신이 끝날 때 false로 되돌린다.



참고 : 

* https://developer.mozilla.org/ko/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout

* https://velog.io/@yejinh/Intersection-Observer%EB%A1%9C-Lazy-Image-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
* https://helloinyong.tistory.com/297
* https://www.codingfactory.net/11943

---



## 태그 추가

```vue
<v-row>
    <div
         v-for="(keyword, index) in writing"
         :key="index"
         class="keywordBox"
         @click="chooseKeyword(keyword)"
         >
        {{ keyword }}
        <div class="deleteBox" @click="deleteKeyword(index)">X</div>
    </div>
</v-row>
```

검색 버튼 클릭 시 this.keyword를 writing 배열에 넣고, 검색창 아래에 v-for로 writing 배열을 반복해 div를 추가한다.



```vue
deleteKeyword(index) {
            this.writing.splice(index, 1);
        },
```

삭제(x버튼)를 클릭 시 해당 idx를 가지고, splice를 통해 배열에서 값을 삭제함.



```vue
 bgName: [
          'warmFlame','nightFade', 'springWarmth', 'sunnyMoring', 'rainyAshville', 'frozenDreams', 'dustyGrass',~~
		]

randomBackground() {
            let randomIdx = Math.floor(Math.random() * this.bgName.length);
            console.log('randomIdx : ' + randomIdx);
            let color = this.bgName[randomIdx];
            console.log('randomIdx : ' + color);
            let keywordBox = document.querySelector('.keywordBox:nth-child(' + this.idx + ')');

            console.log(keywordBox);
            keywordBox.classList.add(color);
        },
```

색상 클래스명을 작성한 배열을 만들고 randomIdx로 랜덤변수를 만들어 keywordBox에 랜덤으로 클래스명을 추가한다.



참고:

* https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector
* https://developer.mozilla.org/ko/docs/Web/API/Element/classList



---

## 진행상황

<strong>v1.0</strong> : 고양이 목록을 스크롤 시 1초 후 계속 추가해나가 무한 스크롤 동작.

<strong>v1.1</strong> : 

- 고양이 카드를 클릭 시 vuex에 그 정보를 저장하고, modal창으로 정보를 출력함.
- modal창은 component로 구분하였고, props를 통해 dialog를 주고받음.
- modal창의 정보는 vuex를 이용하여 출력해보았음.

<strong>v1.2 :</strong>

* 처음에 dark클래스를 토글하는 방식으로 적용.
* 원하는 대로 잘 적용 되지 않음.
* vuetify에서 제공하는 darkMode를 적용함.

<strong>v1.3 : </strong>

* append_list()가 동작하기 전 후로 flag를 변경시켜 화면을 노출시키려고 함.
* loading화면을 보기위해 append_list를 3초뒤에 동작하게 setTimeout을 이용.
* console로 찍었을 때 flag는 변화하지만, 화면은 노출되지않음.
* flag를 false로 바꾸는 지점을 axios통신이 끝날 때로 변경.

<strong>v1.4 :</strong>

* 검색한 키워드(고양이 이름)를 받아 해당 이름의 고양이 카드 리스트를 받아옴.
* 기존의 cats배열을 빈 배열로 시키고, 받은 데이터를 다시 넣음.
* 검색 동안 로딩UI가 뜨게 변경
* 해당 이름검색을 LIKE를 이용해 keyword가 포함된 아이들 다 검색.
* 검색 후 키워드를 초기화시켜 placeholder가 보이게 하고, 스크롤이 내려가면 다음 목록이 출력되는 현상 막음.
* 참고 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

<strong>v1.5 : </strong>

* 검색한 키워드를 검색창 아래에 태그를 추가함.
* 5개까지 추가가 되며 5개가 넘어가면 처음 게 지워지고, 가장 맨뒤에 추가됨.
* 태그 클릭 시 검색창에 값이 입력되고, x클릭 시 사라짐.
* 이미 있는 태그를 검색 시 이미 존재하는 태그를 지우고, 가장 맨 뒤에 추가가됨.
* 추가 시 태그의 배경색을 랜덤으로 적용.

## Issue 및 Error
<strong>v1.0 무한스크롤 </strong>

* 처음 cats에 바로 받아온 data를 넣었더니, 스크롤 시 데이터들이 쌓이는게 아니라, 6개만 게속 보여줌.
즉, 처음에 0번째 ~ 5번째까지 데이터를 cats에 넣었다면, 스크롤 했을 때 6번째 ~ 11번째까지가 다시 cats에 들어가서 6번째 ~ 11번째 데이터만 보임.
그래서 cats에 바로 data를 넣지 않고, push를 이용하여 계속 데이터를 추가해나감.



* 다시켰을떄 서버와 Vue를 실행시키고 목록을 받는과정에서 Access Denied for User 'root'@'localhost' (using password: YES) 발생

```
git에 올리면서 application.properties에 'write your user name' 이부분을 ''를 안지우고 적어 발생.


만약 다른경우에 생긴다면 권한이 없다는 문제. or id나 pw를 잘못 입력한경우.
GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost' IDENTIFIED BY 'PASSWORD' WITH GRANT OPTION;
```



---

<strong>v1.1 상세정보 띄우기</strong>

```vue
모달창을 클릭하고 닫을 때 Vue warn발생.
[경고 내용]
Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders.

[원인]
하위 컴포넌트(CatsDetail.vue)에서 부모에서 받은 data를 직접 변경하려 해서 경고 발생.
CatsDetail.vue
closeDetail() {
    		this.detailDialog = false;
            this.$emit('closeDetail', this.detailDialog);
        },
         

[해결]
detailDialog를 하위에서 바꾸지않고, 그대로 detailDialog를 상위로 보내 상위 컴포넌트에서 처리.
CatsDetail.vue
closeDetail() {
    		this.detailDialog = false;
            this.$emit('closeDetail', this.detailDialog);
        },

Main.vue
closeDetail(detailDialog) {
            this.detailDialog = !detailDialog;
        },

```

추가로, watch에서 val뿐만 아니라 openDetail과 closeDetail까지 보고있어서 값을 바꾼 후 한번 더 바꾸는 걸 확인함.

그래서 watch에서 지켜보는걸 삭제하였음.



---

<strong>v1.2 다크모드</strong>

dark클래스를 추가했다가 제거하는 방식으로 토글하려고 했는데 전체 적용이 되긴하지만, 카드 내용이 적용되지않았음.

그래서 방법을 찾던 중 vuetify에서 제공하는 dark모드가 있는 것을 확인.

적용은 되었지만, 새로고침시 유지가 되지않음.

```vue
[해결]
처음에 localStorage에서 dark_theme의 변수 값을 확인하고, 그에 따라 dark모드를 적용.
만약 존재하지 않는다면, 시스템에서 다크모드가 활성화 되었는지 window.matchMedia('(prefers-color-scheme: dark)'를 통해 확인 후 dark모드 설정함. 
```



---

<strong>v1.3 로딩 UI</strong>

처음 setTimeout(this.append_list, 3000); 전후로 true, false를 뒀는데 <strong>loadingFlag의 값은 변하지만, 화면에는 뜨지는 않았다.</strong>

```
[원인]
setTimeout은 타이머가 만료된 뒤 함수나 지정된 코드를 실행하는 타이머를 설정한다.
그래서 loadingFlag를 true로 바꾸자마자 바로 false로 바꾸고, 3초뒤 append_list가 동작 한 것 같다.

[해결]
flase로 바꾸는 지점을 append_list에서 데이터를 push하고, 끝날 때로 변경해서 해결하였다.
```



### infinite scroll을 사용하면 자동 lazy image loading이 되는 것 아닐까?

처음에 검색하다보니 lazy loading에 대한게 많이보여서 찾아봤었다.

제목처럼 저런 의문이 들었고,

https://velog.io/@yejinh/Intersection-Observer%EB%A1%9C-Lazy-Image-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0의 예를 통한 설명을 보고 
다르다는 것을 알았다.

```
예를 들어 스크롤 이벤트를 통해 한번에 50개씩 데이터를 받는다고 할 때, 
50개씩 데이터 요청 하는 것이 infinite scroll로, 응답된 50개의 이미지를 바로 그리지 않고 
화면 상에 보여질 차례가 되었을 때 그리는 것이 lazy image loading 인 것이다.
```

검색 기능 구현이 끝나면 lazy loading의 구현과 공부해보자.



---

<strong>v1.4 검색</strong>

```
org.apache.ibatis.executor.ExecutorException: A query was run and no Result Maps were found for the Mapped Statement 'com.ssafy.cats.model.dao.CatsDAO.searchCats'.  It's likely that neither a Result Type nor a Result Map was specified.

[해결] mybatis에서 resultType을 명시하지않아 발생.
```



sql문 xml을 사용할 때

```
select * from cat where cat_name LIKE ...
```

LIKE뒤에 #{cat_name}을 어떻게 써야할지 몰랐었음.

'%#{cat_name}%'을 하면 #{cat_name}자체 글자가 있는지 없는지 검색하게 됨.

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat를 참고.

```
[해결]
concat을 이용.
concat은 메서드를 호출한 배열 뒤에 각 인수를 순서대로 붙여 새로운 배열을 만듭니다
인수가 배열이면 그 구성요소가 순서대로 붙고, 배열이 아니면 인수 자체가 붙습니다.

select * from cat where cat_name LIKE CONCAT("%", #{cat_name}, "%");
```



검색 후 스크롤이 내려가면 다음 목록을 가져오는 현상이 발생.

```
[해결]
검색이 끝나는 지점에서 isLoading의 상태를 false로 두어 더 검색되지 않게 함.
추가로 검색창에 값이 남아있어 초기화도 시켜둠.
```



---

<strong>v1.5 검색어 태그</strong>

태그가 5개일 때 값 중복체크 시 제대로 삭제되지않고 추가되지않음.

```vue
[해결]
same flag를 두어 만약 중복값을 찾으면 same을 true로 변경.
same이 true면 중복값을 이미 찾아서 지우고 추가하는 작업을 했다는 뜻.
false면 겹치는게 없어 처음 값을 지우고 새로운 값을 추가하는 작업을 동작함.

else if (this.writing.length == 5) {
                let same = false;
                for (i = 0; i < this.writing.length; i++) {
                    if (this.keyword == this.writing[i]) {
                        this.writing.splice(i, 1);
                        this.writing.push(this.keyword);
                        same = true;
                        break;
                    } // if
                } // for
                if (same == false) {
                    this.writing.splice(0, 1);
                    this.writing.push(this.keyword);
                } // if
            } //else if
```



로딩화면을 보기위해 searching에 setTimeout을 걸어놔서 랜덤으로 배경을 추가할 때 class를 못찾는 에러가 발생.

아마도 searching이 발생하고, 배열에 값이 들어간 후 tag가 만들어지는데 이거를 로딩화면 보겠다고 3초뒤에 실행하게 해서

randomBackground가 먼저 실행되어 그런 거 같다.

randomBackground에도 setTimeout을 주어 정상작동. 하지만 수정이 필요할 거 같다.

```
 setTimeout(this.searching, 3000);
 setTimeout(this.randomBackground, 3100);
```



클래스명이 keywordBox인 친구를 찾아서 random으로 배경을 적용.

배경은 css에 미리 만들어 vue파일에서는 클래스명이 적힌 배열을 만들어, 배열명을 랜덤으로 뽑아서 클래스명으로 추가하는 방식.

끊임없이 클래스명이 추가가되버림.

```vue
randomBackground() {
            let keywordBox = document.querySelector('.keywordBox:nth-child(' + this.idx + ')');
            keywordBox.className = 'keywordBox';

            let randomIdx = Math.floor(Math.random() * this.bgName.length);
            console.log('randomIdx : ' + randomIdx);
            let color = this.bgName[randomIdx];
            console.log('randomIdx : ' + color);

            console.log(keywordBox);
            keywordBox.classList.add(color);
        },
        
[해결중]
클래스명을 추가하기전 className = 'keywordBox'로 하나로 초기화한다음 추가시킴. (원하는대로 동작이 안되 수정 필요해보임)
```

