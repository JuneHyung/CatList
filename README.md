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



## 로직

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

<strong>★ Issue ★</strong>

처음 cats에 바로 받아온 data를 넣었더니, 스크롤 시 데이터들이 쌓이는게 아니라, 6개만 게속 보여줌.

즉, 처음에 0번째 ~ 5번째까지 데이터를 cats에 넣었다면, 스크롤 했을 때 6번째 ~ 11번째까지가 다시 cats에 들어가서 6번째 ~ 11번째 데이터만 보임.

그래서 cats에 바로 data를 넣지 않고, push를 이용하여 계속 데이터를 추가해나감.

---



## 추가할 사항

* 카드를 클릭 시 카드의 detail 내용을 dialog로 보여줄 예정.(진행중)

* 데이터 불러 올 때 Loading UI구현

* 검색 기능 추가.





## 진행상황

<strong>v1.0</strong> : 고양이 목록을 스크롤 시 1초 후 계속 추가해나가 무한 스크롤 동작.

## Error
* 다시켰을떄 서버와 Vue를 실행시키고 목록을 받는과정에서 Access Denied for User 'root'@'localhost' (using password: YES) 발생
