
## Nội dung project component

React.js là gì?
- Cài đặt React.js
- React.js render HTML
- React.js JSX
- React.js Component
- React.js props
- React.js props xử lý data
-

---

## React.js là gì ?

React.js là một thư viện Javascript để xây dựng giao diện người
dùng, được phát triển ban đầu từ Facebook và đóng góp bởi
cộng đồng lập trình viên trên thế giới.
- React.js có thể sử dụng để viết phần nền cho single-page hoặc
ứng dụng di động, giúp trang lấy và xử lý dữ liệu được tối ưu
hơn các phương pháp khác.
- React.js thích hợp với các ứng dụng lớn, khả năng mở rộng ở
tương lai.
- Điểm mạnh của React.js dễ thấy nhất có lẽ là phần Component:
- 
  - React.js chia nhỏ các phần của trang thành từng phần riêng biệt để xử
lý, gọi là component giúp dễ quản lý, dễ sử dụng ở nhiều nơi
  - Mỗi khi dữ liệu được cập nhật mới, thay vì thay đổi nguyên trang, thì
React.js sẽ giúp thay đổi chỉ component liên quan,
việc này sẽ tối ưu
rất nhiều thời gian làm mới dữ liệu.
  - Hầu hết các component thường dùng đã được phát triển và chia sẻ,
chỉ cần cài đặt và sử dụng.

---

## Cài đặt React.js

- 
Cài đặt trực tiếp React.js từ tag <script>
<div id="root"></div>, React sẽ load nội dung
tới id này.
react.development.js và react-dom.development.js,
là 2 file thư viện của React.
babel.min.js, cần thiết cho cấu trúc JSX (Javascript
XML - viết cấu trúc XML trong Javascript, như trên là
cấu trúc <h1>Hello, world!</h1>), nếu bạn viết React
mà không dùng cấu trúc JSX thì không cần
thêm <script> này
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>


```html
index.html 1 X
index.html >@html>•body
<!DOCTYPE html>
<htm]>
<head>
<meta charset="UTF-8" />
‹title>Hello React</title>
‹script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"x/script>
‹script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js">/script>
‹script src="https://unpkg.com/@babel/standalone/babel.min.js">/script>
</head>
<body>
<div id="root"x/div›
‹script type="text/babel"›
ReactDOM. render(
<h1>Hello, React!</h1>,
document.getElementById('root')
);
</script>
</body>
</htm]>
```

---

## Cài đặt React.js

- 
Cài đặt React.js bằng lệnh
  - Để cài đặt một project React hoàn chỉnh (liên kết file, sử dụng
component riêng biệt, tạo thư viện tùy ý, ...) ta thực hiện các
bước sau:
- Bước 1 - Cài đặt môi trường Node.js
- Bước 2 - Cài đặt bộ cài app React
- Bước 3 - Tạo project React.js
- Bước 4 - Thực thi lệnh chạy

---

## Cài đặt React.js

- 
Cài đặt React.js bằng lệnh
  - Bước 1 - Cài đặt môi trường Node.js: Xem lại bài cài đặt chi tiết
Node.js.
  - Bước 2: Cài đặt React, vào command prompt hoặc Terminal của
VSCode gõ:
npm install -g create-react-app
Vào thư mục cần tạo project: gõ
cmd -> rồi gõ lệnh sau: createreact-app react-project01
Sau khi khởi tạo project thành
công, ta gõ: cd react-project01 ->
rồi gõ npm start để khởi động
project.


```bash
PROBLEMS|
OUTPUT DEBUG CONSOLE TERMINAL SI
PORTS SOL CONSOLE
npm audit fix --force
Run "npm audit" for details.
Created git commit.
uccess! Created react-project01 at E: \Nam2025\CongNghePhanMemMoi \project_Fulltask|reactjs-slide|react-project01
Inside that directory, you can run several commands:
npm start
starts the development server.
npm run build
Bundles the app into static files for production.
npm test
Starts the test runner.
npm run eject
Removes this tool and copies build dependencies, configuration files
and scripts into the app directory. If you do this, you can't go back!
We suggest that you begin by typing:
cd react-project01
npm start
Happy hacking!
O PS E: \Nam2025\CongNghePhanMemMoi \project_Fulltask\reactjs-slide>|
```

---

## Cài đặt React.js

