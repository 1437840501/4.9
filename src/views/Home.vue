<template>
  <div class="home">
     <el-table
      :data="gj"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="学号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
      prop="cls"
      label="性别"
      width="180">
      </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="120">
 		<template slot-scope="scope">
        <el-button @click="Delete(scope.row)" type="text"size="small">
          移除
        </el-button>
      </template>


 </el-table-column>
    </el-table>

  </div>



</template>



 <script>
import HelloWorld from '@/components/HelloWorld.vue'
    export default {
    name:'home',
    components:{
    HelloWorld
    },
      data() {
        return {
          gj:[]
        }
      },
      watch:{
      '$route':function(){
      this.hehe()
      }
      },
      created(){
      this.hehe()
      },
      methods:{
      hehe(){
      this.$http.post('http://localhost:3000',
      {state:this.$route.params.id},
      {emulateJSON:true}).then(e=>this.gj=e.body)
      },
      Delete(row){
			console.log(row)
			   this.$http.post('http://localhost:3000/sc',{id:row.id},{emulateJSON:true}).then(e=>row.id=e.body)
		    var _index =this.gj.indexOf(row)
		    this.gj.splice(_index,1)
			}
      }
     
    }
  </script>
