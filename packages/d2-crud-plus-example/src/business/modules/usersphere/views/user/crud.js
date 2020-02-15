import { mobileValidator } from 'el-phone-number-input'
export const crudOptions = {
  columns: [
    {
      title: 'id',
      key: 'id',
      // type: 'select',
      // dict: { url: ''} //数据字典
      // search: { disabled: true}, // 开启查询
      form: { disabled: true }, // 表单配置
      // disabled: false, // 是否隐藏列
      sortable: true
    },
    {
      title: '创建时间',
      key: 'createTime',
      type: 'datetime',
      // dict: { url: ''} //数据字典
      // search: { disabled: true}, // 开启查询
      form: { disabled: true }, // 表单配置
      // disabled: false, // 是否隐藏列
      sortable: true
    },
    {
      title: '修改时间',
      key: 'updateTime',
      type: 'datetime',
      // dict: { url: ''} //数据字典
      // search: { disabled: true}, // 开启查询
      form: { disabled: true }, // 表单配置
      // disabled: false, // 是否隐藏列
      sortable: true
    },
    {
      title: '用户名',
      key: 'username',
      // type: 'select',
      // dict: { url: ''} //数据字典
      // search: { disabled: true}, // 开启查询
      // form: { disabled: true }, // 表单配置
      // disabled: false, // 是否隐藏列
      sortable: true
    },
    {
      title: '密码',
      key: 'password',
      // type: 'select',
      // dict: { url: ''} //数据字典
      // search: { disabled: true}, // 开启查询
      // form: { disabled: true }, // 表单配置
      disabled: true, // 是否隐藏列
      sortable: true
    },
    {
      title: '昵称',
      key: 'nickname',
      // type: 'select',
      // dict: { url: ''} //数据字典
      // search: { disabled: true}, // 开启查询
      // form: { disabled: true }, // 表单配置
      // disabled: false, // 是否隐藏列
      sortable: true
    },
    {
      title: '手机号',
      key: 'mobileValue',
      type: 'phoneNumber',
      form: {
        rules: [{ required: true, message: '请输入手机号' }, { validator: mobileValidator, message: '手机号不正确' }]
      },
      valueBuilder (row) { // 将row里面手机号相关的字段组合成组件需要的value对象
        row.mobileValue = { phoneNumber: row.mobile, callingCode: row.callingCode }
      },
      valueResolve (row) { // 将value解析成row的字段
        if (row.mobileValue != null) {
          row.mobile = row.mobileValue.phoneNumber
          row.callingCode = row.mobileValue.callingCode
        }
      },
      // dict: { url: ''} //数据字典
      // search: { disabled: true}, // 开启查询
      // form: { disabled: true }, // 表单配置
      // disabled: false, // 是否隐藏列
      sortable: true
    },
    {
      title: '头像',
      key: 'avatar',
      type: 'avatar-uploader',
      // dict: { url: ''} //数据字典
      // search: { disabled: true}, // 开启查询
      // form: { disabled: true }, // 表单配置
      // disabled: false, // 是否隐藏列
      sortable: true
    },
    {
      title: '性别',
      key: 'gender',
      type: 'select',
      dict: { data: [
        { value: 1, label: '男' }, { value: 2, label: '女' }
      ] }, // 数据字典
      // search: { disabled: true}, // 开启查询
      // form: { disabled: true }, // 表单配置
      // disabled: false, // 是否隐藏列
      sortable: true
    },
    {
      title: '邮箱',
      key: 'email',
      // type: 'select',
      // dict: { url: ''} //数据字典
      // search: { disabled: true}, // 开启查询
      // disabled: false, // 是否隐藏列
      form: { // 表单配置
        // disabled: true, // 禁用表单编辑
        rules: [{ required: false, message: '请输入邮箱' }, { type: 'email', message: '请输入正确的邮箱' }]
      },
      sortable: true
    }
  ]
}