node_modules: chứa nội
dung cài đặt, tất cả cài đặt
sẽ được lưu tại đây, chúng
ta không thao tác trong thư
mục này.
public: chứa tất cả file
output, là các file sẽ tương
tác trực tiếp với trình duyệt
như: HTML, image, ...
src: chứa tất cả các file
input, đây là các file mà
chúng ta sẽ code nội dung,
thao tác phần lớn ở những
file này, gồm các file
Javascript, CSS,...
.gitignore: file này quy
định những file/folder nào LT
không cần đẩy lên remote
server (Github/Gitlab…)


```javascript
react-project01
› Io node_modules
public
favicon.ico
index.html
* logo192.png
*i logo512.png
{} manifest.json
robots.txt
v Ea src
App.css
JS App.js
, App.test.js
index.css
JS index.js
6a logo.svg
JS reportWebVitals.js
JS setupTests.js
•gitignore
package-lock.json
package.json
M* README.md
```


```json
w package.json X
"name": "react-project01",
"version": "0.1.0",
"private": true,
"dependencies": {
"@testing-library/jest-dom": "^5.17.0",
"@testing-library/react": "^13.4.0",
"@testing-library/user-event": "^13.5.0",
"react": "^18.3.1"
"react-dom": "^18.3.1",
"react-scripts": "5.0.1",
"web-vitals": "^2.1.4"
},
D Debug
"scripts": {
"start": "react-scripts start"
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"
"eslintconfig": {
"extends": [
"react-app",
"react-app/jest"
"browserslist": {
"production": [
">0.2%",
"not dead",
"not op mini all"
"development": [
"last 1 chrome version",
"last 1 firefox version"
"last 1 safari version"
```
###project component

## Nội dung

Nội dung chuẩn bị:
  - Cài đặt để chạy được project React.js, xem lại phần cài đặt
  - Template mẫu, tải tại đây
- Ta sẽ thực hiện các bước sau:
  - Đưa template mẫu vào project React.
  - Phân tích các component trong template mẫu.
  - Tách template mẫu ra thành từng component.
  - Kết nối các component lại với nhau.
-

---

## Đưa template mẫu vào project React

- 
Sau khi cài đặt xong React ta sẽ có project react-project01 với cấu trúc thư
mục như sau
❑ Trong template mẫu, có 2 file chính,
là index.html và /css/style.css, nhiệm vụ của ta là
làm sao cho nội dung của template mẫu này hiển
thị thông qua project React.
❑ Để làm được việc đó, ta lần lượt thực hiện như
sau:
❑ Copy nội dung code bên trong style.css của
template
thay
thế
code
bên
trong /src/App.css.
❑ Copy nội dung phần <div id="layout"> của
template thay thế cho nội dung bên trong
phần return của /src/App.js.


```javascript
V
react-project01
lig node_modules
vF public
favicon.ico
index.html
logo192.png
si logo512.png
1) manifest.json
robots.txt
VE src
App.css
JS App.js
fs App.test.js
E index.css
JS index.js
så logo.svg
JS reportWebVitals.js
JS setupTests.Js
gitignore
package-lock.json
apw package.json
M+ README.md
```

---

## Đưa template mẫu vào project React


```javascript
App.css M X
/* Reset lại một vài thuộc tính */
margin: 0;
padding: 0;
ol, ul { list-style: none; }
img { border: none; vertical-align: top; }
฿
/* Nội dung layout */
#layout i
margin: 20px auto;
width: 1024px;
header, footer, #content, aside, .box-list li {
font-size: 30px;
text-align: center;
header1
background-color: L#92dfc8;
height: 80px;
line-height: 80px;
main {
display: flex;
flex-wrap: wrap;
#content {
background-color: •#caeff2;
height: 400px;
line-height: 400px;
width: 774px;
```


```javascript
aside {
background-color:
height: 400px;
line-height: 400px;
width: 250px;
#f2d8ca;
•box-list {
display: flex;
margin-top: 10px;
•box-list li {
background-color:
height: 150px;
line-height: 150px;
text-align: center;
margin-right: 10px;
margin-bottom: 10px;
width: 248.5px;
•#f2f1ca;
.box-list li:last-child {
margin-right: 0;
footer {
background-color: •#eecbf3;
height: 80px;
line-height: 80px;
```

---

## Đưa template mẫu vào project React


```html
import React from 'react';
import './App.css';
•
function App() {
return (
<div id="layout">
•OVO
<header>HEADER</header>
<main>
‹section id="content">
<h1>Big Title</h1>
<ul className="item-list">
<li>
<h2>Title 01</h2>
<div>
Học React.js
</div>
</li>
<li>
<h2>Title 02</h2>
<div>
Học Fullstack.
</div>
</li>
‹li>
<h2>Title 03</h2>
<div>
Học Next.js.
</div>
</li>
</ul>
</section›
‹aside>
ASIDE
</aside>
```


