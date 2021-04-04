// function scrolling() {
//     append_list();
//     window.scroll(function () {
//         var dh = document.height();
//         var wh = window.height();
//         var wt = window.scrollTop();
//         if (dh == (wh + wt)) {
//             append_list();
//         }
//     })
// }
// function append_list() {
//     http.get(`/cats/${this.start}`).then(({data})=>{
//         this.cats = data;
//         this.start += this.list;
//         console.log("cats : "+ this.cats);
//       }).catch(()=>{
//         alert('정보를 받아오는데 실패!');
//       })
// }
// export default scrolling;