<template>
    <div style="padding:4px">
        <el-form :inline="true" :model="searchMap" class="demo-form-inline">
            <el-form-item label="活动名称">
                <el-input v-model="searchMap.name" placeholder="活动名称"></el-input>
            </el-form-item>
            <el-form-item label="活动时间">
                <el-date-picker v-model="searchMap.starttime" type="date" placeholder="选择开始日期"></el-date-picker>
                <el-date-picker v-model="searchMap.endtime" type="date" placeholder="选择结束日期"></el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="fetchData">查询</el-button>
                <el-button type="primary" @click="handleEdit('')">新增</el-button>
            </el-form-item>
        </el-form>
        <!-- tableData表格中的数据 -->
        <el-table :data="tableData" border style="width: 100%">
            <!-- el-table-column 表格中的一列
                label: 表头 列名
                prop: 引用:data中的对象的属性
            -->
            <el-table-column prop="id" label="活动ID"></el-table-column>
            <el-table-column prop="name" label="活动名称"></el-table-column>
            <el-table-column prop="sponsor" label="主办方"></el-table-column>
            <el-table-column prop="address" label="活动地址"></el-table-column>
            <el-table-column prop="starttime" label="开始时间"></el-table-column>
            <el-table-column prop="endtime" label="结束时间"></el-table-column>
            <!-- fixed固定 -->
            <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
                    <el-button @click="handleEdit(scope.row.id)" type="text" size="small">修改</el-button>
                    <el-button @click="handleDelete(scope.row.id)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页组件
        size-change: 页面大小改变时触发
        current-change: 页码变化时触发
        current-page: 当前页
        page-sizes: 设置每页显示多少条记录
        page-size: 当前每页显示的大小
        total: 总记录数
         -->
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="size"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>

        <!-- 活动编辑弹出窗口
            :visible.sync: 窗口是否可见（弹出）, dialogFormVisible的值，如果为true，则窗口弹出，false, 关闭窗口
         -->
        <el-dialog title="活动编辑" :visible.sync="dialogFormVisible">
            <el-form :model="pojo" label-width="80px">
                <el-form-item label="活动名称">
                    <el-input v-model="pojo.name" placeholder="请输入活动名称"></el-input>
                </el-form-item>
                <el-form-item label="活动地点">
                    <el-input v-model="pojo.address"></el-input>
                </el-form-item>
                <el-form-item label="开始日期">
                    <el-date-picker v-model="pojo.starttime" type="date"></el-date-picker>
                </el-form-item>
                <el-form-item label="结束日期">
                    <el-date-picker v-model="pojo.endtime" type="date"></el-date-picker>
                </el-form-item>
                <el-form-item label="报名截止">
                    <el-date-picker v-model="pojo.enrolltime" type="date"></el-date-picker>
                </el-form-item>
                <el-form-item label="活动详情">
                    <el-input v-model="pojo.detail" type="textarea" :rows="2"></el-input>
                </el-form-item>
                <el-form-item label="是否可见">
                    <el-switch active-value="1" inactive-value="0"
                        v-model="pojo.state"
                        active-text="可见"
                        inactive-text="不可见">
                    </el-switch>
                </el-form-item>
                <el-form-item label="城市">
                    <el-select v-model="pojo.city" placeholder="请选择">
                        <el-option
                            v-for="item in cityList"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleSave">保 存</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
import gatheringApi from '@/api/gathering'
import cityApi from '@/api/city'
export default {
    data() { // 替换data:{}
        return {
            size: 10, // 每页显示记录数
            page: 1, // 页码
            total: 0, // 总记录数
            searchMap: {}, // 查询的条件实体
            pojo: {}, // 添加的活动实体
            dialogFormVisible: false,// 控制窗口的是否弹出
            id:'', // 是修改还是新增的标志
            cityList: [], // 城市列表
            tableData: []
        }
    },
    created(){
        // 页面加载后调用的方法
        this.fetchData();
        // 加载城市列表的数据
        cityApi.getList().then(res => {
            this.cityList = res.data
        })
    },
    methods: {
        fetchData(){
            //alert(123);
            // 发送请求获取数据
            //gatheringApi.getList().then(res => {
                //alert(JSON.stringify(res.data));
                // 数据绑定
                //this.tableData = res.data;
            //})

            // 分页查询
            gatheringApi.search(this.page, this.size, this.searchMap).then(res=>{
                // res.data 分页结果
                // 总记录数
                this.total = res.data.total;
                this.tableData = res.data.rows;
            })
        },
        handleSizeChange(val) {
            //console.log(`每页 ${val} 条`);
            // 重新加载第1页数据
            this.page=1;
            this.size = val;
            this.fetchData()
        },
        handleCurrentChange(val) {
            //console.log(`当前页: ${val}`);
            this.page=val;
            this.fetchData();
        },
        handleSave(){
            if(this.id){
                // this.id有值，不为null, undefined, ''
                // 有值，就代表着修改
                gatheringApi.update(this.id, this.pojo).then(res => {
                    //提示
                    this.$message({
                        showClose: true,
                        message: res.message,
                        type: res.flag?'success':'error'
                    });
                    if(res.flag){
                        // 成功, 关闭窗口
                        this.dialogFormVisible = false;
                        // 刷新列表
                        this.fetchData()
                    }
                })
            }else{
                // 新增
                gatheringApi.add(this.pojo).then(res => {
                    //提示
                    this.$message({
                        showClose: true,
                        message: res.message,
                        type: res.flag?'success':'error'
                    });
                    if(res.flag){
                        // 成功, 关闭窗口
                        this.dialogFormVisible = false;
                        // 刷新列表
                        this.fetchData()
                    }
                })
            }

        },
        //修改
        handleEdit(_id){
            this.id = _id;
            //alert(id)
            // row代表着整行数据
            //alert(JSON.stringify(row))
            // 清空表单
            this.pojo={}
            //弹出窗口
            this.dialogFormVisible=true;
            if(this.id){
                // 数据回显
                gatheringApi.findById(this.id).then(res => {
                    this.pojo = res.data
                })
            }
        },
        // 删除
        handleDelete(_id){
            this.$confirm('此操作将【永久删除】该记录, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                // 调用api删除
                gatheringApi.deleteById(_id).then(res => {
                    this.$message({
                        message: res.message,
                        type: res.flag?'success':'error'
                    })
                    if(res.flag){
                        this.fetchData();
                    }
                })
            }).catch(() => {
            });
        }
    }
}
</script>