```javascript
41%
(k
<ul className="box-list">
<li>Box 1</li>
<li>Box 2</li>
<li>Box 3</li>
<li>Box 4</li>
</ul>
</main>
<footer>FOOTER</footer>
</div>
) ;
export default App;
```

---

## Đưa template mẫu vào project React

❑ Chỉ cần thay thế 2 file như trên thôi, là ta đã đưa nội dung của template mẫu
vào project React thành công.
❑ Để chạy project, ta dùng lệnh npm start sẽ thấy được kết quả sau


```javascript
Big Title
Title 01
Học React.js
Title 02
Học FullStack.
Title 03
Học Next.js.
Box 1
HEADER
Box 2
Box 3
FOOTER
ASIDE
Box 4
```

---

## Phân tích component

❑ Theo đó ta lần lượt có các component như sau:
❑ Header: là component chứa nội dung của phần header.
❑ Headline: là component chứa nội dung của "Big Title".
❑ ItemList: là component chứa nội dung của nhóm "Title
01" cho tới
"Title 03".
❑ Aside: là component chứa nội dung của phần sidebar.
❑ BoxList: là component chứa nội dung danh sách "BOX".
❑ Footer: là component chứa nội dung của phần footer.


```javascript
Big Title
Title 01
Học React.js
Title 02
Học FullStack.
Title 03
Học Next.js.
Box 1
HEADER
Box 2
Box 3
FOOTER
ASIDE
Box 4
```

---

## Tách template mẫu ra thành từng component.

Để tiện quản lý về sau, ta sẽ tiến hành tách nội dung của
file /src/App.js ra từng component tương ứng.
- Trước tiên ta sẽ tạo folder components đặt bên trong thư
mục /src/, tạo các file Javascript với tên tương ứng với từng
component, và nội dung là nội dung được tách từ
file /src/App.js, ta có cấu trúc thư mục như sau:
- 


```javascript
import React from 'react';
const Header = () => {
return (
<header>HEADER</header>
)
export default Header;
```


```javascript
JS Headline.js U •
import React from 'react'
const Headline = () => {
return (
<h1>Big Title</h1>
export default Headline;
```


```javascript
import React from 'react';
const Aside = () => {
return (
<aside>
ASIDE
</aside>
export default Aside;|
```

---

## Tách template mẫu ra thành từng component.


```html
import React from 'react';
const Itemlist = () => {
return (
<ul className="item-list">
‹li>
<h2>Title 01</h2>
<div>
Học React.js
</div>
</li>
<li>
<h2>Title 02</h2>
<div>
Học Fullstack.
</div>
</11>
<li>
<h2>Title 03</h2>
<div>
Học Next.JS.
</div>
</li>
</ul>
)
export default Itemlist;
```


```javascript
import React from 'react';
const Boxlist
= () => {
return(
<ul className="box-list">
<li>Box 1</li>
<li>Box 2</li>
<li>Box 3</li>
<li>Box 4</li>
</u1$l
)
}
export default BoxList;
```


```javascript
import React from 'react';
const Footer = () => {
return (
<footer>FOOTEr</footer>
)
export default Footer;
```

---

## Kết nối các component lại với nhau


```html
1} import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Headline from './components/Headline';
import ItemList from './components/ItemList';
import Aside from './components/Aside';
import BoxList from './components/BoxList';
import Footer from
./components/Footer';
27%
class App extends Component {
render () {
return (
<div id="layout"›
<Header />
<main›
‹section id="content"›
<Headline />
<ItemList />
</section›
<Aside />
<BoxList />
</main>
<Footer />
</div>
);
export default App;
```


```javascript
Big Title
Title 01
Học React.js
Title 02
Học FullStack.
Title 03
Học Next.js.
Box 1
HEADER
Box 2
Box 3
FOOTER
ASIDE
Box 4
```

---

## Tạo data cần cho các component

❑ Ta đặt tên dữ liệu là blog, các dữ
liệu
thay
đổi
sẽ
là bigTitle, itemList và boxList củ
a các component tương ứng,
đồng thời ta thay đổi một số dữ
liệu so với file template mẫu, để
cho dễ biết dữ liệu đã được
hiển thị.


