<template>
  <div>
    <m-form
      ref="formRef"
      :options="options"
      @on-preview="handlePreview"
      @on-remove="handleRemove"
      @before-remove="beforeRemove"
      @on-exceed="handleExceed"
      @on-change="handleChange"
      @before-upload="handleBeforeUpload"
      @on-success="handleSuccess"
    >
      <template #uploadArea>
        <el-button type="primary">Click to upload</el-button>
      </template>
      <template #uploadTip>
        <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
      </template>
      <!-- 操作 -->
      <template #action="scope">
        <el-button type="primary" @click="onSubmit(scope)">Create</el-button>
        <el-button @click="onReset(scope)">Cancel</el-button>
      </template>
    </m-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FormOptions } from '../../components/form/src/types/types';
import { ElMessage, ElMessageBox } from 'element-plus'
import type { ElForm } from 'element-plus';
type FormInstance = InstanceType<typeof ElForm>;

interface Scope {
  form: FormInstance,
  model: any
}
let options: FormOptions[] = [
  {
    type: 'input', value: '', prop: 'username', label: '用户名', rules: [
      { required: true, message: '用户名不能为空', trigger: 'blur' },
      { min: 2, max: 6, message: '用户名为2-6位' }
    ], attrs: { clearable: true }
  },
  {
    type: 'input', prop: 'password', value: '', label: '密码', rules: [
      { required: true, message: '密码不能为空', trigger: 'blur' },
      { min: 6, max: 15, message: '密码为6-15位' }
    ], attrs: { showPassWord: true, clearable: true }
  },
  {
    type: 'select', label: '职位',
    attrs: {
      style: {
        width: '100%'
      },
    },
    prop: 'role', value: '', placeholder: '请选择职位', rules: [
      { required: true, message: '职位不能为空', trigger: 'blur' },
    ],
    children: [
      { type: 'option', label: '经理', value: '1' },
      { type: 'option', label: '主管', value: '2' },
      { type: 'option', label: '员工', value: '3' }
    ]
  },
  {
    type: 'checkbox-group', label: '爱好',
    prop: 'like', value: [], placeholder: '请选择爱好', rules: [
      { required: true, message: '爱好不能为空', trigger: 'blur' },
    ],
    children: [
      { type: 'checkbox', text: '足球', label: '1' },
      { type: 'checkbox', text: '篮球', label: '2' },
      { type: 'checkbox', text: '跳', label: '3' }
    ]
  },
  {
    type: 'radio-group', label: '性别',
    prop: 'gender', value: '',
    children: [
      { type: 'radio', label: '男', value: 'male' },
      { type: 'radio', label: '女', value: 'female' },
    ]
  },
  {
    type: 'upload', label: '附件', prop: 'pic',
    uploadAttrs: {
      action: "https://jsonplaceholder.typicode.com/posts/",
      multiple: true,
      limit: 2
    },
    // rules: [
    //   { required: true, message: '附件不能为空', trigger: 'blur' },
    // ],
  },
  {
    type: 'editor',
    value: '123',
    prop: 'desc',
    label: '描述',
    placeholder: '请输入描述',
    rules: [
      { required: true, message: '描述不能为空', trigger: 'blur' },
    ]
  }

]
let formRef = ref<any>(null)

const handleRemove = (val: any) => {
  console.log('handleRemove', val.file, val.fileList)
}
const handlePreview = (file: any) => {
  console.log('handlePreview', file)
}
const handleExceed = (val: any) => {
  console.log('handleExceed');
  ElMessage.warning(
    `The limit is 3, you selected ${val.files.length} files this time, add up to ${val.files.length + val.fileList.length
    } totally`
  )
}
const beforeRemove = (val: any) => {
  console.log('beforeRemove');
  return ElMessageBox.confirm(`Cancel the transfert of ${val.file.name} ?`).then(
    () => true,
    () => false
  )
}
const handleBeforeUpload = (val: any) => {
  console.log('handleBeforeUpload', val);
}
const handleChange = (val: any) => {
  console.log('handleChange', val);
}
const handleSuccess = (val: any) => {
  console.log('handleSuccess', val);

}
// 提交
const onSubmit = (data: Scope) => {
  data.form.validate((valid, fields) => {
    if (valid) {
      console.log('submit!', data.model)
    } else {
      console.log('error submit!', fields)
    }
  })
}
// 提交
const onReset = (data: Scope) => {
  console.log('onReset', data);
  // data.form.resetFields()
  // 调用封装form的重置方法
  formRef.value.resetFields()
}
</script>

<style scoped>
</style>