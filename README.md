## parcel-demo

### 初始化package.json
```
yarn init -y
```

### 下载parcel
```
yarn add parcel-bundler -D
```

### 生产模式打包

```
// 打包到dist文件夹
parcel build src/view/index.html
// 打包到指定文件夹(build)
parcel build src/view/index.html --out-dir build
parcel build src/view/index.html -d build
```


