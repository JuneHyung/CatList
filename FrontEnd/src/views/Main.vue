<template>
  <v-container>
    <div id="infinite">
      <div>
        <div>
          <p>이미지영역</p>
          <v-row>
            <v-card v-for="(cat, idx) in cats" :key=idx class="col-4">
              <div style="width:100%; height:80%;">
                <v-img :src="require(`@/assets/images/cats/${cat.profile}`)" aspect-ratio="1" style="width:100%; height:100%; margin:0 auto;"/>
              </div>
              <p>{{cat.cat_name}}</p>
              <p>{{cat.kind}}</p>
              <p>{{cat.description}}</p>
            </v-card>
          </v-row>
          <v-row class="more">

          </v-row>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>

import http from '@/util/http-common';
// import {scrolling} from '../api/scrolling';
export default {
  
 data(){
   return{
  cats:[
    
  ],
    start:0,
    limit:6,
    isLoading:true,
   }
 },

created(){
  this.append_list();
  window.addEventListener('scroll', this.scroll);
},
destroyed() {
  window.removeEventListener('scroll', this.scroll);
},
mounted(){
  this.isLoading = false;
},
methods:{
  scroll(){
    let scrolledToBottom =
      document.documentElement.scrollTop + window.innerHeight ===
      document.documentElement.offsetHeight;
      console.log(this.isLoading);

      if(this.isLoading&&scrolledToBottom){
        this.isLoading = true;
        setTimeout(this.append_list, 1000);
      }
  },
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
  
  }
</script>

<style>
 
</style>