```javascript
//tạo data cho components
const blog = 1
bigtitle: "Hướng dẫn học React.js.',
itemList:[
title: "Giới thiệu',
info: 'React.js là gì.'
},
title: 'Component của React.js'
info: "Thành phần quan trọng của React. js là component.'
title: 'Props and state',
info: "Quản lý trạng thái và lấy dữ liệu.'
1,
boxlist:
"Vũ Toàn Thắng'
'React.js'
'NodeJs'
'Express.js'
```

---

## Tạo data cần cho các component


```html
• render
1} import React, { Component } from 'react';
import './App.css';
import Header from
'./components/Header';
import Headline from './components/Headline';
import Itemlist from
'/components/ItemList';
import Aside from './components/Aside';
import BoxList from './components/BoxList';
import Footer from './components/Footer';
₴
3
class App extends Component {
render() {
return (
<div id="layout">
<Header />
<main›
‹section id="content"›
<Headline bigTitle={blog.bigTitle} />
<Itemlist />
</ section›
<Aside />
<BoxList />
</main>
<Footer />
</div>
) ;
};
```


```javascript
import React from 'react';
const Headline = (props) => {
return (
<h1>{props.bigTitle}</h1>
)
export default Headline;
```

---

## Xử lý data trong component ItemList

App.js
❑ Do dữ liệu của thuộc
tính itemList có 2 cấp,
nên cách xử lý khác hơn
so với xử lý component
Headline.
❑ Nội dung phần này sẽ áp
dụng cách xử lý dữ liệu
VB bài React.js giống như
nhúng map() vào JSX


```html
import React from 'react';
const ListItem = (props) => {
return (
<li>
<h2>{props.propsItem.title}</h2>
<div>
{props.propsItem.info}
</div>
</li>
)
const Itemlist = (props)=> {
const propslist = props.itemlist;
return (
<ul className="item-list">
KpropsList.map((item) =>
<ListItem propsItem=(item} />
</ul>
export default ItemList;
```

---

## Xử lý data trong component BoxList

App.js


```javascript
import React from 'react';
v
v
v const BoxItem = (props) => {
return (
<li>
{props.propsBox}
</li>
};
v const BoxList = (props) => {
const boxlist = props.boxList;
v
return (
v|
<ul className="box-list">
v
|{boxList.map((itemBox) =>
<BoxItem propsBox={itemBox} />
)}
</ul>
}5
export default BoxList;
```


```javascript
Next.js
React.js
NodeJS
Express.js
```

---

## Viết lại App.js theo state

❑ this.state = blog chúng ta liên
kết dữ liệu với state thông
qua this.state.
❑ Khi này chúng ta có thể sử
dụng this.state để gọi giá trị
dữ liệu của blog.


```html
1} import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Headline from
./components/Headline';
import Itemlist from
'./components/ItemList';
import Aside from './components/Aside';
import BoxList from './components/BoxList';
import Footer from'
•/components/Footer';
฿
1
class App extends Component {
constructor(props){
super (props);
this.state = blog;
};
render () {
return (
<div id="layout"›
<Header />
<main>
‹section id="content">
<Headline bigtitle=(this.state.bigtitle} />
‹Itemlist itemlist={this.state.itemlist} />
</ section›
<Aside />
<BoxList boxList={this.state.boxList} />
</mainy
<Footer />
</div>
) ;
}5
```

---

## Xử lý thay đổi dữ liệu trong component

Sử dụng setState thay đổi dữ liệu của ItemList.
- Trước tiên ta cần tạo button để thực hiện hành động thay đổi,
và tạo dữ liệu thay đổi bên trong setState, ta tiến hành như sau
- 
App.js


```javascript
//dữ liệu sẽ thay đổi
changeItem = () => {
this.setstate(f
itemList:[
title: 'Giới thiệu React.js',
info: 'Khái niệm React.js.'
},
title: 'Thành phần của React.js',
info: 'Components là thành phần quan trọng của React.js.'
title: 'Cập nhật dữ liệu bằng setstate'
info: 'Props and state.'
});
```


```javascript
HEADER
Hướng dẫn học React.js.
Giới thiệu React.js
Khái niệm React.js.
Thành phần của React.js
Components là thành phần quan trọng của React.js.
Cập nhật dữ liệu băng setState
Props and State.
Change Data
```

---

## Cài đặt React.js với thư viện build vitejs

- 
ViteJS là một công cụ mã nguồn mở (build tool) cho việc phát triển
ứng dụng web. ViteJS sinh ra để hỗ trợ việc dev và build nhanh hơn.
- 
ViteJS được phát triển bởi Evan You, người sáng tạo và đã làm việc
trên dự án Vue.js.
- 
Cài đặt ViteJS và sử dụng nó trong một dự án React:
  - Cài đặt Node.js và npm trên máy tính của bạn.
  - Sử dụng npm để cài đặt ViteJS bằng lệnh sau: npm create
vite@latest
  - Đặt tên project: vite-project
- Chọn React để cài React và React-dom và chọn Javascript + JWC
hoặc TypeScript + JWC
  - Chuyển vào thư mục project: cd vite-project
  - Cài đặt module: npm install
  - Chạy project: npm run dev
  - Biên dịch và deploy thì dùng lệnh build: npm run build

---

## Cài đặt React.js với thư viện build vitejs

http://localhost:5173/


```javascript
• vite-project
› To node_modules
> E public
v Fil src
V (@) assets
fi react.svg
E App.css
฿ App.jsx
E index.css
main.jsx
•.eslintrc.cjs
•y gitignore
index.html
a package-lock.json
t package.json
M+ README.md
Vvite.config.js
```


```json
p package.json X
{
"name": "vite-project",
"private": true,
"version": "0.0.0",
"type": "module",
• Debug
"scripts": {
"dev": "vite"
"build": "vite build",
"lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
"preview": "vite preview"
"dependencies": {
"react": "^18.3.1",
"react-dom": "^18.3.1"
"devDependencies": {
"@types/react": "^18.3.3"
"@types/react-dom": "^18.3.0",
"@vitejs/plugin-react-swc": "^3.5.0",
"eslint": "^8.57.0"
"eslint-plugin-react": "^7.34.3"
"eslint-plugin-react-hooks": "^4.6.2", ]
"eslint-plugin-react-refresh": "^0.4.7",
"vite": "^5.3.4"
```

---

## React.js api

Khi làm việc với React, chúng ta sẽ thường có nhu cầu liên kết
dữ liệu như MySQL, MongoDB, ..., tuy nhiên bản thân React là
một Javascript, chỉ thao tác ở phía client, việc liên kết sử lý dữ
liệu là không thể. Để giải quyết vấn đề này, chúng ta sẽ liên kết
dữ liệu với React thông qua API
- Bước 1: Tạo project API bằng Express.js
  - Tạo thư mục: api-express
  - Chuyển vào thư mục: cd api-express
  - Tạo file package.json: npm init -y
  - Cài express: npm install --save express và npm i --save-dev
@types/express
  - Chạy: node server.js
- Bước 2: Tạo và gọi API
-

---

## React.js api

Bước 1


```json
w package.json X
"name": "api-express",
"version": "1.0.0"
"main": "server.js"
> Debug
"scripts": {
"test": "echo |"Error: no test specified\" && exit 1"
"Keywords": [],
"author": ""
"license": "ISC",
"description": ""
"dependencies": {
"express": "^4.19.2"
"devDependencies": {
"@types/express": "^4.17.21"
},
"type": "module"
```

---

## React.js api

Bước 1
❑ express = require('express’) hoặc
import express from 'express'; //sử
dụng cho type:module , gọi thư viện
Express.
❑ app.get('/',
(req,
res)
=>
res.send(‘Vũ Toàn Thắng')); chính
là một API đơn giản gọi nội
dung Hello World.
❑ app.listen(4000, () =>) dòng này quy
định port cho ứng dụng.


```javascript
JS
server.js X
import express from 'express'; //sử dụng cho type:module
const app = express();
(async () => {
try i
} catch (error) {
}
}) ()
app.get('/', (req, res) => res.send('Vũ Toàn Thắng!')) ;
//using mongoose
// await connection();
app.listen(4000, () => {
console.1og("Backend Nodejs App listening on port ${4000}")|
console.log(">>> Error connect to DB: "
, error)
```

---

## React.js api

❑ Bước 2:
❑ Cài đặt React với vitejs (xem lại phần
trước)
❑ Cài đặt concurrently để liên kết cổng
server và client
❑ Vào thư mục api-express gõ npm
install –save concurrently
❑ Chỉnh lại file package.json (ở slide tiếp
theo)
❑ Chạy project: npm run dev


```javascript
api-express
› Ig node_modules
vite-project
› @ node_modules
public
> Eil src
.eslintrc.cjs
gitignore
index.html
Ggm
package-lock.json
Ggm
package.json
M* README.md
vite.config.js
package-lock.json
package.json
JS server.js
```

---

## React.js api

❑ "server": "node server.js" server chạy bằng lệnh này.
❑ "client": "npm run start --prefix vite-project" client chạy bằngLTlệnh này.
❑ "dev": "concurrently \"npm run server\" \"npm run client\"" chạy kết hợp giữa server
và client bằng lệnh này.
❑ Chỉnh lại file /client/package.json để khai báo thêm proxy nhận port 4000 từ server:


```json
p package.json X
"name": "api-express",
"version": "1.0.0"
"main": "server.js"
• Debug
"scripts": {
"server": "node server.js",
"client": "npm run dev• --prefix vite-project",
• "dev": "concurrently | "npm run server\" \"npm run client\"'
},
"keywords": [],
"author": ""
"license": "ISC"
"description":**
"dependencies": {
"concurrently": "^8.2.2",
"express": "^4.19.2"
},
"devDependencies": {
"@types/express": "^4.17.21"
},
"type": "module"
```


```json
w package.json X
api-express >vite-project>
package.json >...
"name": "vite-project",
"private": true,
"version": "0.0.0",
"type": "module",
• Debug
"scripts": {
"dev": "vite"
"build": "vite build"
"lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
"preview": "vite preview"
"dependencies": !
"react": "^18.3.1"
"react-dom": "^18.3.1"
},
"devDependencies": {
"@types/react": "^18.3.3"
"@types/react-dom": "^18.3.0"
"@vitejs/plugin-react-swc": "^3.5.0",
"eslint": "^8.57.0",
"eslint-plugin-react": "^7.34.3"
"eslint-plugin-react-hooks": "^4.6.2",
"eslint-plugin-react-refresh": "^0.4.7",
"vite": "15.3.4"
• "proxy": "http://localhost:4000"
```

---

## React.js api

- 
Lấy dữ liệu từ API bằng dữ liệu JSON, gửi sang project React, tuy
nhiên để xử lý các thao tác HTTP REQUEST như các phương
thức GET, POST, DELETE,... chúng ta cần cài đặt thư viện Axios để
hỗ trợ.
  - Bước 1: Viết API trong server.js


```javascript
JS server.js x
api-express > JS
server.js>...
import express from 'express';
import cors from 'cors';
const app = express();
//config cors
app.use(cors());
//config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data
app.get('/api/test', (req, res) => {
res. json({ message: 'I am a message from Server!'});
try {
//using mongoose
// await connection();
app.listen(4000, () = {
console.log(' Backend Nodejs App listening on port ${4000}')
} catch (error) {
console.log(">>> Error connect to DB: ", error)
```

---

## React.js api

- 
Lấy dữ liệu từ API bằng dữ liệu JSON, gửi sang project React, tuy
nhiên để xử lý các thao tác HTTP REQUEST như các phương
thức GET, POST, DELETE,... chúng ta cần cài đặt thư viện Axios để
hỗ trợ.
  - Bước 2: Cài Axios: npm install --save axios
  - Bước 3: Cài cors: npm install --save cors và npm i
--save-dev @types/cors
  - Bước 4:Cấu hình cors trong file server.js
const cors = require('cors’);
const app = express();
//config cors
app.use(cors());
  - Bước 5: Cài npm install --save react-scripts và vào file App.jsx
của project vite-project chỉnh lại

---

## React.js api

  - Bước 3: Vào file App.jsx của project vite-project chỉnh lại
❑ import axios from 'axios'; gọi
thư viện Axios.
❑ state = { message: '' }; Khai báo
ban đầu cho State giá trị rỗng,
để khi lấy được dữ liệu ta sẽ
dùng hàm setState để cập nhật
lên giá trị mới.
❑ componentDidMount() các bạn
xem lại ở bài Component
Lifecycle
❑ axios.get('/api/test') lấy dữ liệu
bằng thư viện Axios và trả về
hàm setState để cập nhật giá
trị mới cho State.
❑ this.state.message
gọi giá trị
State mới được cập nhật.


```html
App.jsx X
import { Component } from 'react';
import
•/App.css'.
import axios from 'axios';
class App extends Component {
•state = |
message:'
componentDidMount()• {
•axios.get('http://localhost:4000/api/test')
•then(result => this.setstate({message: result.data.message}))
render ()•(
•return(
•<div-className="App">
• <h1>{ this.state.message }</h1>
</divy
export default App;
```